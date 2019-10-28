// bruteforce

let sum1 = 0;
for ( let i = 1; i < 1000; i++ )  {
    if (i%3 == 0 || i%5 == 0) sum1+=i;
}
console.log('sum1', sum1)

// another bruteforce ?? 

let total = 0; 
const multiplesOfXSum = (x) => { 
    let sum = 0;
    for ( let i = x; i < 1000; i += x) { sum += i; } 
    return sum;
}
total = multiplesOfXSum(3) + multiplesOfXSum(5) - multiplesOfXSum(15);
console.log('total', total)

// special thanks to Ewa and Ruslan :>

let total1 = 0; 
// 3 + 6 + .. + 999 = 3 * (1 + 2 + 3 + .. + 333) = 3 * ((333*(333+1))/2)
// 5 + 10 + ... + 995 = 5 * (1 + 2 + 3 + .. + 199) = 5 * ((199*(199+1))/2)
// 15 + 30 + ... + 990 = 15 * (1 + 2 + 3 + .. + 66) = 15 * ((66*(66+1))/2)
const multiplesOfXYSum = (x, n) => x*((n*(n+1))/2)
total = multiplesOfXYSum(3, 333) + multiplesOfXYSum(5, 199) - multiplesOfXYSum(15, 66);