
export interface GraphNode {
    id: string;
    label: string;
    file: string;
    line: number;
    type?: 'function' | 'arrow' | 'method' | 'async'; 
  }
  
  export interface GraphEdge {
    from: string;
    to: string;
    file: string;
    line: number;
  }
  
  export class CallGraph {
    private nodes: Map<string, GraphNode> = new Map();
    private edges: GraphEdge[] = [];
  
    addNode(name: string, file: string, line: number): void {
      // Using file + name as unique ID to handle duplicate function names
      const id = `${name}`;
      
      if (!this.nodes.has(id)) {
        this.nodes.set(id, {
          id,
          label: name,
          file,
          line
        });
      }
    }
  
    addEdge(from: string, to: string, file: string, line: number): void {
      this.edges.push({ from, to, file, line });
    }
  
    getNode(name: string): GraphNode | undefined {
      return this.nodes.get(name);
    }
  
    getCallers(functionName: string): string[] {
      return this.edges
        .filter(edge => edge.to === functionName)
        .map(edge => edge.from)
        .filter((value, index, self) => self.indexOf(value) === index); // unique
    }
  
    getCallees(functionName: string): string[] {
      return this.edges
        .filter(edge => edge.from === functionName)
        .map(edge => edge.to)
        .filter((value, index, self) => self.indexOf(value) === index); // unique
    }
  
    getAllNodes(): GraphNode[] {
      return Array.from(this.nodes.values());
    }
  
    getAllEdges(): GraphEdge[] {
      return this.edges;
    }
  
    toJSON() {
      return {
        nodes: Array.from(this.nodes.values()),
        edges: this.edges
      };
    }
  
    // Generate Mermaid diagram
    toMermaid(): string {
      let diagram = 'graph TD\n';
    
      // 1. Collect all node IDs (existing + referenced by edges)
      const allNodeIds = new Set<string>();
    
      this.nodes.forEach(node => {
        allNodeIds.add(node.id);
      });
    
      this.edges.forEach(edge => {
        allNodeIds.add(edge.from);
        allNodeIds.add(edge.to);
      });
    
      // 2. Helper to sanitize Mermaid node IDs
      const sanitize = (id: string) =>
        id.replace(/[^a-zA-Z0-9_]/g, '_');
    
      // 3. Emit all nodes (auto-create missing ones)
      allNodeIds.forEach(id => {
        const node = this.nodes.get(id);
    
        const safeId = sanitize(id);
        const label = node ? node.label : `${id} (external)`;
    
        diagram += `  ${safeId}["${label}"]\n`;
      });
    
      diagram += '\n';
    
      // 4. Emit edges using sanitized IDs
      this.edges.forEach(edge => {
        diagram += `  ${sanitize(edge.from)} --> ${sanitize(edge.to)}\n`;
      });
    
      return diagram;
    }
    
  
    printStats(): void {
      console.log('📊 GRAPH STATISTICS\n');
      console.log(`  Total nodes (functions): ${this.nodes.size}`);
      console.log(`  Total edges (calls): ${this.edges.length}\n`);
      
      // Find most called functions
      const callCounts = new Map<string, number>();
      this.edges.forEach(edge => {
        callCounts.set(edge.to, (callCounts.get(edge.to) || 0) + 1);
      });
  
      const sorted = Array.from(callCounts.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
  
      if (sorted.length > 0) {
        console.log('   Most called functions:');
        sorted.forEach(([fn, count]) => {
          console.log(`     • ${fn}: called ${count} time${count > 1 ? 's' : ''}`);
        });
        console.log();
      }
  
      // Find entry points (functions not called by anyone)
      const called = new Set(this.edges.map(e => e.to));
      const entryPoints = Array.from(this.nodes.keys()).filter(name => !called.has(name));
  
      if (entryPoints.length > 0) {
        console.log(`  🚪 Entry points (not called by anyone): ${entryPoints.length}`);
        const display = entryPoints.slice(0, 5);
        display.forEach(fn => console.log(`     • ${fn}`));
        if (entryPoints.length > 5) {
          console.log(`     ... and ${entryPoints.length - 5} more`);
        }
        console.log();
      }
  
      // Find leaf functions (don't call anything)
      const callers = new Set(this.edges.map(e => e.from));
      const leaves = Array.from(this.nodes.keys()).filter(name => !callers.has(name));
  
      if (leaves.length > 0) {
        console.log(`  🍃 Leaf functions (don't call anything): ${leaves.length}`);
        const display = leaves.slice(0, 5);
        display.forEach(fn => console.log(`     • ${fn}`));
        if (leaves.length > 5) {
          console.log(`     ... and ${leaves.length - 5} more`);
        }
      }
    }
  }