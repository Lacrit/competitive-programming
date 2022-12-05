import { Pair } from './../types';
const { readFileSync } = require( 'fs');
const file: string = readFileSync('advent-of-code-22/4/data.txt', 'utf-8');
const lines: Pair<Pair<number, number>, Pair<number, number>>[] =
    file.split("\n").map(line => {
        const [firstRange, secondRange] = line.split(",");
        const [fRangeStart, fRangeEnd] = firstRange.split("-");
        const [sRangeStart, sRangeEnd] = secondRange.split("-");
        return [[+fRangeStart, +fRangeEnd], [+sRangeStart, +sRangeEnd]];
    });

// ==================================================================
const checkOverlapping = ([a1, a2]: Pair<number, number>, [b1, b2]: Pair<number, number>): number => 
    // 123 a
    //   345 b 
    (b1 >= a1 && b1 <= a2 ) || 
    //   345 a
    // 123 b 
    (b2 <= a1 && b2 >= a1) || 
    // 123 b
    //   345 a 
    (a1 <= b2 && a1 >= b1) || 
    //   345 b
    // 123 a
    (a2 >= b1 && a2 <= b2) ? 1 : 0;

const checkFullyContains = ([a1,a2]: Pair<number, number>, [b1, b2]: Pair<number, number>): number => 
    (a1 <= b1 && b2 <= a2) || (b1 <= a1 && a2 <= b2) ? 1 : 0;

const countOverlappingRanges = (ranges: Pair<Pair<number, number>, Pair<number, number>>[], shouldCheckContains?: boolean): number => 
    ranges.reduce((acc: number, [a1, a2]: Pair<Pair<number, number>, Pair<number, number>>) =>
        acc + (shouldCheckContains ? checkFullyContains(a1, a2) : checkOverlapping(a1, a2))
    ,0);

const part1 = countOverlappingRanges(lines, true);
const part2 = countOverlappingRanges(lines);

console.log(part1, part2)   