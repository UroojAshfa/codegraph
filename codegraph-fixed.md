# Call Graph Visualization

```mermaid
graph TD
  AIService_constructor_8["AIService.constructor"]
  AIService_explainFunction_15["AIService.explainFunction"]
  AIService_analyzeComplexity_57["AIService.analyzeComplexity"]
  AIService_suggestRefactoring_85["AIService.suggestRefactoring"]
  AIService_detectCodeSmells_125["AIService.detectCodeSmells"]
  CodeAnalyzer_constructor_59["CodeAnalyzer.constructor"]
  CodeAnalyzer_findJSFiles_68["CodeAnalyzer.findJSFiles"]
  CodeAnalyzer_extractFunctions_94["CodeAnalyzer.extractFunctions"]
  visit_95["visit"]
  CodeAnalyzer_extractCalls_217["CodeAnalyzer.extractCalls"]
  visit_221["visit"]
  CodeAnalyzer_extractImportsExports_334["CodeAnalyzer.extractImportsExports"]
  CodeAnalyzer_analyzeFile_398["CodeAnalyzer.analyzeFile"]
  CodeAnalyzer_calculateComplexity_416["CodeAnalyzer.calculateComplexity"]
  visit_439["visit"]
  CodeAnalyzer_analyzeDirectory_481["CodeAnalyzer.analyzeDirectory"]
  CodeAnalyzer_getFileCount_520["CodeAnalyzer.getFileCount"]
  CodeAnalyzer_getImports_524["CodeAnalyzer.getImports"]
  CodeAnalyzer_getExports_528["CodeAnalyzer.getExports"]
  CodeAnalyzer_getComplexity_532["CodeAnalyzer.getComplexity"]
  BatchAnalyzer_constructor_40["BatchAnalyzer.constructor"]
  BatchAnalyzer_analyzeBatch_45["BatchAnalyzer.analyzeBatch"]
  BatchAnalyzer_generateMarkdownReport_203["BatchAnalyzer.generateMarkdownReport"]
  BatchAnalyzer_saveResults_287["BatchAnalyzer.saveResults"]
  console_warn_16["console.warn"]
  console_log_17["console.log"]
  levenshteinDistance_36["levenshteinDistance"]
  findClosestMatch_65["findClosestMatch"]
  getApiKey_87["getApiKey"]
  validateDirectory_103["validateDirectory"]
  validateFile_117["validateFile"]
  handleError_138["handleError"]
  getFieldMap_42["getFieldMap"]
  printNodes_60["printNodes"]
  findMethodNodes_85["findMethodNodes"]
  CallGraph_addNode_26["CallGraph.addNode"]
  CallGraph_addEdge_42["CallGraph.addEdge"]
  CallGraph_getNode_46["CallGraph.getNode"]
  CallGraph_getCallers_50["CallGraph.getCallers"]
  CallGraph_getCallees_57["CallGraph.getCallees"]
  CallGraph_getAllNodes_64["CallGraph.getAllNodes"]
  CallGraph_getAllEdges_68["CallGraph.getAllEdges"]
  CallGraph_addDependency_72["CallGraph.addDependency"]
  CallGraph_getMostImportedFiles_80["CallGraph.getMostImportedFiles"]
  CallGraph_getCircularDependencies_94["CallGraph.getCircularDependencies"]
  dfs_99["dfs"]
  CallGraph_getOrphanedFiles_129["CallGraph.getOrphanedFiles"]
  CallGraph_addComplexity_139["CallGraph.addComplexity"]
  CallGraph_toJSON_143["CallGraph.toJSON"]
  CallGraph_toMermaid_151["CallGraph.toMermaid"]
  sanitize_167["sanitize"]
  CallGraph_printStats_191["CallGraph.printStats"]
  ReportGenerator_generateHTMLReport_28["ReportGenerator.generateHTMLReport"]
  ReportGenerator_prepareReportData_38["ReportGenerator.prepareReportData"]
  ReportGenerator_buildHTML_109["ReportGenerator.buildHTML"]
  ReportGenerator_getComplexityClass_520["ReportGenerator.getComplexityClass"]
  ReportGenerator_generateRecommendations_526["ReportGenerator.generateRecommendations"]
  ReportGenerator_saveHTMLReport_571["ReportGenerator.saveHTMLReport"]
  AIService_constructor["AIService.constructor (external)"]
  getGenerativeModel["getGenerativeModel (external)"]
  AIService_explainFunction["AIService.explainFunction (external)"]
  join["join (external)"]
  generateContent["generateContent (external)"]
  text["text (external)"]
  AIService_analyzeComplexity["AIService.analyzeComplexity (external)"]
  AIService_suggestRefactoring["AIService.suggestRefactoring (external)"]
  AIService_detectCodeSmells["AIService.detectCodeSmells (external)"]
  push["push (external)"]
  map["map (external)"]
  CodeAnalyzer_constructor["CodeAnalyzer.constructor (external)"]
  setLanguage["setLanguage (external)"]
  CodeAnalyzer_findJSFiles["CodeAnalyzer.findJSFiles (external)"]
  readdirSync["readdirSync (external)"]
  statSync["statSync (external)"]
  isDirectory["isDirectory (external)"]
  startsWith["startsWith (external)"]
  endsWith["endsWith (external)"]
  visit["visit (external)"]
  childForFieldName["childForFieldName (external)"]
  CodeAnalyzer_calculateComplexity["CodeAnalyzer.calculateComplexity (external)"]
  add["add (external)"]
  child["child (external)"]
  CodeAnalyzer_extractFunctions["CodeAnalyzer.extractFunctions (external)"]
  CodeAnalyzer_extractCalls["CodeAnalyzer.extractCalls (external)"]
  CodeAnalyzer_extractImportsExports["CodeAnalyzer.extractImportsExports (external)"]
  readFileSync["readFileSync (external)"]
  exec["exec (external)"]
  includes["includes (external)"]
  CodeAnalyzer_analyzeFile["CodeAnalyzer.analyzeFile (external)"]
  parse["parse (external)"]
  error["error (external)"]
  CodeAnalyzer_analyzeDirectory["CodeAnalyzer.analyzeDirectory (external)"]
  forEach["forEach (external)"]
  warn["warn (external)"]
  addNode["addNode (external)"]
  addEdge["addEdge (external)"]
  addDependency["addDependency (external)"]
  addComplexity["addComplexity (external)"]
  BatchAnalyzer_constructor["BatchAnalyzer.constructor (external)"]
  ora["ora (external)"]
  BatchAnalyzer_analyzeBatch["BatchAnalyzer.analyzeBatch (external)"]
  slice["slice (external)"]
  sort["sort (external)"]
  filter["filter (external)"]
  log["log (external)"]
  cyan["cyan (external)"]
  gray["gray (external)"]
  repeat["repeat (external)"]
  green["green (external)"]
  yellow["yellow (external)"]
  bold["bold (external)"]
  start["start (external)"]
  split["split (external)"]
  analyzeComplexity["analyzeComplexity (external)"]
  detectCodeSmells["detectCodeSmells (external)"]
  suggestRefactoring["suggestRefactoring (external)"]
  succeed["succeed (external)"]
  setTimeout["setTimeout (external)"]
  fail["fail (external)"]
  red["red (external)"]
  reduce["reduce (external)"]
  max["max (external)"]
  toFixed["toFixed (external)"]
  toISOString["toISOString (external)"]
  parseFloat["parseFloat (external)"]
  BatchAnalyzer_generateMarkdownReport["BatchAnalyzer.generateMarkdownReport (external)"]
  toLocaleString["toLocaleString (external)"]
  BatchAnalyzer_saveResults["BatchAnalyzer.saveResults (external)"]
  writeFileSync["writeFileSync (external)"]
  stringify["stringify (external)"]
  levenshteinDistance["levenshteinDistance (external)"]
  charAt["charAt (external)"]
  min["min (external)"]
  findClosestMatch["findClosestMatch (external)"]
  toLowerCase["toLowerCase (external)"]
  getApiKey["getApiKey (external)"]
  exit["exit (external)"]
  validateDirectory["validateDirectory (external)"]
  existsSync["existsSync (external)"]
  validateFile["validateFile (external)"]
  isFile["isFile (external)"]
  extname["extname (external)"]
  handleError["handleError (external)"]
  getFieldMap["getFieldMap (external)"]
  fieldNameForChild["fieldNameForChild (external)"]
  printNodes["printNodes (external)"]
  replace["replace (external)"]
  findMethodNodes["findMethodNodes (external)"]
  substring["substring (external)"]
  keys["keys (external)"]
  CallGraph_addNode["CallGraph.addNode (external)"]
  has["has (external)"]
  set["set (external)"]
  CallGraph_addEdge["CallGraph.addEdge (external)"]
  CallGraph_getNode["CallGraph.getNode (external)"]
  get["get (external)"]
  CallGraph_getCallers["CallGraph.getCallers (external)"]
  indexOf["indexOf (external)"]
  CallGraph_getCallees["CallGraph.getCallees (external)"]
  CallGraph_getAllNodes["CallGraph.getAllNodes (external)"]
  from["from (external)"]
  values["values (external)"]
  CallGraph_addDependency["CallGraph.addDependency (external)"]
  CallGraph_getMostImportedFiles["CallGraph.getMostImportedFiles (external)"]
  entries["entries (external)"]
  dfs["dfs (external)"]
  concat["concat (external)"]
  delete["delete (external)"]
  CallGraph_getCircularDependencies["CallGraph.getCircularDependencies (external)"]
  CallGraph_getOrphanedFiles["CallGraph.getOrphanedFiles (external)"]
  CallGraph_addComplexity["CallGraph.addComplexity (external)"]
  CallGraph_toJSON["CallGraph.toJSON (external)"]
  CallGraph_toMermaid["CallGraph.toMermaid (external)"]
  sanitize["sanitize (external)"]
  CallGraph_printStats["CallGraph.printStats (external)"]
  ReportGenerator_generateHTMLReport["ReportGenerator.generateHTMLReport (external)"]
  ReportGenerator_prepareReportData["ReportGenerator.prepareReportData (external)"]
  ReportGenerator_buildHTML["ReportGenerator.buildHTML (external)"]
  round["round (external)"]
  getAllNodes["getAllNodes (external)"]
  getAllEdges["getAllEdges (external)"]
  getCircularDependencies["getCircularDependencies (external)"]
  getMostImportedFiles["getMostImportedFiles (external)"]
  ReportGenerator_getComplexityClass["ReportGenerator.getComplexityClass (external)"]
  basename["basename (external)"]
  ReportGenerator_generateRecommendations["ReportGenerator.generateRecommendations (external)"]
  ReportGenerator_saveHTMLReport["ReportGenerator.saveHTMLReport (external)"]

  AIService_constructor --> getGenerativeModel
  AIService_explainFunction --> join
  AIService_explainFunction --> join
  AIService_explainFunction --> generateContent
  AIService_explainFunction --> text
  AIService_analyzeComplexity --> generateContent
  AIService_analyzeComplexity --> text
  AIService_suggestRefactoring --> generateContent
  AIService_suggestRefactoring --> text
  AIService_detectCodeSmells --> push
  AIService_detectCodeSmells --> push
  AIService_detectCodeSmells --> push
  AIService_detectCodeSmells --> join
  AIService_detectCodeSmells --> map
  AIService_detectCodeSmells --> generateContent
  AIService_detectCodeSmells --> push
  AIService_detectCodeSmells --> text
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
  visit --> CodeAnalyzer_calculateComplexity
  visit --> childForFieldName
  visit --> childForFieldName
  visit --> add
  visit --> childForFieldName
  visit --> childForFieldName
  visit --> push
  visit --> CodeAnalyzer_calculateComplexity
  visit --> push
  visit --> CodeAnalyzer_calculateComplexity
  visit --> childForFieldName
  visit --> childForFieldName
  visit --> push
  visit --> CodeAnalyzer_calculateComplexity
  visit --> childForFieldName
  visit --> childForFieldName
  visit --> push
  visit --> childForFieldName
  visit --> CodeAnalyzer_calculateComplexity
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
  CodeAnalyzer_extractImportsExports --> readFileSync
  CodeAnalyzer_extractImportsExports --> exec
  CodeAnalyzer_extractImportsExports --> startsWith
  CodeAnalyzer_extractImportsExports --> startsWith
  CodeAnalyzer_extractImportsExports --> push
  CodeAnalyzer_extractImportsExports --> exec
  CodeAnalyzer_extractImportsExports --> startsWith
  CodeAnalyzer_extractImportsExports --> startsWith
  CodeAnalyzer_extractImportsExports --> push
  CodeAnalyzer_extractImportsExports --> includes
  CodeAnalyzer_extractImportsExports --> exec
  CodeAnalyzer_extractImportsExports --> push
  CodeAnalyzer_extractImportsExports --> exec
  CodeAnalyzer_extractImportsExports --> push
  CodeAnalyzer_extractImportsExports --> includes
  CodeAnalyzer_extractImportsExports --> push
  CodeAnalyzer_extractImportsExports --> includes
  CodeAnalyzer_extractImportsExports --> includes
  CodeAnalyzer_extractImportsExports --> push
  CodeAnalyzer_extractImportsExports --> push
  CodeAnalyzer_extractImportsExports --> push
  CodeAnalyzer_analyzeFile --> readFileSync
  CodeAnalyzer_analyzeFile --> endsWith
  CodeAnalyzer_analyzeFile --> endsWith
  CodeAnalyzer_analyzeFile --> parse
  CodeAnalyzer_analyzeFile --> CodeAnalyzer_extractFunctions
  CodeAnalyzer_analyzeFile --> CodeAnalyzer_extractCalls
  CodeAnalyzer_analyzeFile --> CodeAnalyzer_extractImportsExports
  CodeAnalyzer_analyzeFile --> error
  CodeAnalyzer_calculateComplexity --> childForFieldName
  CodeAnalyzer_calculateComplexity --> child
  visit --> includes
  visit --> includes
  visit --> visit
  visit --> child
  CodeAnalyzer_calculateComplexity --> visit
  CodeAnalyzer_calculateComplexity --> push
  CodeAnalyzer_analyzeDirectory --> CodeAnalyzer_findJSFiles
  CodeAnalyzer_analyzeDirectory --> forEach
  CodeAnalyzer_analyzeDirectory --> CodeAnalyzer_analyzeFile
  CodeAnalyzer_analyzeDirectory --> forEach
  CodeAnalyzer_analyzeDirectory --> warn
  CodeAnalyzer_analyzeDirectory --> addNode
  CodeAnalyzer_analyzeDirectory --> forEach
  CodeAnalyzer_analyzeDirectory --> warn
  CodeAnalyzer_analyzeDirectory --> addEdge
  CodeAnalyzer_analyzeDirectory --> forEach
  CodeAnalyzer_analyzeDirectory --> forEach
  CodeAnalyzer_analyzeDirectory --> addDependency
  CodeAnalyzer_analyzeDirectory --> forEach
  CodeAnalyzer_analyzeDirectory --> addComplexity
  BatchAnalyzer_constructor --> ora
  BatchAnalyzer_analyzeBatch --> slice
  BatchAnalyzer_analyzeBatch --> sort
  BatchAnalyzer_analyzeBatch --> filter
  BatchAnalyzer_analyzeBatch --> log
  BatchAnalyzer_analyzeBatch --> cyan
  BatchAnalyzer_analyzeBatch --> log
  BatchAnalyzer_analyzeBatch --> gray
  BatchAnalyzer_analyzeBatch --> repeat
  BatchAnalyzer_analyzeBatch --> log
  BatchAnalyzer_analyzeBatch --> green
  BatchAnalyzer_analyzeBatch --> log
  BatchAnalyzer_analyzeBatch --> green
  BatchAnalyzer_analyzeBatch --> filter
  BatchAnalyzer_analyzeBatch --> log
  BatchAnalyzer_analyzeBatch --> yellow
  BatchAnalyzer_analyzeBatch --> log
  BatchAnalyzer_analyzeBatch --> bold
  BatchAnalyzer_analyzeBatch --> cyan
  BatchAnalyzer_analyzeBatch --> gray
  BatchAnalyzer_analyzeBatch --> log
  BatchAnalyzer_analyzeBatch --> gray
  BatchAnalyzer_analyzeBatch --> start
  BatchAnalyzer_analyzeBatch --> readFileSync
  BatchAnalyzer_analyzeBatch --> split
  BatchAnalyzer_analyzeBatch --> join
  BatchAnalyzer_analyzeBatch --> slice
  BatchAnalyzer_analyzeBatch --> analyzeComplexity
  BatchAnalyzer_analyzeBatch --> detectCodeSmells
  BatchAnalyzer_analyzeBatch --> suggestRefactoring
  BatchAnalyzer_analyzeBatch --> succeed
  BatchAnalyzer_analyzeBatch --> green
  BatchAnalyzer_analyzeBatch --> push
  BatchAnalyzer_analyzeBatch --> filter
  BatchAnalyzer_analyzeBatch --> log
  BatchAnalyzer_analyzeBatch --> yellow
  BatchAnalyzer_analyzeBatch --> log
  BatchAnalyzer_analyzeBatch --> green
  BatchAnalyzer_analyzeBatch --> log
  BatchAnalyzer_analyzeBatch --> setTimeout
  BatchAnalyzer_analyzeBatch --> fail
  BatchAnalyzer_analyzeBatch --> red
  BatchAnalyzer_analyzeBatch --> push
  BatchAnalyzer_analyzeBatch --> log
  BatchAnalyzer_analyzeBatch --> gray
  BatchAnalyzer_analyzeBatch --> filter
  BatchAnalyzer_analyzeBatch --> reduce
  BatchAnalyzer_analyzeBatch --> max
  BatchAnalyzer_analyzeBatch --> map
  BatchAnalyzer_analyzeBatch --> filter
  BatchAnalyzer_analyzeBatch --> log
  BatchAnalyzer_analyzeBatch --> gray
  BatchAnalyzer_analyzeBatch --> repeat
  BatchAnalyzer_analyzeBatch --> log
  BatchAnalyzer_analyzeBatch --> bold
  BatchAnalyzer_analyzeBatch --> log
  BatchAnalyzer_analyzeBatch --> green
  BatchAnalyzer_analyzeBatch --> log
  BatchAnalyzer_analyzeBatch --> red
  BatchAnalyzer_analyzeBatch --> log
  BatchAnalyzer_analyzeBatch --> yellow
  BatchAnalyzer_analyzeBatch --> toFixed
  BatchAnalyzer_analyzeBatch --> log
  BatchAnalyzer_analyzeBatch --> yellow
  BatchAnalyzer_analyzeBatch --> log
  BatchAnalyzer_analyzeBatch --> red
  BatchAnalyzer_analyzeBatch --> log
  BatchAnalyzer_analyzeBatch --> green
  BatchAnalyzer_analyzeBatch --> reduce
  BatchAnalyzer_analyzeBatch --> log
  BatchAnalyzer_analyzeBatch --> yellow
  BatchAnalyzer_analyzeBatch --> toISOString
  BatchAnalyzer_analyzeBatch --> filter
  BatchAnalyzer_analyzeBatch --> parseFloat
  BatchAnalyzer_analyzeBatch --> toFixed
  BatchAnalyzer_generateMarkdownReport --> toLocaleString
  BatchAnalyzer_generateMarkdownReport --> toFixed
  BatchAnalyzer_generateMarkdownReport --> sort
  BatchAnalyzer_generateMarkdownReport --> filter
  BatchAnalyzer_generateMarkdownReport --> forEach
  BatchAnalyzer_generateMarkdownReport --> forEach
  BatchAnalyzer_generateMarkdownReport --> filter
  BatchAnalyzer_generateMarkdownReport --> forEach
  BatchAnalyzer_generateMarkdownReport --> filter
  BatchAnalyzer_generateMarkdownReport --> filter
  BatchAnalyzer_saveResults --> writeFileSync
  BatchAnalyzer_saveResults --> stringify
  BatchAnalyzer_saveResults --> log
  BatchAnalyzer_saveResults --> green
  BatchAnalyzer_saveResults --> BatchAnalyzer_generateMarkdownReport
  BatchAnalyzer_saveResults --> writeFileSync
  BatchAnalyzer_saveResults --> log
  BatchAnalyzer_saveResults --> green
  levenshteinDistance --> charAt
  levenshteinDistance --> charAt
  levenshteinDistance --> min
  findClosestMatch --> levenshteinDistance
  findClosestMatch --> toLowerCase
  findClosestMatch --> toLowerCase
  findClosestMatch --> levenshteinDistance
  findClosestMatch --> toLowerCase
  findClosestMatch --> toLowerCase
  getApiKey --> error
  getApiKey --> red
  getApiKey --> log
  getApiKey --> yellow
  getApiKey --> log
  getApiKey --> gray
  getApiKey --> log
  getApiKey --> cyan
  getApiKey --> log
  getApiKey --> gray
  getApiKey --> log
  getApiKey --> cyan
  getApiKey --> log
  getApiKey --> gray
  getApiKey --> log
  getApiKey --> cyan
  getApiKey --> exit
  validateDirectory --> existsSync
  validateDirectory --> error
  validateDirectory --> red
  validateDirectory --> log
  validateDirectory --> yellow
  validateDirectory --> exit
  validateDirectory --> statSync
  validateDirectory --> isDirectory
  validateDirectory --> error
  validateDirectory --> red
  validateDirectory --> exit
  validateFile --> existsSync
  validateFile --> error
  validateFile --> red
  validateFile --> log
  validateFile --> yellow
  validateFile --> exit
  validateFile --> statSync
  validateFile --> isFile
  validateFile --> error
  validateFile --> red
  validateFile --> exit
  validateFile --> extname
  validateFile --> includes
  validateFile --> error
  validateFile --> red
  validateFile --> log
  validateFile --> yellow
  validateFile --> exit
  handleError --> error
  handleError --> red
  handleError --> error
  handleError --> gray
  handleError --> includes
  handleError --> log
  handleError --> yellow
  handleError --> includes
  handleError --> log
  handleError --> yellow
  handleError --> includes
  handleError --> log
  handleError --> yellow
  handleError --> error
  handleError --> gray
  handleError --> exit
  getFieldMap --> fieldNameForChild
  getFieldMap --> child
  printNodes --> repeat
  printNodes --> replace
  printNodes --> log
  printNodes --> child
  printNodes --> fieldNameForChild
  printNodes --> log
  printNodes --> printNodes
  findMethodNodes --> includes
  findMethodNodes --> includes
  findMethodNodes --> includes
  findMethodNodes --> log
  findMethodNodes --> log
  findMethodNodes --> replace
  findMethodNodes --> substring
  findMethodNodes --> getFieldMap
  findMethodNodes --> keys
  findMethodNodes --> log
  findMethodNodes --> log
  findMethodNodes --> log
  findMethodNodes --> log
  findMethodNodes --> child
  findMethodNodes --> findMethodNodes
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
  CallGraph_addDependency --> has
  CallGraph_addDependency --> set
  CallGraph_addDependency --> push
  CallGraph_addDependency --> get
  CallGraph_getMostImportedFiles --> values
  CallGraph_getMostImportedFiles --> forEach
  CallGraph_getMostImportedFiles --> set
  CallGraph_getMostImportedFiles --> get
  CallGraph_getMostImportedFiles --> sort
  CallGraph_getMostImportedFiles --> map
  CallGraph_getMostImportedFiles --> from
  CallGraph_getMostImportedFiles --> entries
  dfs --> has
  dfs --> indexOf
  dfs --> push
  dfs --> concat
  dfs --> slice
  dfs --> has
  dfs --> add
  dfs --> add
  dfs --> push
  dfs --> get
  dfs --> forEach
  dfs --> dfs
  dfs --> delete
  CallGraph_getCircularDependencies --> keys
  CallGraph_getCircularDependencies --> dfs
  CallGraph_getOrphanedFiles --> values
  CallGraph_getOrphanedFiles --> forEach
  CallGraph_getOrphanedFiles --> add
  CallGraph_getOrphanedFiles --> filter
  CallGraph_getOrphanedFiles --> has
  CallGraph_addComplexity --> set
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
  CallGraph_printStats --> log
  CallGraph_printStats --> log
  CallGraph_printStats --> slice
  CallGraph_printStats --> CallGraph_getMostImportedFiles
  CallGraph_printStats --> log
  CallGraph_printStats --> forEach
  CallGraph_printStats --> log
  CallGraph_printStats --> CallGraph_getCircularDependencies
  CallGraph_printStats --> log
  CallGraph_printStats --> forEach
  CallGraph_printStats --> slice
  CallGraph_printStats --> log
  CallGraph_printStats --> join
  CallGraph_printStats --> log
  CallGraph_printStats --> log
  CallGraph_printStats --> from
  CallGraph_printStats --> values
  CallGraph_printStats --> reduce
  CallGraph_printStats --> log
  CallGraph_printStats --> toFixed
  CallGraph_printStats --> slice
  CallGraph_printStats --> sort
  CallGraph_printStats --> log
  CallGraph_printStats --> forEach
  CallGraph_printStats --> log
  CallGraph_printStats --> slice
  CallGraph_printStats --> sort
  CallGraph_printStats --> filter
  CallGraph_printStats --> log
  CallGraph_printStats --> forEach
  CallGraph_printStats --> log
  CallGraph_printStats --> slice
  CallGraph_printStats --> sort
  CallGraph_printStats --> filter
  CallGraph_printStats --> log
  CallGraph_printStats --> forEach
  CallGraph_printStats --> log
  ReportGenerator_generateHTMLReport --> ReportGenerator_prepareReportData
  ReportGenerator_generateHTMLReport --> ReportGenerator_buildHTML
  ReportGenerator_prepareReportData --> reduce
  ReportGenerator_prepareReportData --> max
  ReportGenerator_prepareReportData --> map
  ReportGenerator_prepareReportData --> forEach
  ReportGenerator_prepareReportData --> forEach
  ReportGenerator_prepareReportData --> round
  ReportGenerator_prepareReportData --> slice
  ReportGenerator_prepareReportData --> sort
  ReportGenerator_prepareReportData --> getAllNodes
  ReportGenerator_prepareReportData --> getAllEdges
  ReportGenerator_prepareReportData --> map
  ReportGenerator_prepareReportData --> filter
  ReportGenerator_prepareReportData --> has
  ReportGenerator_prepareReportData --> map
  ReportGenerator_prepareReportData --> filter
  ReportGenerator_prepareReportData --> has
  ReportGenerator_prepareReportData --> getCircularDependencies
  ReportGenerator_prepareReportData --> slice
  ReportGenerator_prepareReportData --> getMostImportedFiles
  ReportGenerator_prepareReportData --> toISOString
  ReportGenerator_prepareReportData --> parseFloat
  ReportGenerator_prepareReportData --> toFixed
  ReportGenerator_buildHTML --> toLocaleString
  ReportGenerator_buildHTML --> join
  ReportGenerator_buildHTML --> map
  ReportGenerator_buildHTML --> ReportGenerator_getComplexityClass
  ReportGenerator_buildHTML --> basename
  ReportGenerator_buildHTML --> join
  ReportGenerator_buildHTML --> map
  ReportGenerator_buildHTML --> ReportGenerator_generateRecommendations
  ReportGenerator_buildHTML --> stringify
  ReportGenerator_buildHTML --> map
  ReportGenerator_buildHTML --> stringify
  ReportGenerator_buildHTML --> map
  ReportGenerator_generateRecommendations --> filter
  ReportGenerator_generateRecommendations --> push
  ReportGenerator_generateRecommendations --> push
  ReportGenerator_generateRecommendations --> push
  ReportGenerator_generateRecommendations --> push
  ReportGenerator_generateRecommendations --> join
  ReportGenerator_saveHTMLReport --> writeFileSync

```

View this diagram at: https://mermaid.live
