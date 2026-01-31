

// 1. TRADITIONAL FUNCTION DECLARATIONS

function traditionalFunction() {
    console.log('traditional');
  }
  
  function functionWithParams(a: string, b: number) {
    return a + b;
  }
  
  async function asyncFunction() {
    await Promise.resolve();
  }
  
  function* generatorFunction() {
    yield 1;
  }
  

  // 2. ARROW FUNCTIONS
 
  const arrowFunction = () => {
    console.log('arrow');
  };
  
  const arrowWithParam = (x: number) => x * 2;
  
  const arrowImplicitReturn = (x: number) => x * 2;
  
  const arrowMultiLine = (a: number, b: number) => {
    const sum = a + b;
    return sum;
  };
  
  const asyncArrow = async () => {
    await Promise.resolve();
  };
  

  // 3. FUNCTION EXPRESSIONS

  const functionExpression = function() {
    console.log('expression');
  };
  
  const namedFunctionExpression = function myFunc() {
    console.log('named expression');
  };
  

  // 4. CLASS METHODS

  class MyClass {
    // Regular method
    regularMethod() {
      console.log('regular');
    }
  
    // Method with params
    methodWithParams(x: number, y: number) {
      return x + y;
    }
  
    // Async method
    async asyncMethod() {
      await Promise.resolve();
    }
  
    // Static method
    static staticMethod() {
      console.log('static');
    }
  
    // Getter
    get myGetter() {
      return 'getter';
    }
  
    // Setter
    set mySetter(value: string) {
      console.log(value);
    }
  
    // Private method (TypeScript)
    private privateMethod() {
      console.log('private');
    }
  
    // Protected method (TypeScript)
    protected protectedMethod() {
      console.log('protected');
    }
  }
  

  // 5. OBJECT METHODS
  
  const obj = {
    methodShorthand() {
      console.log('shorthand');
    },
  
    methodTraditional: function() {
      console.log('traditional in object');
    },
  
    methodArrow: () => {
      console.log('arrow in object');
    },
  
    async asyncMethod() {
      await Promise.resolve();
    }
  };
  

  // 6. CALLBACKS & HIGHER-ORDER FUNCTIONS
  
  const array = [1, 2, 3];
  
  // Anonymous arrow in method call
  array.map(x => x * 2);
  
  // Anonymous function in method call
  array.filter(function(x) {
    return x > 1;
  });
  
  // Named callback
  const namedCallback = (x: number) => x * 2;
  array.map(namedCallback);
  
  setTimeout(() => {
    console.log('timeout');
  }, 1000);
  

  // 7. NESTED FUNCTIONS
 
  function outerFunction() {
    function innerFunction() {
      console.log('inner');
    }
  
    const innerArrow = () => {
      console.log('inner arrow');
    };
  
    return innerFunction;
  }
  

  // 8. IIFE (Immediately Invoked Function Expression)

  (function() {
    console.log('IIFE');
  })();
  
  (() => {
    console.log('IIFE arrow');
  })();
  

  // 9. METHOD ASSIGNMENTS (Express-style)

  const response = {} as any;
  response.send = function(body: any) {
    console.log(body);
  };
  
  response.json = (data: any) => {
    console.log(JSON.stringify(data));
  };
  
 
  // 10. CONSTRUCTOR FUNCTIONS

  function ConstructorFunction(this: any, name: string) {
    this.name = name;
  }
  

  // 11. EXPORT PATTERNS

  export function exportedFunction() {
    console.log('exported');
  }
  
  export const exportedArrow = () => {
    console.log('exported arrow');
  };
  
  export default function defaultExport() {
    console.log('default export');
  }
  
  
  // 12. DESTRUCTURED PARAMETERS

  const destructuredParams = ({ a, b }: { a: number; b: number }) => {
    return a + b;
  };
  
  