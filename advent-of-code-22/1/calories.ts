const { readFileSync } = require( 'fs');

const file: string = readFileSync('./data.txt', 'utf-8');

const formatInputData = (fileData: string): number[][] =>  fileData.split("\n\n").map(x => x.split("\n").map(Number));

// part 1
const findElfCarryingMostCalories = (elves: number[][]) =>  Math.max(...elves.map(x => x.reduce((prev: number, curr: number) => prev + curr, 0)));

// // part 2
// const findCaloriesCarriedByTopNElves = (elves: number[][], n = 3) => {

// }


const inputData = formatInputData(file);
const result = findElfCarryingMostCalories(inputData)

console.log(result)