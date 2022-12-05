import { Pair } from './../types';
const { readFileSync } = require( 'fs');
const file: string = readFileSync('advent-of-code-22/3/data.txt', 'utf-8');
const formatInputData = (fileData: string): string[]  =>  fileData.split("\n");

// ==================================================================

const rucksackByCompartments = (rucksack: string): Pair<Set<string>, Set<string>> => {
    const half = Math.floor(rucksack.length / 2);
    return [new Set(rucksack.slice(0, half)), new Set(rucksack.slice(half, rucksack.length))];
}

//  upper case letter priorities are 28 > x <= 52, lower case letter priorities are 1 >= x < 27,
const getCharPriority = (char: string | null): number => {
    if (!char) return 0;
    const charASCII = char.charCodeAt(0);
    return char === char.toUpperCase() ?  27 + charASCII-'A'.charCodeAt(0) : 1 + charASCII-'a'.charCodeAt(0);

}  

const findCompartmentsError = (compartments: Set<string>[]): string => 
    [...compartments].reduce((prevValue: Set<string>, currValue: Set<string>) => 
        new Set(Array.from(prevValue).filter((char: string) => currValue.has(char)))
    ).values().next().value;

// part 1    
const sumRucksackPriorities = (rucksacks: string[]): number => 
    rucksacks.reduce((prevValue: number, rucksack: string) => 
        prevValue + getCharPriority(findCompartmentsError(rucksackByCompartments(rucksack))), 
    0);

// part 2
const sumGroupPriorities = (rucksacks: string[], groupSize = 3) => 
    rucksacks.reduce((prevValue: number, _, indx: number) => 
        prevValue + (indx % groupSize + 1 === 1 ? getCharPriority(findCompartmentsError(rucksacks.slice(indx, indx + groupSize).map(x => new Set(x)))) : 0), 
    0);

const inputData = formatInputData(file);
const part1 = sumRucksackPriorities(inputData);
const part2 = sumGroupPriorities(inputData)

console.log(part1, part2)
