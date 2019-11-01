const _ = require('lodash');
const n = 4000000;

// o(n) ? (TODO: figure how to use fp.flow in here)

const isEven = i => i % 2 == 0;
const isExceedingLimt = last => last < n;
const summarize = (sum,last) => sum+last;
const next = (last, prev) => last+prev;

const  fibbo = (last,prev,sum) => 
    isExceedingLimt(last) 
        ? isEven(last)
            ? fibbo(next(last,prev),last,summarize(sum,last)) 
            : fibbo(next(last,prev),last,sum) 
    : sum 


console.log('fibbo', fibbo(1,0,0))