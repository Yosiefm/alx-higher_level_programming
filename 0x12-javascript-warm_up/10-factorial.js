#!/usr/bin/node

const [,, arg1] = process.argv;
const num = parseInt(arg1);

function factorial (n) {
  if (isNaN(n) || n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(num));
