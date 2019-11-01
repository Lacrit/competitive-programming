const _ = require('lodash');
const n = 10;
const iter = _.range(1, n+1);
// 1 2 3 4 5 6 7 8 9 10 -> smallestMultiple -> 2520
// multiply all primes -> 1*2*3*5*7 -> 210   2*2 2*2*5 3*2 5*2
// 1 step -> find all primes till n 
// 3 step for non primes find it's factors 

// 4 -> factors [2, 2]

const isSubset = (arr, set) => arr.every(el => set.has(el))
 
const primeFactors = (x) => {
    let factors = [];
    for (let i = 2; i <= x; i++) {
        while (x%i == 0) {
            factors.push(i)
            x = x/i;
        }
    }
    if (x > 1) {
        factors.push(x)
    }
    return factors;
}
const primes = new Set([]);

iter.map(x => primeFactors(x).map(el => primes.add(el)));


console.log('primes', primes)
// console.log('primeFactors', primeFactors(20))