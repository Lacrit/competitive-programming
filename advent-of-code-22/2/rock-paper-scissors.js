"use strict";
exports.__esModule = true;
var readFileSync = require('fs').readFileSync;
var file = readFileSync('./data.txt', 'utf-8');
var GameOptions;
(function (GameOptions) {
    GameOptions[GameOptions["rock"] = 1] = "rock";
    GameOptions[GameOptions["paper"] = 2] = "paper";
    GameOptions[GameOptions["scissors"] = 3] = "scissors";
})(GameOptions || (GameOptions = {}));
;
var Outcomes;
(function (Outcomes) {
    Outcomes[Outcomes["draw"] = 3] = "draw";
    Outcomes[Outcomes["won"] = 6] = "won";
    Outcomes[Outcomes["lost"] = 0] = "lost";
})(Outcomes || (Outcomes = {}));
var OpponentOptions;
(function (OpponentOptions) {
    OpponentOptions[OpponentOptions["A"] = 1] = "A";
    OpponentOptions[OpponentOptions["B"] = 2] = "B";
    OpponentOptions[OpponentOptions["C"] = 3] = "C";
})(OpponentOptions || (OpponentOptions = {}));
;
var ElfOptions;
(function (ElfOptions) {
    ElfOptions[ElfOptions["X"] = 1] = "X";
    ElfOptions[ElfOptions["Y"] = 2] = "Y";
    ElfOptions[ElfOptions["Z"] = 3] = "Z";
})(ElfOptions || (ElfOptions = {}));
;
var formatInputData = function (fileData) { return fileData.split("\n").map(function (x) { return x.split(" "); }); };
var getRoundScore = function (round) {
    var total = 0;
    var opponentOption = round[0], elfOption = round[1];
    total += ElfOptions[elfOption];
    if (OpponentOptions[opponentOption] === ElfOptions[elfOption]) {
        total += Outcomes.draw;
    }
    else if ((ElfOptions[elfOption] === GameOptions.paper && OpponentOptions[opponentOption] === GameOptions.rock)
        || (ElfOptions[elfOption] === GameOptions.rock && OpponentOptions[opponentOption] === GameOptions.scissors)
        || (ElfOptions[elfOption] === GameOptions.scissors && OpponentOptions[opponentOption] === GameOptions.paper)) {
        total += Outcomes.won;
    }
    return total;
};
var getTotalScore = function (games) { return games.reduce(function (prev, curr) { return prev + getRoundScore(curr); }, 0); };
var inputData = formatInputData(file);
var test = getTotalScore(inputData);
console.log(test);
