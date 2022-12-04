
const { readFileSync } = require( 'fs');

const file: string = readFileSync('./data.txt', 'utf-8');

const formatInputData = (fileData: string): string[][]  =>  fileData.split("\n").map(x => {
    const half = Math.floor(x.length / 2);
    return [x.slice(0, half), x.slice(half, x.length)];
});

// ==================================================================

//  upper case letter priorities are 28 > x <= 52, lower case letter priorities are 1 >= x < 27,
const getCharPriority = (char: string | null): number => {
    if (!char) return 0;
    const charASCII = char.charCodeAt(0);
    return char === char.toUpperCase() ?  27 + charASCII-'A'.charCodeAt(0) : 1 +  charASCII-'a'.charCodeAt(0);

}  

const findCompartmentsError = (compartment1: Set<string>, compartment2: Set<string>): string => 
    [compartment1, compartment2].reduce((prevValue: Set<string>, currValue: Set<string>) => 
        new Set(Array.from(prevValue).filter((char: string) => currValue.has(char)))
    ).values().next().value;


const findRucksackError = (compartments: string[][]) => 
    compartments.reduce((prevValue: number, [compartment1, compartment2]: string[]) => 
        prevValue + getCharPriority(findCompartmentsError(new Set(compartment1), new Set(compartment2))), 
    0);


const inputDataPart1 = formatInputData(file);
const part1 = findRucksackError(inputDataPart1);

console.log(part1)
