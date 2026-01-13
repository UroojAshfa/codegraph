

// Named exports with functions
export function publicHelper() {
    return privateHelper();
  }
  
  function privateHelper() {
    return 'helper';
  }
  
  // Export arrow functions
  export const utils = {
    format: (data) => data.toString(),
    validate: (input) => input.length > 0
  };
  

  export default function main() {
    publicHelper();
    utils.format('test');
  }