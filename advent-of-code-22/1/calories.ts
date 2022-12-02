const { readFileSync } = require( 'fs');

const file: string = readFileSync('./data.txt', 'utf-8');

const formatInputData = (fileData: string): number[][] =>  fileData.split("\n\n").map(x => x.split("\n").map(Number));

const sumElements = (elements: number[]): number => elements.reduce((prev: number, curr: number) => prev + curr, 0);

// ====================================
// part 1
const findMostCalories = (elves: number[][]): number =>  Math.max(...elves.map(sumElements));

// part 2
const findTotalCaloriesFromTopNElves = (elves: number[][], n = 3) => {
    const totalCalories = elves.map(sumElements);
    const topN = [...totalCalories].sort((a, b) => b - a).slice(0, n);
    return sumElements(topN);
}


const inputData = formatInputData(file);
const part1 = findMostCalories(inputData);
const part2 = findTotalCaloriesFromTopNElves(inputData);

console.log(part1, part2)