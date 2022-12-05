import { range } from '../utils';
import { Pair } from './../types';
const { readFileSync } = require( 'fs');
const file: string = readFileSync('advent-of-code-22/4/data.txt', 'utf-8');
const lines: Pair<number[], number[]>[] =
    file.split("\n").map(line => {
        const [firstRange, secondRange] = line.split(",");
        const [fRangeStart, fRangeEnd] = firstRange.split("-");
        const [sRangeStart, sRangeEnd] = secondRange.split("-");
        return [range(+fRangeStart, +fRangeEnd), range(+sRangeStart, +sRangeEnd)];
    });

// ==================================================================

console.log(lines)