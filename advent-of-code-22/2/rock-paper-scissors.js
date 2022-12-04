"use strict";
exports.__esModule = true;
var constants_1 = require("./constants");
var enums_1 = require("./enums");
var readFileSync = require('fs').readFileSync;
var file = readFileSync('./data.txt', 'utf-8');
var formatInputData = function (fileData) { return fileData.split("\n").map(function (x) { return x.split(" "); }); };
var getCorrectElfOption = function (opponentOption, suggestedElfOption) {
    var _a;
    return (_a = {},
        _a[constants_1.SuggestedElfOptions.X] = constants_1.LooseOptions[opponentOption],
        _a[constants_1.SuggestedElfOptions.Y] = opponentOption,
        _a[constants_1.SuggestedElfOptions.Z] = constants_1.WinOptions[opponentOption],
        _a)[suggestedElfOption];
};
var getRoundScore = function (round, options) {
    var shouldGuessElfOption = (options !== null && options !== void 0 ? options : {}).shouldGuessElfOption;
    var opponentOption = enums_1.OpponentOptions[round[0]];
    var elfOption = shouldGuessElfOption ? getCorrectElfOption(opponentOption, constants_1.SuggestedElfOptions[round[1]]) : enums_1.ElfOptions[round[1]];
    var total = elfOption;
    if (opponentOption === elfOption) {
        total += enums_1.Outcomes.draw;
    }
    else if (elfOption === constants_1.WinOptions[opponentOption]) {
        total += enums_1.Outcomes.won;
    }
    return total;
};
var getTotalScore = function (games, options) {
    return games.reduce(function (prev, curr) { return prev + getRoundScore(curr, options); }, 0);
};
var inputData = formatInputData(file);
var part1 = getTotalScore(inputData);
var part2 = getTotalScore(inputData, { shouldGuessElfOption: true });
console.log(part1, part2);
