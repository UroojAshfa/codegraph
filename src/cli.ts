import { Command } from 'commander';
import ora from 'ora';
import chalk from 'chalk';
import * as fs from 'fs';
import * as path from 'path';
import { CodeAnalyzer } from './analyzer';
import { AIService } from './ai';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const program = new Command();

program
  .name('codegraph')
  .description('AI-powered codebase intelligence tool')
  .version('0.1.0');

// analyze command
program
  .command('analyze <directory>')
  .description('Analyze a codebase and generate call graph')
  .option('-o, --output <file>', 'Output file path', 'output.json')
  .option('-f, --format <type>', 'Output format (json|mermaid|both)', 'both')
  .option('--no-stats', 'Skip statistics display')
  .action((directory: string, options) => {
    if (!fs.existsSync(directory)) {
      console.error(chalk.red(`✗ Directory not found: ${directory}`));
      process.exit(1);
    }

    console.log(chalk.bold.cyan('\n🚀 CodeGraph v0.1.0\n'));
    const spinner = ora('Scanning directory...').start();

    try {
      const analyzer = new CodeAnalyzer();
      const graph = analyzer.analyzeDirectory(directory);

      spinner.succeed(chalk.green(`Analysis complete! Analyzed ${analyzer.getFileCount()} files`));

      if (options.stats) {
        console.log('\n' + chalk.bold('📊 STATISTICS\n'));
        graph.printStats();
      }

      const outputPath = path.resolve(options.output);

      if (options.format === 'json' || options.format === 'both') {
        const jsonOutput = graph.toJSON();
        const jsonFile = outputPath.replace(/\.[^/.]+$/, '') + '.json';
        fs.writeFileSync(jsonFile, JSON.stringify(jsonOutput, null, 2));
        console.log(chalk.green(`\n💾 Saved JSON to ${jsonFile}`));
      }

      if (options.format === 'mermaid' || options.format === 'both') {
        const mermaidDiagram = graph.toMermaid();
        const mermaidFile = outputPath.replace(/\.[^/.]+$/, '') + '.md';
        const content = '```mermaid\n' + mermaidDiagram + '```\n\nView at: https://mermaid.live';
        fs.writeFileSync(mermaidFile, content);
        console.log(chalk.green(`📊 Saved Mermaid to ${mermaidFile}`));
      }

      console.log(chalk.bold.green('\n✨ Done!\n'));
    } catch (error) {
      spinner.fail(chalk.red('Analysis failed'));
      console.error(chalk.red(`\n✗ Error: ${error}`));
      process.exit(1);
    }
  });

// Explain command
program
  .command('explain <file> <functionName>')
  .description('Get AI explanation of a specific function')
  .action(async (file: string, functionName: string) => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error(chalk.red('✗ GEMINI_API_KEY not found in environment'));
      console.log(chalk.yellow('\nSet your API key:'));
      console.log(chalk.gray('  export GEMINI_API_KEY=your_key'));
      console.log(chalk.gray('  or create a .env file'));
      process.exit(1);
    }

    if (!fs.existsSync(file)) {
      console.error(chalk.red(`✗ File not found: ${file}`));
      process.exit(1);
    }

    console.log(chalk.bold.cyan('\n🤖 AI Function Analysis\n'));
    const spinner = ora('Analyzing codebase...').start();

    try {
      const analyzer = new CodeAnalyzer();
      const directory = path.dirname(file);
      const graph = analyzer.analyzeDirectory(directory);

      const complexity = analyzer.getComplexity().find(c => c.name === functionName);
      
      if (!complexity) {
        spinner.fail(chalk.red(`Function "${functionName}" not found`));
        process.exit(1);
      }

      const callers = graph.getCallers(functionName);
      const callees = graph.getCallees(functionName);

      const fileContent = fs.readFileSync(file, 'utf-8');
      const lines = fileContent.split('\n');
      const startLine = complexity.line - 1;
      const endLine = startLine + complexity.lineCount;
      const functionCode = lines.slice(startLine, endLine).join('\n');

      spinner.text = 'Asking AI...';

      const ai = new AIService(apiKey);
      const explanation = await ai.explainFunction(
        functionName,
        functionCode,
        complexity.complexity,
        callers,
        callees
      );

      spinner.succeed(chalk.green('Analysis complete!'));

      console.log(chalk.bold(`\n📍 Function: ${chalk.cyan(functionName)}`));
      console.log(chalk.gray(`   Location: ${file}:${complexity.line}`));
      console.log(chalk.gray(`   Complexity: ${complexity.complexity}`));
      console.log(chalk.gray(`   Lines: ${complexity.lineCount}`));
      console.log(chalk.gray(`   Parameters: ${complexity.paramCount}`));
      
      console.log(chalk.bold('\n🔍 Context:'));
      console.log(chalk.gray(`   Called by: ${callers.length > 0 ? callers.join(', ') : 'none (entry point)'}`));
      console.log(chalk.gray(`   Calls: ${callees.length > 0 ? callees.join(', ') : 'none (leaf function)'}`));

      console.log(chalk.bold('\n🤖 AI Analysis:\n'));
      console.log(explanation);

      const smells = await ai.detectCodeSmells(
        functionCode,
        complexity.complexity,
        complexity.lineCount,
        complexity.paramCount
      );

      if (smells.length > 0 && smells[0] !== 'No obvious code smells detected ✅') {
        console.log(chalk.bold('\n⚠️  Code Smells:\n'));
        smells.forEach(smell => {
          if (smell.startsWith('💡')) {
            console.log(chalk.yellow(smell));
          } else {
            console.log(chalk.red(`   • ${smell}`));
          }
        });
      } else {
        console.log(chalk.bold.green('\n✅ No code smells detected'));
      }

      console.log();

    } catch (error) {
      spinner.fail(chalk.red('Analysis failed'));
      console.error(chalk.red(`\n✗ Error: ${error}`));
      process.exit(1);
    }
  });

//Analyze complex functions command
program
  .command('analyze-complex <directory>')
  .description('Analyze all functions with complexity >10 using AI')
  .option('-t, --threshold <number>', 'Complexity threshold (default: 10)', '10')
  .action(async (directory: string, options) => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error(chalk.red('✗ GEMINI_API_KEY not found in environment'));
      console.log(chalk.yellow('\nSet your API key:'));
      console.log(chalk.gray('  export GEMINI_API_KEY=your_key'));
      console.log(chalk.gray('  or create a .env file'));
      process.exit(1);
    }

    if (!fs.existsSync(directory)) {
      console.error(chalk.red(`✗ Directory not found: ${directory}`));
      process.exit(1);
    }

    console.log(chalk.bold.cyan('\n🔥 AI Complexity Analysis\n'));
    const spinner = ora('Analyzing codebase...').start();

    try {
      const analyzer = new CodeAnalyzer();
      analyzer.analyzeDirectory(directory);
      const complexity = analyzer.getComplexity();

      const threshold = parseInt(options.threshold);
      const complex = complexity
        .filter(c => c.complexity > threshold)
        .sort((a, b) => b.complexity - a.complexity);

      if (complex.length === 0) {
        spinner.succeed(chalk.green(`No functions with complexity >${threshold} found!`));
        console.log(chalk.green(`\n✅ All functions have acceptable complexity (<${threshold})\n`));
        return;
      }

      spinner.succeed(chalk.green(`Found ${complex.length} complex functions (>${threshold})`));

      const ai = new AIService(apiKey);

      console.log(chalk.bold('\n📊 Complex Functions:\n'));

      for (let i = 0; i < complex.length; i++) {
        const fn = complex[i];
        
        console.log(chalk.bold(`${i + 1}. ${chalk.red(fn.name)}`));
        console.log(chalk.gray(`   Complexity: ${fn.complexity} | Lines: ${fn.lineCount} | Params: ${fn.paramCount}`));
        console.log(chalk.gray(`   Location: ${fn.file}:${fn.line}\n`));

        const spinner2 = ora('Asking AI...').start();
        
        try {
          const analysis = await ai.analyzeComplexity(fn.name, fn.complexity, fn.lineCount);
          spinner2.succeed();
          console.log(chalk.yellow(`   ${analysis}\n`));
        } catch (error) {
          spinner2.fail(chalk.red('AI analysis failed'));
          console.log(chalk.gray(`   (Could not get AI analysis)\n`));
        }
      }

      console.log(chalk.bold.green(`✨ Analyzed ${complex.length} functions\n`));

    } catch (error) {
      spinner.fail(chalk.red('Analysis failed'));
      console.error(chalk.red(`\n✗ Error: ${error}`));
      process.exit(1);
    }
  });

//Refactoring suggestions command
program
  .command('refactor <file> <functionName>')
  .description('Get AI refactoring suggestions for a function')
  .action(async (file: string, functionName: string) => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error(chalk.red('✗ GEMINI_API_KEY not found in environment'));
      console.log(chalk.yellow('\nSet your API key:'));
      console.log(chalk.gray('  export GEMINI_API_KEY=your_key'));
      console.log(chalk.gray('  or create a .env file'));
      process.exit(1);
    }

    if (!fs.existsSync(file)) {
      console.error(chalk.red(`✗ File not found: ${file}`));
      process.exit(1);
    }

    console.log(chalk.bold.cyan('\n🔧 AI Refactoring Suggestions\n'));
    const spinner = ora('Analyzing...').start();

    try {
      const analyzer = new CodeAnalyzer();
      const directory = path.dirname(file);
      analyzer.analyzeDirectory(directory);

      const complexity = analyzer.getComplexity().find(c => c.name === functionName);
      
      if (!complexity) {
        spinner.fail(chalk.red(`Function "${functionName}" not found`));
        process.exit(1);
      }

      // Read function code
      const fileContent = fs.readFileSync(file, 'utf-8');
      const lines = fileContent.split('\n');
      const startLine = complexity.line - 1;
      const endLine = startLine + complexity.lineCount;
      const functionCode = lines.slice(startLine, endLine).join('\n');

      spinner.text = 'Asking AI for refactoring suggestions...';

      const ai = new AIService(apiKey);
      const suggestions = await ai.suggestRefactoring(
        functionName,
        functionCode,
        complexity.complexity
      );

      spinner.succeed(chalk.green('Analysis complete!'));

      console.log(chalk.bold(`\n📍 Function: ${chalk.cyan(functionName)}`));
      console.log(chalk.gray(`   Location: ${file}:${complexity.line}`));
      console.log(chalk.gray(`   Complexity: ${complexity.complexity}`));
      console.log(chalk.gray(`   Lines: ${complexity.lineCount}`));
      console.log(chalk.gray(`   Parameters: ${complexity.paramCount}\n`));

      console.log(chalk.bold('🔧 Refactoring Suggestions:\n'));
      console.log(suggestions);
      console.log();

    } catch (error) {
      spinner.fail(chalk.red('Analysis failed'));
      console.error(chalk.red(`\n✗ Error: ${error}`));
      process.exit(1);
    }
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}