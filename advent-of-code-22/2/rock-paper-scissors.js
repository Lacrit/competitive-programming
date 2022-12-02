"use strict";
var _a, _b;
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
var WinOptions = (_a = {},
    _a[GameOptions.rock] = GameOptions.paper,
    _a[GameOptions.paper] = GameOptions.scissors,
    _a[GameOptions.scissors] = GameOptions.rock,
    _a);
var LooseOptions = (_b = {},
    _b[GameOptions.rock] = GameOptions.scissors,
    _b[GameOptions.paper] = GameOptions.rock,
    _b[GameOptions.scissors] = GameOptions.paper,
    _b);
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
var SuggestedElfOptions = {
    X: "loose",
    Y: "draw",
    Z: "win"
};
var formatInputData = function (fileData) { return fileData.split("\n").map(function (x) { return x.split(" "); }); };
//part 1
var getRoundScore = function (round) {
    var total = 0;
    var opponentOption = round[0], elfOption = round[1];
    total += ElfOptions[elfOption];
    if (OpponentOptions[opponentOption] === ElfOptions[elfOption]) {
        total += Outcomes.draw;
    }
    else if (ElfOptions[elfOption] === WinOptions[opponentOption]) {
        total += Outcomes.won;
    }
    return total;
};
var getCorrectElfOption = function (round) {
    var opponentOption = OpponentOptions[round[0]];
    var suggestedElfOption = SuggestedElfOptions[round[1]];
    var actualOption = function (suggestedElfOption) {
        var _a;
        return (_a = {},
            _a[SuggestedElfOptions.X] = LooseOptions[opponentOption],
            _a[SuggestedElfOptions.Y] = opponentOption,
            _a[SuggestedElfOptions.Z] = WinOptions[opponentOption],
            _a)[suggestedElfOption];
    };
    return actualOption(suggestedElfOption);
};
//part 2
var getRoundScoreEnhanced = function (round) {
    var total = 0;
    var opponentOption = round[0];
    var elfOption = getCorrectElfOption(round);
    total += elfOption;
    if (OpponentOptions[opponentOption] === elfOption) {
        total += Outcomes.draw;
    }
    else if (elfOption === WinOptions[opponentOption]) {
        total += Outcomes.won;
    }
    return total;
};
var getTotalScore = function (games, sumFunc) { return games.reduce(function (prev, curr) { return prev + sumFunc(curr); }, 0); };
var inputData = formatInputData(file);
var part1 = getTotalScore(inputData, getRoundScore);
var part2 = getTotalScore(inputData, getRoundScoreEnhanced);
console.log(part1, part2);
