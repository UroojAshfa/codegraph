

function add(a, b) {
    return a + b;
  }
  
function subtract(a, b) {
    return a - b;
  }
  
function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a * b;
  }
  
  function calculate(x, y) {
    const sum = add(x, y);
    const product = multiply(x, y);
    const difference = subtract(x, y);
    const divide = divide(x,y);
    
    return {
      sum: sum,
      product: product,
      difference: difference
    };
  }