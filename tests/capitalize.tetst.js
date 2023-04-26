import { strict as assert } from "node:assert";
import capitalize from "../src/capitalize.js";

assert.equal(capitalize('hexlet'), 'Hexlet');
assert.equal(capitalize(''), '');

console.log('All tests are passed');