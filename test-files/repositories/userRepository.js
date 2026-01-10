function queryUser() {
    validateQuery();
    checkCache();
    fetchFromDatabase();
    mapUserEntity();
  }
  
  function validateQuery() {
    sanitizeInput();
  }
  
  function sanitizeInput() {}
  
  function checkCache() {
    readCache();
  }
  
  function readCache() {}
  
  function fetchFromDatabase() {
    openConnection();
    executeQuery();
    closeConnection();
  }
  
  function openConnection() {}
  
  function executeQuery() {
    parseResult();
  }
  
  function parseResult() {}
  
  function closeConnection() {}
  
  function mapUserEntity() {
    normalizeFields();
  }
  
  function normalizeFields() {}
  