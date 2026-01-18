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

interface ImportInfo {
  file: string;
  imports: string[];  // Files this file imports
  line: number;
}

interface ExportInfo {
  file: string;
  exports: string[]; 
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

export interface ComplexityInfo {
  name: string;
  file: string;
  line: number;
  complexity: number;
  lineCount: number;
  paramCount: number;
}

export class CodeAnalyzer {
  private jsParser: Parser;
  private tsParser: Parser;
  private functions: FunctionInfo[] = [];
  private calls: FunctionCall[] = [];
  private fileCount: number = 0; 
  private exportedFunctions = new Set<string>();
  private imports: ImportInfo[] = [];     
  private exports: ExportInfo[] = [];
  private complexity: ComplexityInfo[] = [];

  

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
        if (item === 'node_modules' || 
        item.startsWith('.') ||
        item === 'test' || 
        item === '__tests__' ||
        item === 'tests') {
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
          this.calculateComplexity(node, nameNode.text, filePath);
        }
      }

      // Handle: module.exports = IDENTIFIER
    
    if (node.type === 'assignment_expression') {
      const left = node.childForFieldName('left');
      const right = node.childForFieldName('right');
    
      if (
        left?.type === 'member_expression' &&
        left.text === 'module.exports' &&
        right?.type === 'identifier'
      ) {
        this.exportedFunctions.add(right.text);
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
          this.calculateComplexity(valueNode, nameNode.text, filePath);
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

private extractImportsExports(tree: Parser.Tree, filePath: string): void {



  const fileImports: string[] = [];
  const fileExports: string[] = [];
  
  // Read the actual file content
  const code = fs.readFileSync(filePath, 'utf-8');
  
  
  // Find ES6 imports: import ... from '...'
  const es6ImportRegex = /import\s+.*?from\s+['"]([^'"]+)['"]/g;
  let match;
  while ((match = es6ImportRegex.exec(code)) !== null) {
    const modulePath = match[1];
    if (modulePath.startsWith('.') || modulePath.startsWith('/')) {
      fileImports.push(modulePath);
    }
  }
  
  // Find CommonJS requires: require('...')
  const requireRegex = /require\s*\(\s*['"]([^'"]+)['"]\s*\)/g;
  while ((match = requireRegex.exec(code)) !== null) {
    const modulePath = match[1];
    if (modulePath.startsWith('.') || modulePath.startsWith('/')) {
      fileImports.push(modulePath);
    }
  }
  
  // Find ES6 exports
  if (code.includes('export ')) {
    // export function name() or export const name
    const exportFunctionRegex = /export\s+(?:async\s+)?function\s+(\w+)/g;
    while ((match = exportFunctionRegex.exec(code)) !== null) {
      fileExports.push(match[1]);
    }
    
    const exportConstRegex = /export\s+const\s+(\w+)/g;
    while ((match = exportConstRegex.exec(code)) !== null) {
      fileExports.push(match[1]);
    }
    
    // export default
    if (code.includes('export default')) {
      fileExports.push('default');
    }
  }
  
  // Find CommonJS exports
  if (code.includes('module.exports') || code.includes('exports.')) {
    fileExports.push('commonjs-exports');
  }
  
  // Store results
  if (fileImports.length > 0) {
    this.imports.push({
      file: filePath,
      imports: fileImports,
      line: 1
    });
  }
  
  if (fileExports.length > 0) {
    this.exports.push({
      file: filePath,
      exports: fileExports,
      line: 1
    });
  }
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
    this.extractImportsExports(tree, filePath);
  } catch (error) {
    // Silently skip files that can't be parsed
    console.error(`Warning: Could not parse ${filePath}`);
  }
}

private calculateComplexity(node: Parser.SyntaxNode, functionName: string, filePath: string): void {
  let complexity = 1; // Base complexity
  let lineCount = node.endPosition.row - node.startPosition.row + 1;
  let paramCount = 0;

  // Count parameters
  const paramsNode = node.childForFieldName('parameters');
  if (paramsNode) {
    for (let i = 0; i < paramsNode.childCount; i++) {
      const child = paramsNode.child(i);
      if (child && child.type === 'identifier') {
        paramCount++;
      }
    }
  }

  // Count complexity-adding constructs
  const visit = (currentNode: Parser.SyntaxNode) => {
    // Each decision point adds 1
    if (
      currentNode.type === 'if_statement' ||
      currentNode.type === 'for_statement' ||
      currentNode.type === 'while_statement' ||
      currentNode.type === 'case_clause' ||
      currentNode.type === 'catch_clause' ||
      currentNode.type === 'conditional_expression'  // ternary
    ) {
      complexity++;
    }

    // Logical operators add complexity
    if (
      currentNode.type === 'binary_expression' &&
      (currentNode.text.includes('&&') || currentNode.text.includes('||'))
    ) {
      complexity++;
    }

    // Recurse
    for (let i = 0; i < currentNode.childCount; i++) {
      visit(currentNode.child(i)!);
    }
  };

  visit(node);

  this.complexity.push({
    name: functionName,
    file: filePath,
    line: node.startPosition.row + 1,
    complexity,
    lineCount,
    paramCount
  });
}

public analyzeDirectory(directory: string): CallGraph {
  const files = this.findJSFiles(directory);
  this.fileCount = files.length;
  
  // Analyze each file using the analyzeFile method
  files.forEach(file => this.analyzeFile(file));  

  // Build graph
  const graph = new CallGraph();

  this.functions.forEach(fn => {
    if (!fn.name) {
      console.warn(`[WARN] Anonymous function ignored → ${fn.file}:${fn.line}`);
      return;
    }
    //console.log(`[FUNCTION] ${fn.name} → ${fn.file}:${fn.line}`);
    graph.addNode(fn.name, fn.file, fn.line);
  });

  this.calls.forEach(call => {
    if (!call.caller || !call.callee) {
      console.warn(`[WARN] Unresolved call ignored → ${call.file}:${call.line}`);
      return;
    }
    //console.log(`[CALL] ${call.caller} → ${call.callee} (${call.file}:${call.line})`);
    graph.addEdge(call.caller, call.callee, call.file, call.line);
  });

  // Add dependencies
  this.imports.forEach(importInfo => {
    importInfo.imports.forEach(importPath => {
      graph.addDependency(importInfo.file, importPath);
    });
  });

  // Add complexity
  this.complexity.forEach(c => {
    graph.addComplexity(c.name, c);
  });

  return graph;
}


public getFileCount(): number {
  return this.fileCount;
}

public getImports(): ImportInfo[] {
  return this.imports;
}

public getExports(): ExportInfo[] {
  return this.exports;

}

public getComplexity(): ComplexityInfo[] {
  return this.complexity;
}
}



