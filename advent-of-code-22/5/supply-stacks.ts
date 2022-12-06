import { arrayColumn, sum } from "../utils";
import { StacksDictionary, Step } from "./types";
const { readFileSync } = require( 'fs');

const file: string = readFileSync('advent-of-code-22/5/data.txt', 'utf-8');
const [s, m] = file.split("\n\n").map(x => x.split("\n"));
const stacks = s.map((x) => x.match(/.{1,4}/g)?.map(y => y.trim()))

const columns: number = stacks[stacks.length - 1]!.length;
const stacksColumns: string[][] = [...Array(columns)].map((_, i) => arrayColumn(stacks, i).reverse());

const stacksByIndex: StacksDictionary = stacksColumns.reduce((o, key, i) => ({ ...o, [i+1]: key.slice(1, key.length).filter(Boolean)}), {})
const rearrangementSteps: Step[] = m.map(x => x.split(" ").filter((_, i) => i % 2 !== 0).map(Number) as Step)

// ====================================

const combineTopCrates = (_stacks: StacksDictionary) => 
    Object.values(_stacks).reduce((acc: string, curr: string[]) => acc + curr[curr.length-1].slice(1,-1),"");

const rearrange = (obj: StacksDictionary, steps:  Step[], model = 9000) => {
    const _stacks = structuredClone(obj);
    steps.forEach(([count, indexFrom, indexTo]: Step) => { 
            const elsToMove = _stacks[indexFrom].splice(-count);
            _stacks[indexTo].push(...(model > 9000 ? elsToMove : elsToMove.reverse()));
    });
    return _stacks;
}

const part1 = combineTopCrates(rearrange(stacksByIndex, rearrangementSteps))
const part2 = combineTopCrates(rearrange(stacksByIndex, rearrangementSteps, 9001))

console.log(part1, part2)