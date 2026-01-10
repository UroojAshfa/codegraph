// src/analyzer.ts
import * as fs from 'fs';
import * as path from 'path';
import Parser from 'tree-sitter';
import JavaScript from 'tree-sitter-javascript';
import { CallGraph } from './graph';

interface FunctionInfo {
  name: string;
  file: string;
  line: number;
}

interface FunctionCall {
  caller: string;
  callee: string;
  file: string;
  line: number;
}

interface AnalysisResult {
  functions: FunctionInfo[];
  calls: FunctionCall[];
}

export class CodeAnalyzer {
  private parser: Parser;
  private functions: FunctionInfo[] = [];
  private calls: FunctionCall[] = [];

  constructor() {
    this.parser = new Parser();
    this.parser.setLanguage(JavaScript);
  }

  // Recursively find all .js files in a directory
  private findJSFiles(dir: string): string[] {
    const files: string[] = [];

    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Skip node_modules and hidden directories
        if (item === 'node_modules' || item.startsWith('.')) {
          continue;
        }
        // Recursively search subdirectories
        files.push(...this.findJSFiles(fullPath));
      } else if (item.endsWith('.js') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }

    return files;
  }

  // Extract functions from a single file
  private extractFunctions(tree: Parser.Tree, filePath: string): void {
    const visit = (node: Parser.SyntaxNode) => {
      if (node.type === 'function_declaration') {
        const nameNode = node.childForFieldName('name');
        if (nameNode) {
          this.functions.push({
            name: nameNode.text,
            file: filePath,
            line: nameNode.startPosition.row + 1
          });
        }
      }

      for (let i = 0; i < node.childCount; i++) {
        visit(node.child(i)!);
      }
    };

    visit(tree.rootNode);
  }

  // Extract function calls from a single file
  private extractCalls(tree: Parser.Tree, filePath: string): void {
    let currentFunction: string | null = null;

    const visit = (node: Parser.SyntaxNode) => {
      if (node.type === 'function_declaration') {
        const nameNode = node.childForFieldName('name');
        if (nameNode) {
          const previousFunction = currentFunction;
          currentFunction = nameNode.text;

          for (let i = 0; i < node.childCount; i++) {
            visit(node.child(i)!);
          }

          currentFunction = previousFunction;
          return;
        }
      }

      if (node.type === 'call_expression' && currentFunction) {
        const functionNode = node.childForFieldName('function');
        if (functionNode && functionNode.type === 'identifier') {
          this.calls.push({
            caller: currentFunction,
            callee: functionNode.text,
            file: filePath,
            line: functionNode.startPosition.row + 1
          });
        }
      }

      for (let i = 0; i < node.childCount; i++) {
        visit(node.child(i)!);
      }
    };

    visit(tree.rootNode);
  }

  // Analyze a single file
  private analyzeFile(filePath: string): void {
    try {
      const code = fs.readFileSync(filePath, 'utf-8');
      const tree = this.parser.parse(code);

      this.extractFunctions(tree, filePath);
      this.extractCalls(tree, filePath);

      console.log(`  ✓ ${filePath}`);
    } catch (error) {
      console.log(`  ✗ ${filePath} - Error: ${error}`);
    }
  }

  // Main analysis function
// In src/analyzer.ts, update analyzeDirectory:

public analyzeDirectory(directory: string): CallGraph {
  // Don't print here - let CLI handle output
  const files = this.findJSFiles(directory);
  
  // Analyze silently
  files.forEach(file => {
    try {
      const code = fs.readFileSync(file, 'utf-8');
      const tree = this.parser.parse(code);
      this.extractFunctions(tree, file);
      this.extractCalls(tree, file);
    } catch (error) {
      // Silently skip files that can't be parsed
    }
  });

  // Build graph
  const graph = new CallGraph();

  this.functions.forEach(fn => {
    graph.addNode(fn.name, fn.file, fn.line);
  });

  this.calls.forEach(call => {
    graph.addEdge(call.caller, call.callee, call.file, call.line);
  });

  return graph;
}
}