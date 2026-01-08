// src/index.ts
import * as fs from 'fs';
import Parser from 'tree-sitter';
import JavaScript from 'tree-sitter-javascript';

// Initialize parser
const parser = new Parser();
parser.setLanguage(JavaScript);

// Read the test file
const filePath = './test-files/sample.js';
const sourceCode = fs.readFileSync(filePath, 'utf-8');

console.log('📄 Reading file:', filePath);
console.log('---');

// Parse it
const tree = parser.parse(sourceCode);

console.log('✅ Successfully parsed!');
console.log('Root node type:', tree.rootNode.type);
console.log('Number of children:', tree.rootNode.childCount);
console.log('---\n');

// Extract function information
interface FunctionInfo {
  name: string;
  line: number;
}

function extractFunctions(node: Parser.SyntaxNode): FunctionInfo[] {
  const functions: FunctionInfo[] = [];
  
  function visit(currentNode: Parser.SyntaxNode) {
    // Check if this is a function declaration
    if (currentNode.type === 'function_declaration') {
      const nameNode = currentNode.childForFieldName('name');
      if (nameNode) {
        functions.push({
          name: nameNode.text,
          line: nameNode.startPosition.row + 1
        });
      }
    }
    
    // Visit all children recursively
    for (let i = 0; i < currentNode.childCount; i++) {
      visit(currentNode.child(i)!);
    }
  }
  
  visit(node);
  return functions;
}

interface FunctionCall {
    caller: string;
    callee: string;
    line: number;
  }
  
  function extractFunctionCalls(node: Parser.SyntaxNode): FunctionCall[] {
    const calls: FunctionCall[] = [];
    let currentFunction: string | null = null;
    
    function visit(currentNode: Parser.SyntaxNode) {
      // Track which function we're currently inside
      if (currentNode.type === 'function_declaration') {
        const nameNode = currentNode.childForFieldName('name');
        if (nameNode) {
          const previousFunction = currentFunction;
          currentFunction = nameNode.text;
          
          // Visit children of this function
          for (let i = 0; i < currentNode.childCount; i++) {
            visit(currentNode.child(i)!);
          }
          
          // Restore previous function context
          currentFunction = previousFunction;
          return; // Don't continue visiting below
        }
      }
      
      // Find function calls
      if (currentNode.type === 'call_expression' && currentFunction) {
        const functionNode = currentNode.childForFieldName('function');
        if (functionNode && functionNode.type === 'identifier') {
          calls.push({
            caller: currentFunction,
            callee: functionNode.text,
            line: functionNode.startPosition.row + 1
          });
        }
      }
      
      // Continue visiting children
      for (let i = 0; i < currentNode.childCount; i++) {
        visit(currentNode.child(i)!);
      }
    }
    
    visit(node);
    return calls;
  }
  
// Extract and display functions
const functions = extractFunctions(tree.rootNode);

console.log('🔍 Functions found:');
functions.forEach(fn => {
  console.log(`   - ${fn.name} (line ${fn.line})`);
});

console.log('\n---');
console.log(` Total functions: ${functions.length}`);

const calls = extractFunctionCalls(tree.rootNode);

console.log('\n🔗 Function calls:');
calls.forEach(call => {
  console.log(`   ${call.caller} -> ${call.callee} (line ${call.line})`);
});

console.log('\n---');
console.log(` Total function calls: ${calls.length}`);