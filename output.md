```mermaid
graph TD
  startApp["startApp"]
  initControllers["initControllers"]
  User_constructor["User.constructor"]
  User_getName["User.getName"]
  User_getUpperName["User.getUpperName"]
  User_fetchProfile["User.fetchProfile"]
  User_loadData["User.loadData"]
  Admin_getRole["Admin.getRole"]
  Admin_getFullInfo["Admin.getFullInfo"]
  handleUserRequest["handleUserRequest"]
  getUser["getUser"]
  publicHelper["publicHelper"]
  privateHelper["privateHelper"]
  main["main"]
  processData["processData"]
  formatData["formatData"]
  validateData["validateData"]
  add["add"]
  multiply["multiply"]
  calculate["calculate"]
  fetchUser["fetchUser"]
  getFromAPI["getFromAPI"]
  processUser["processUser"]
  fetchData["fetchData"]
  helper["helper"]
  queryUser["queryUser"]
  validateQuery["validateQuery"]
  sanitizeInput["sanitizeInput"]
  checkCache["checkCache"]
  readCache["readCache"]
  fetchFromDatabase["fetchFromDatabase"]
  openConnection["openConnection"]
  executeQuery["executeQuery"]
  parseResult["parseResult"]
  closeConnection["closeConnection"]
  mapUserEntity["mapUserEntity"]
  normalizeFields["normalizeFields"]
  greet["greet"]
  sayHello["sayHello"]
  sendWelcomeEmail["sendWelcomeEmail"]
  sendEmail["sendEmail"]
  formatEmail["formatEmail"]
  logInfo["logInfo"]
  subtract["subtract"]
  divide["divide"]
  toUpperCase["toUpperCase (external)"]
  Admin_getName["Admin.getName (external)"]
  format["format (external)"]
  toString["toString (external)"]
  log["log (external)"]

  startApp --> initControllers
  initControllers --> handleUserRequest
  User_getUpperName --> toUpperCase
  User_getUpperName --> User_getName
  User_fetchProfile --> User_loadData
  Admin_getFullInfo --> Admin_getName
  Admin_getFullInfo --> Admin_getRole
  handleUserRequest --> getUser
  handleUserRequest --> logInfo
  getUser --> fetchUser
  getUser --> sendWelcomeEmail
  publicHelper --> privateHelper
  main --> publicHelper
  main --> format
  processData --> formatData
  processData --> validateData
  formatData --> toUpperCase
  formatData --> toString
  main --> processData
  main --> log
  calculate --> add
  calculate --> multiply
  fetchUser --> getFromAPI
  fetchUser --> processUser
  processUser --> toUpperCase
  fetchData --> fetchUser
  helper --> calculate
  queryUser --> validateQuery
  queryUser --> checkCache
  queryUser --> fetchFromDatabase
  queryUser --> mapUserEntity
  validateQuery --> sanitizeInput
  checkCache --> readCache
  fetchFromDatabase --> openConnection
  fetchFromDatabase --> executeQuery
  fetchFromDatabase --> closeConnection
  executeQuery --> parseResult
  mapUserEntity --> normalizeFields
  greet --> sayHello
  sayHello --> log
  main --> greet
  sendWelcomeEmail --> formatEmail
  sendWelcomeEmail --> sendEmail
  fetchUser --> queryUser
  calculate --> add
  calculate --> multiply
  calculate --> subtract
  calculate --> divide
```

View at: https://mermaid.live