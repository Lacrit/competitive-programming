// palindromes

const str = process.argv[2]; 
let countPalindromes = str.length; 
const isPalindrome = (word) => +(word === word.split('').reverse().join(''));
for ( let i = 1; i < str.length; i++ ) { 
    for ( let j = 0; j < str.length-i; j++) { 
        countPalindromes += isPalindrome(str.substring(j, j+i+1));
    }

}
console.log('countPalindromes', countPalindromes)

// pionek 

// add letters

const addLetters = (...letters) => { 
    if (!letters.length) return 'z'; 
    if (letters.length === 1) return letters[0];
    let sum = 0; 
    letters.map(x => 
        sum = (sum+(x.charCodeAt(0) - 96) > 26) 
        ? (sum+(x.charCodeAt(0) - 96)) - 26
        : sum+(x.charCodeAt(0) - 96)
    )
    return sum; 
}

console.log(addLetters("y", "y", "z", "v", "f"))