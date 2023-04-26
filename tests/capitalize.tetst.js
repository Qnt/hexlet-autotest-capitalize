import capitalize from "../src/capitalize.js";

if (capitalize('hexlet') !== 'Hexlet') {
  throw new Error('error');
}
if (capitalize('') !== '') {
  throw new Error('error');
}

console.log('All tests are passed');