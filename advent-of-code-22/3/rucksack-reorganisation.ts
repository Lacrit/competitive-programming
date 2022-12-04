
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

const getCompartmentRepetitions = (compartment: string): Map<string, number> => {
    const map = new Map<string, number>();
    Array.from(compartment).forEach((char: string) => {
        map.has(char) ? map.set(char, map.get(char)!+1) : map.set(char, 1)
    })
    return map
}

const findRucksackError = (rucksack: string[]): string | null => {
    const [compartment1, compartment2] = rucksack;
    const compartment1Repetitions = getCompartmentRepetitions(compartment1);
    let commonChar: string | null = null;
    Array.from(compartment2).forEach((char: string) => {
        if (compartment1Repetitions.has(char)) {
            commonChar = char;
        }
    })
    return commonChar;
}

const getCharPriority = (char: string | null): number => {
    const UPPERCASE_OFFSET = 38; // ASCII's value minus 7 
    const LOWERCASE_OFFSET = 96; // ASCII's value minus 1
    return char ? char.charCodeAt(0)-(char == char.toUpperCase() ? UPPERCASE_OFFSET : LOWERCASE_OFFSET) : 0
}

const findCompartmentError = (compartments: string[][]) => 
    compartments.reduce(( prevValue: number, currValue: string[]) => prevValue + getCharPriority(findRucksackError(currValue)),0);


const inputDataPart1 = formatInputDataPart1(file);
const part1 = findCompartmentError(inputDataPart1);
