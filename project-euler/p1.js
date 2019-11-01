let _ = require('lodash');
const n = 999;

// quick bruteforce o(n)

const iter = _.range(1, n+1); // defines n elements 
const isDivisibleBy = (i, x) =>  i % x == 0; // constant check 
const isDivisibleBy3OR5 = i => isDivisibleBy(i, 3) || isDivisibleBy(i, 5); // constant check 
const sum = (a, b) => a + b; // constant sum 

const totalSumMethodOne = iter.filter(isDivisibleBy3OR5).reduce(sum); // filters and sums n elements -> o(n) 
console.log('totalSumMethodOne', totalSumMethodOne)

// another bruteforce o(n) (very lodash)

const totalSumMethodTwo = _.sumBy(iter, el => isDivisibleBy3OR5(el) && el );
console.log('totalSumMethodTwo', totalSumMethodTwo);

// yeeei o(1) 

// // 3 + 6 + .. + 999 = 3 * (1 + 2 + 3 + .. + 333) = 3 * ((333*(333+1))/2)
// // 5 + 10 + ... + 995 = 5 * (1 + 2 + 3 + .. + 199) = 5 * ((199*(199+1))/2)
// // 15 + 30 + ... + 990 = 15 * (1 + 2 + 3 + .. + 66) = 15 * ((66*(66+1))/2)
const multiplesOfXYSum = x => x*((Math.floor(n/x)*(Math.floor(n/x)+1))/2)
totalSumMethodThree = multiplesOfXYSum(3) + multiplesOfXYSum(5) - multiplesOfXYSum(15);
console.log('totalSumMethodThree', totalSumMethodThree)
