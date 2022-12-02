import { Pair } from './../types';
const { readFileSync } = require( 'fs');

const file: string = readFileSync('./data.txt', 'utf-8');

enum GameOptions {
    rock = 1,
    paper=  2, 
    scissors = 3
};

enum Outcomes {
    draw = 3,
    won = 6,
    lost = 0
}

enum OpponentOptions {
    A = GameOptions.rock,
    B = GameOptions.paper,
    C = GameOptions.scissors
};

enum ElfOptions {
    X = GameOptions.rock,
    Y = GameOptions.paper,
    Z = GameOptions.scissors
};

const formatInputData = (fileData: string): Pair<string, string>[]  =>  fileData.split("\n").map(x => x.split(" ") as Pair<string, string>);

const getRoundScore = (round:  Pair<string, string>) : number => {
    let total = 0;
    const [opponentOption, elfOption] = round;
    total += ElfOptions[elfOption];

    if (OpponentOptions[opponentOption] === ElfOptions[elfOption]) {
        total += Outcomes.draw;
    } else if (
        (ElfOptions[elfOption] === GameOptions.paper && OpponentOptions[opponentOption] === GameOptions.rock) 
        || (ElfOptions[elfOption] === GameOptions.rock && OpponentOptions[opponentOption] === GameOptions.scissors) 
        || (ElfOptions[elfOption] === GameOptions.scissors && OpponentOptions[opponentOption] === GameOptions.paper) 
    ) {
        total += Outcomes.won
    }   
    return total;
}

const getTotalScore = (games:  Pair<string, string>[] ): number => games.reduce((prev: number, curr: Pair<string, string>) => prev + getRoundScore(curr),0);

const inputData = formatInputData(file);

const part1 = getTotalScore(inputData)

console.log(part1)