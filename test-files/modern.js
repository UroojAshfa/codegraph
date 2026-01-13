// test-files/modern.js

// Arrow functions
const add = (a, b) => a + b;
const multiply = (x, y) => x * y;

// Arrow function calling another
const calculate = (a, b) => {
  const sum = add(a, b);
  const product = multiply(a, b);
  return { sum, product };
};

// Async/await
async function fetchUser(id) {
  const data = await getFromAPI(id);
  return processUser(data);
}

async function getFromAPI(id) {
  return { id, name: 'John' };
}

function processUser(data) {
  return data.name.toUpperCase();
}

// Async arrow function
const fetchData = async () => {
  const result = await fetchUser(1);
  return result;
};

// Export
export const helper = () => {
  return calculate(1, 2);
};