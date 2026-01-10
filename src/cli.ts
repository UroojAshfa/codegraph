#!/usr/bin/env node

import { Command } from 'commander';
import ora from 'ora';
import chalk from 'chalk';
import * as fs from 'fs';
import * as path from 'path';
import { CodeAnalyzer } from './analyzer';

const program = new Command();

program
  .name('codegraph')
  .description('AI-powered codebase intelligence tool')
  .version('0.1.0');

program
  .command('analyze <directory>')
  .description('Analyze a codebase and generate call graph')
  .option('-o, --output <file>', 'Output file path', 'output.json')
  .option('-f, --format <type>', 'Output format (json|mermaid|both)', 'both')
  .option('--no-stats', 'Skip statistics display')
  .action((directory: string, options: any) => {
    // Validate directory exists
    if (!fs.existsSync(directory)) {
      console.error(chalk.red(`✗ Directory not found: ${directory}`));
      process.exit(1);
    }

    console.log(chalk.bold.cyan('\n🚀 CodeGraph v0.1.0\n'));

    // Start analysis with spinner
    const spinner = ora('Scanning directory...').start();

    try {
      const analyzer = new CodeAnalyzer();
      const graph = analyzer.analyzeDirectory(directory);

      spinner.succeed(chalk.green('Analysis complete!'));

      // Display statistics if enabled
      if (options.stats) {
        console.log('\n' + chalk.bold('📊 STATISTICS\n'));
        graph.printStats();
      }

      // Save outputs based on format
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

program.parse(process.argv);

// Show help if no arguments
if (!process.argv.slice(2).length) {
  program.outputHelp();
}