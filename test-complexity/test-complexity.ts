
// Complexity 1 - No branches
function simple() {
  console.log('hello');
  return true;
}

// Complexity 2 - One if statement
function oneIf(x: number) {
  if (x > 0) {
    return 'positive';
  }
  return 'zero or negative';
}

// Complexity 3 - Two branches
function twoIfs(x: number) {
  if (x > 0) {
    return 'positive';
  }
  if (x < 0) {
    return 'negative';
  }
  return 'zero';
}

// Complexity 4 - if + for loop
function ifAndLoop(arr: number[]) {
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  return arr.length;
}

// Complexity 5 - Nested ifs
function nestedIfs(x: number, y: number) {
  if (x > 0) {
    if (y > 0) {
      return 'both positive';
    }
    return 'x positive';
  }
  return 'x not positive';
}

// Complexity 6 - Ternary operators
function ternaries(x: number) {
  const a = x > 0 ? 'positive' : 'not positive';
  const b = x < 0 ? 'negative' : 'not negative';
  const c = x === 0 ? 'zero' : 'not zero';
  return a + b + c;
}

// Complexity 7 - Logical operators
function logicalOps(x: number, y: number) {
  if (x > 0 && y > 0) {
    return 'both positive';
  }
  if (x > 0 || y > 0) {
    return 'at least one positive';
  }
  return 'neither positive';
}

// Complexity 10 - Switch with 5 cases
function switchStatement(x: string) {
  switch (x) {
    case 'a':
      return 1;
    case 'b':
      return 2;
    case 'c':
      return 3;
    case 'd':
      return 4;
    case 'e':
      return 5;
    default:
      return 0;
  }
}

// Complexity 8 - While + multiple ifs
function whileWithIfs(arr: number[]) {
  let i = 0;
  let sum = 0;
  
  while (i < arr.length) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
    if (arr[i] < 0) {
      sum -= arr[i];
    }
    i++;
  }
  
  return sum;
}

// Complexity 12 - Try-catch + multiple branches
function tryCatchComplex(x: number) {
  try {
    if (x > 100) {
      throw new Error('Too large');
    }
    if (x < 0) {
      throw new Error('Negative');
    }
    if (x === 0) {
      return 'zero';
    }
    for (let i = 0; i < x; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
    return 'Unknown error';
  }
  return 'success';
}

// Expected complexities:
// simple: 1
// oneIf: 2
// twoIfs: 3
// ifAndLoop: 4
// nestedIfs: 5 (or 4 depending on how you count)
// ternaries: 6 (or 4, each ternary adds 1)
// logicalOps: 7 (or 5, && and || each add 1)
// switchStatement: 10 (base 1 + 5 cases + maybe default)
// whileWithIfs: 8 (while + 2 ifs)
// tryCatchComplex: 12+ (try/catch + multiple branches)