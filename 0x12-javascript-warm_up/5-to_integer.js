#!/usr/bin/node

const [,, arg1] = process.argv;

const num = parseInt(arg1);

if (!isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log('Not a number');
}
