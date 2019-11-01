let _ = require('lodash');

const n = 100;
const iter = _.range(1, n+1);
const squareOftheSum = (n) => Math.pow((n*(n+1)/2),2) 

// 1^2 + 2^2 + 3^2.... bruteforce :(
const square = (n) => n*n;
const sum = (sum, iter) => sum+iter;

console.log('sum', squareOftheSum(n) - (iter.map(square).reduceRight(sum)))