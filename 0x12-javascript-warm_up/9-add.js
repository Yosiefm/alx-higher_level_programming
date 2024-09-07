#!/usr/bin/env node

const [,, arg1, arg2] = process.argv;

function add (a, b) {
  return a + b;
}

const num1 = parseInt(arg1);
const num2 = parseInt(arg2);

if (isNaN(num1) || isNaN(num2)) {
  console.log('NaN');
} else {
  console.log(add(num1, num2));
}
