
let _ = require('lodash'); // TODO: rewrite
const n = 1000;

// quick bruteforce, pretty dumb o(n^3)

for ( let a = 1; a <= 1000; a++ ) { 
    for ( let b = 1; b <= 1000; b++ ) {
        for ( let c = 1; c <= 1000; c++ ) { 
            if ( a+b+c == 1000 && a*a+b*b == c*c) { 
                console.log('abc1', a, b, c)
                break;
            }
        }
    }
}

// imroved bruteforce ?? (not much, but still) o(n^2)

for ( let a = 1; a <= (n-3)/3; a++ ) { 
    for ( let b = 2; b <= (n-a)/2; b++ ) {
        c = n - a - b; 
        if (b > a && a+b+c == n && a*a+b*b == c*c) { 
            console.log('abc2', a, b, c)
            break;
        }
    }
}




