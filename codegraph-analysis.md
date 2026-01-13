```mermaid
graph TD
  CodeAnalyzer_constructor["CodeAnalyzer.constructor"]
  CodeAnalyzer_findJSFiles["CodeAnalyzer.findJSFiles"]
  CodeAnalyzer_extractFunctions["CodeAnalyzer.extractFunctions"]
  visit["visit"]
  CodeAnalyzer_extractCalls["CodeAnalyzer.extractCalls"]
  CodeAnalyzer_analyzeFile["CodeAnalyzer.analyzeFile"]
  CodeAnalyzer_analyzeDirectory["CodeAnalyzer.analyzeDirectory"]
  CallGraph_addNode["CallGraph.addNode"]
  CallGraph_addEdge["CallGraph.addEdge"]
  CallGraph_getNode["CallGraph.getNode"]
  CallGraph_getCallers["CallGraph.getCallers"]
  CallGraph_getCallees["CallGraph.getCallees"]
  CallGraph_getAllNodes["CallGraph.getAllNodes"]
  CallGraph_getAllEdges["CallGraph.getAllEdges"]
  CallGraph_toJSON["CallGraph.toJSON"]
  CallGraph_toMermaid["CallGraph.toMermaid"]
  sanitize["sanitize"]
  CallGraph_printStats["CallGraph.printStats"]
  setLanguage["setLanguage (external)"]
  readdirSync["readdirSync (external)"]
  join["join (external)"]
  statSync["statSync (external)"]
  isDirectory["isDirectory (external)"]
  startsWith["startsWith (external)"]
  push["push (external)"]
  endsWith["endsWith (external)"]
  childForFieldName["childForFieldName (external)"]
  child["child (external)"]
  readFileSync["readFileSync (external)"]
  parse["parse (external)"]
  error["error (external)"]
  forEach["forEach (external)"]
  addNode["addNode (external)"]
  addEdge["addEdge (external)"]
  has["has (external)"]
  set["set (external)"]
  get["get (external)"]
  filter["filter (external)"]
  map["map (external)"]
  indexOf["indexOf (external)"]
  from["from (external)"]
  values["values (external)"]
  add["add (external)"]
  replace["replace (external)"]
  log["log (external)"]
  slice["slice (external)"]
  sort["sort (external)"]
  entries["entries (external)"]
  keys["keys (external)"]

  CodeAnalyzer_constructor --> setLanguage
  CodeAnalyzer_constructor --> setLanguage
  CodeAnalyzer_findJSFiles --> readdirSync
  CodeAnalyzer_findJSFiles --> join
  CodeAnalyzer_findJSFiles --> statSync
  CodeAnalyzer_findJSFiles --> isDirectory
  CodeAnalyzer_findJSFiles --> startsWith
  CodeAnalyzer_findJSFiles --> push
  CodeAnalyzer_findJSFiles --> CodeAnalyzer_findJSFiles
  CodeAnalyzer_findJSFiles --> endsWith
  CodeAnalyzer_findJSFiles --> endsWith
  CodeAnalyzer_findJSFiles --> endsWith
  CodeAnalyzer_findJSFiles --> endsWith
  CodeAnalyzer_findJSFiles --> push
  visit --> childForFieldName
  visit --> push
  visit --> childForFieldName
  visit --> childForFieldName
  visit --> push
  visit --> childForFieldName
  visit --> childForFieldName
  visit --> push
  visit --> visit
  visit --> child
  CodeAnalyzer_extractFunctions --> visit
  visit --> childForFieldName
  visit --> visit
  visit --> child
  visit --> childForFieldName
  visit --> visit
  visit --> child
  visit --> childForFieldName
  visit --> childForFieldName
  visit --> visit
  visit --> child
  visit --> childForFieldName
  visit --> visit
  visit --> child
  visit --> childForFieldName
  visit --> push
  visit --> childForFieldName
  visit --> childForFieldName
  visit --> push
  visit --> push
  visit --> visit
  visit --> child
  CodeAnalyzer_extractCalls --> visit
  CodeAnalyzer_analyzeFile --> readFileSync
  CodeAnalyzer_analyzeFile --> endsWith
  CodeAnalyzer_analyzeFile --> endsWith
  CodeAnalyzer_analyzeFile --> parse
  CodeAnalyzer_analyzeFile --> CodeAnalyzer_extractFunctions
  CodeAnalyzer_analyzeFile --> CodeAnalyzer_extractCalls
  CodeAnalyzer_analyzeFile --> error
  CodeAnalyzer_analyzeDirectory --> CodeAnalyzer_findJSFiles
  CodeAnalyzer_analyzeDirectory --> forEach
  CodeAnalyzer_analyzeDirectory --> readFileSync
  CodeAnalyzer_analyzeDirectory --> endsWith
  CodeAnalyzer_analyzeDirectory --> endsWith
  CodeAnalyzer_analyzeDirectory --> parse
  CodeAnalyzer_analyzeDirectory --> CodeAnalyzer_extractFunctions
  CodeAnalyzer_analyzeDirectory --> CodeAnalyzer_extractCalls
  CodeAnalyzer_analyzeDirectory --> error
  CodeAnalyzer_analyzeDirectory --> forEach
  CodeAnalyzer_analyzeDirectory --> addNode
  CodeAnalyzer_analyzeDirectory --> forEach
  CodeAnalyzer_analyzeDirectory --> addEdge
  CallGraph_addNode --> has
  CallGraph_addNode --> set
  CallGraph_addEdge --> push
  CallGraph_getNode --> get
  CallGraph_getCallers --> filter
  CallGraph_getCallers --> map
  CallGraph_getCallers --> filter
  CallGraph_getCallers --> indexOf
  CallGraph_getCallees --> filter
  CallGraph_getCallees --> map
  CallGraph_getCallees --> filter
  CallGraph_getCallees --> indexOf
  CallGraph_getAllNodes --> from
  CallGraph_getAllNodes --> values
  CallGraph_toJSON --> from
  CallGraph_toJSON --> values
  CallGraph_toMermaid --> forEach
  CallGraph_toMermaid --> add
  CallGraph_toMermaid --> forEach
  CallGraph_toMermaid --> add
  CallGraph_toMermaid --> add
  sanitize --> replace
  CallGraph_toMermaid --> forEach
  CallGraph_toMermaid --> get
  CallGraph_toMermaid --> sanitize
  CallGraph_toMermaid --> forEach
  CallGraph_toMermaid --> sanitize
  CallGraph_toMermaid --> sanitize
  CallGraph_printStats --> log
  CallGraph_printStats --> log
  CallGraph_printStats --> log
  CallGraph_printStats --> forEach
  CallGraph_printStats --> set
  CallGraph_printStats --> get
  CallGraph_printStats --> slice
  CallGraph_printStats --> sort
  CallGraph_printStats --> from
  CallGraph_printStats --> entries
  CallGraph_printStats --> log
  CallGraph_printStats --> forEach
  CallGraph_printStats --> log
  CallGraph_printStats --> log
  CallGraph_printStats --> map
  CallGraph_printStats --> filter
  CallGraph_printStats --> from
  CallGraph_printStats --> keys
  CallGraph_printStats --> has
  CallGraph_printStats --> log
  CallGraph_printStats --> slice
  CallGraph_printStats --> forEach
  CallGraph_printStats --> log
  CallGraph_printStats --> log
  CallGraph_printStats --> log
  CallGraph_printStats --> map
  CallGraph_printStats --> filter
  CallGraph_printStats --> from
  CallGraph_printStats --> keys
  CallGraph_printStats --> has
  CallGraph_printStats --> log
  CallGraph_printStats --> slice
  CallGraph_printStats --> forEach
  CallGraph_printStats --> log
  CallGraph_printStats --> log
```

View at: https://mermaid.live