// test-files/main.js

function processData(data) {
    const formatted = formatData(data);
    return validateData(formatted);
  }
  
  function formatData(data) {
    return data.toString().toUpperCase();
  }
  
  function validateData(data) {
    if (data.length > 0) {
      return true;
    }
    return false;
  }
  
  function main() {
    const input = "hello world";
    const result = processData(input);
    console.log(result);
  }
  
  main();