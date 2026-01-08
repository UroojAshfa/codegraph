// test-files/sample.js
function greet(name) {
    return sayHello(name);
  }
  
  function sayHello(name) {
    console.log("Hello, " + name);
  }
  
  function main() {
    greet("World");
  }
  
  main();