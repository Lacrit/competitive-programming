import { sum } from "../utils";
const { readFileSync } = require( 'fs');

const file: string = readFileSync('advent-of-code-22/1/data.txt', 'utf-8');
const lines: number[][] = file.split("\n\n").map(x => x.split("\n").map(Number));

// ====================================
// part 1
const findMostCalories = (elves: number[][]): number =>  Math.max(...elves.map(sum));

// part 2
const findTotalCaloriesFromTopNElves = (elves: number[][], n = 3) => {
    const totalCalories = elves.map(sum);
    const topN = [...totalCalories].sort((a, b) => b - a).slice(0, n);
    return sum(topN);
}

const part1 = findMostCalories(lines);
const part2 = findTotalCaloriesFromTopNElves(lines);

console.log(part1, part2)