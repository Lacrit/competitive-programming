import { Pair } from './../types';
import { LooseOptions, SuggestedElfOptions, WinOptions } from './constants';
import { ElfOptions, OpponentOptions, Outcomes } from './enums';

const { readFileSync } = require( 'fs');

const file: string = readFileSync('./data.txt', 'utf-8');

const formatInputData = (fileData: string): Pair<string, string>[]  =>  fileData.split("\n").map(x => x.split(" ") as Pair<string, string>);

const getCorrectElfOption = (round:  Pair<string, string>): number => {
    const opponentOption: number = OpponentOptions[round[0]];
    const suggestedElfOption: string = SuggestedElfOptions[round[1]];

    const actualOption = (suggestedElfOption: string): number => ({
        [SuggestedElfOptions.X]: LooseOptions[opponentOption],
        [SuggestedElfOptions.Y]: opponentOption,
        [SuggestedElfOptions.Z]: WinOptions[opponentOption]
      })[suggestedElfOption];

   return actualOption(suggestedElfOption);
}

const getRoundScore = (round: Pair<string, string>, options?: any) : number => {
    const { shouldGuessElfOption } = options ?? {};
    const opponentOption: number = OpponentOptions[round[0]];
    const elfOption: number = shouldGuessElfOption ? getCorrectElfOption(round) : ElfOptions[round[1]];
    let total = elfOption;

    if (opponentOption === elfOption) {
        total += Outcomes.draw;
    } else if (elfOption === WinOptions[opponentOption]) {
        total += Outcomes.won
    }   

    return total;
}

const getTotalScore = (games:  Pair<string, string>[], options?: any): number => 
    games.reduce((prev: number, curr: Pair<string, string>) => prev + getRoundScore(curr, options),0);

const inputData = formatInputData(file);

const part1 = getTotalScore(inputData);
const part2 = getTotalScore(inputData, { shouldGuessElfOption: true });

console.log(part1, part2);