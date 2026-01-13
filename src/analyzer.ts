// src/analyzer.ts
import * as fs from 'fs';
import * as path from 'path';
import Parser from 'tree-sitter';
import JavaScript from 'tree-sitter-javascript';
import TypeScript from 'tree-sitter-typescript';
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
  private jsParser: Parser;
  private tsParser: Parser;
  private functions: FunctionInfo[] = [];
  private calls: FunctionCall[] = [];

  constructor() {
    this.jsParser = new Parser();
    this.jsParser.setLanguage(JavaScript);

    this.tsParser = new Parser();
    this.tsParser.setLanguage(TypeScript.typescript);
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
      } else if (
        item.endsWith('.js') || 
        item.endsWith('.ts') || 
        item.endsWith('.jsx') || 
        item.endsWith('.tsx')
      )   {
        files.push(fullPath);
      }
    }

    return files;
  }

  private extractFunctions(tree: Parser.Tree, filePath: string): void {
    const visit = (node: Parser.SyntaxNode) => {
      // Regular function declarations
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
      
      // Arrow functions: const add = () => {}
      if (node.type === 'variable_declarator') {
        const nameNode = node.childForFieldName('name');
        const valueNode = node.childForFieldName('value');
        
        if (nameNode && valueNode && valueNode.type === 'arrow_function') {
          this.functions.push({
            name: nameNode.text,
            file: filePath,
            line: nameNode.startPosition.row + 1
          });
        }
      }
      
      // Class methods
      if (node.type === 'method_definition') {
        const nameNode = node.childForFieldName('name');
        if (nameNode) {
          // Get the class name for context
          let className = 'Unknown';
          let parent = node.parent;
          while (parent) {
            if (parent.type === 'class_declaration') {
              const classNameNode = parent.childForFieldName('name');
              if (classNameNode) {
                className = classNameNode.text;
              }
              break;
            }
            parent = parent.parent;
          }
          
          this.functions.push({
            name: `${className}.${nameNode.text}`,
            file: filePath,
            line: nameNode.startPosition.row + 1
          });
        }
      }
  
      // Recurse through children
      for (let i = 0; i < node.childCount; i++) {
        visit(node.child(i)!);
      }
    };
  
    visit(tree.rootNode);
  }

  // Extract function calls from a single file
private extractCalls(tree: Parser.Tree, filePath: string): void {
  let currentFunction: string | null = null;
  let currentClass: string | null = null;

  const visit = (node: Parser.SyntaxNode) => {
    // Track current class
    if (node.type === 'class_declaration') {
      const classNameNode = node.childForFieldName('name');
      if (classNameNode) {
        const previousClass = currentClass;
        currentClass = classNameNode.text;

        for (let i = 0; i < node.childCount; i++) {
          visit(node.child(i)!);
        }

        currentClass = previousClass;
        return;
      }
    }

    // Track regular functions
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

    // Track arrow functions
    if (node.type === 'variable_declarator') {
      const nameNode = node.childForFieldName('name');
      const valueNode = node.childForFieldName('value');
      
      if (nameNode && valueNode && valueNode.type === 'arrow_function') {
        const previousFunction = currentFunction;
        currentFunction = nameNode.text;

        for (let i = 0; i < valueNode.childCount; i++) {
          visit(valueNode.child(i)!);
        }

        currentFunction = previousFunction;
        return;
      }
    }

    // Track class methods
    if (node.type === 'method_definition') {
      const nameNode = node.childForFieldName('name');
      if (nameNode && currentClass) {
        const previousFunction = currentFunction;
        currentFunction = `${currentClass}.${nameNode.text}`;

        for (let i = 0; i < node.childCount; i++) {
          visit(node.child(i)!);
        }

        currentFunction = previousFunction;
        return;
      }
    }

    // Find regular function calls: someFunction()
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
      
      // Find method calls: this.someMethod() or obj.method()
      if (functionNode && functionNode.type === 'member_expression') {
        const propertyNode = functionNode.childForFieldName('property');
        if (propertyNode) {
          // Check if it's this.method()
          const objectNode = functionNode.childForFieldName('object');
          if (objectNode && objectNode.type === 'this' && currentClass) {
            this.calls.push({
              caller: currentFunction,
              callee: `${currentClass}.${propertyNode.text}`,
              file: filePath,
              line: propertyNode.startPosition.row + 1
            });
          } else {
            // Generic method call
            this.calls.push({
              caller: currentFunction,
              callee: propertyNode.text,
              file: filePath,
              line: propertyNode.startPosition.row + 1
            });
          }
        }
      }
    }

    // Continue visiting children
    for (let i = 0; i < node.childCount; i++) {
      visit(node.child(i)!);
    }
  };

  visit(tree.rootNode);
}


private analyzeFile(filePath: string): void {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    
    // Choose parser based on file
    const isTypeScript = filePath.endsWith('.ts') || filePath.endsWith('.tsx');
    const parser = isTypeScript ? this.tsParser : this.jsParser;
    
    const tree = parser.parse(code);

    this.extractFunctions(tree, filePath);
    this.extractCalls(tree, filePath);
  } catch (error) {
    // Silently skip files that can't be parsed
    console.error(`Warning: Could not parse ${filePath}`);
  }
}

public analyzeDirectory(directory: string): CallGraph {
  // Don't print here - let CLI handle output
  const files = this.findJSFiles(directory);
  
  // Analyze silently
  files.forEach((filePath) => {
    try {
      const code = fs.readFileSync(filePath, 'utf-8');
  
      const isTypeScript =
        filePath.endsWith('.ts') || filePath.endsWith('.tsx');
  
      const parser = isTypeScript ? this.tsParser : this.jsParser;
      const tree = parser.parse(code);
  
      this.extractFunctions(tree, filePath);
      this.extractCalls(tree, filePath);
    } catch (error) {
      console.error(`Failed to process file: ${filePath}`, error);
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