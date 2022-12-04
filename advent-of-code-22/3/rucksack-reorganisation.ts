
const { readFileSync } = require( 'fs');

const file: string = readFileSync('./data.txt', 'utf-8');

const formatInputDataPart1 = (fileData: string): string[][]  =>  fileData.split("\n").map(x => {
    const half = Math.floor(x.length / 2);
    return [x.slice(0, half), x.slice(half, x.length)];
});

const formatInputDataPart2 = (fileData: string): string[][]  =>  fileData.split("\n").map(x => {
    const half = Math.floor(x.length / 2);
    return [x.slice(0, half), x.slice(half, x.length)];
});

// ==================================================================

const getCharPriority = (char: string | null): number => {
    if (!char) return 0;
    if (char === char.toUpperCase())
        return 27 + char.charCodeAt(0)-'A'.charCodeAt(0);
    return 1 + char.charCodeAt(0)-'a'.charCodeAt(0);
}  

const findRucksackError = (compartment1: Set<string>, compartment2: Set<string>): string => 
    [compartment1, compartment2].reduce((prevValue: Set<string>, currValue: Set<string>) => 
        new Set(Array.from(prevValue).filter((char: string) => currValue.has(char)))
    ).values().next().value;


const findCompartmentError = (compartments: string[][]) => 
    compartments.reduce((prevValue: number, currValue: string[]) => 
        prevValue + getCharPriority(findRucksackError(new Set(currValue[0]), new Set(currValue[1]))), 
    0);


const inputDataPart1 = formatInputDataPart1(file);
const part1 = findCompartmentError(inputDataPart1);

console.log(part1)
