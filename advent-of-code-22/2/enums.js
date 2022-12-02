"use strict";
exports.__esModule = true;
exports.ElfOptions = exports.OpponentOptions = exports.Outcomes = exports.GameOptions = void 0;
var GameOptions;
(function (GameOptions) {
    GameOptions[GameOptions["rock"] = 1] = "rock";
    GameOptions[GameOptions["paper"] = 2] = "paper";
    GameOptions[GameOptions["scissors"] = 3] = "scissors";
})(GameOptions = exports.GameOptions || (exports.GameOptions = {}));
;
var Outcomes;
(function (Outcomes) {
    Outcomes[Outcomes["draw"] = 3] = "draw";
    Outcomes[Outcomes["won"] = 6] = "won";
    Outcomes[Outcomes["lost"] = 0] = "lost";
})(Outcomes = exports.Outcomes || (exports.Outcomes = {}));
var OpponentOptions;
(function (OpponentOptions) {
    OpponentOptions[OpponentOptions["A"] = 1] = "A";
    OpponentOptions[OpponentOptions["B"] = 2] = "B";
    OpponentOptions[OpponentOptions["C"] = 3] = "C";
})(OpponentOptions = exports.OpponentOptions || (exports.OpponentOptions = {}));
;
var ElfOptions;
(function (ElfOptions) {
    ElfOptions[ElfOptions["X"] = 1] = "X";
    ElfOptions[ElfOptions["Y"] = 2] = "Y";
    ElfOptions[ElfOptions["Z"] = 3] = "Z";
})(ElfOptions = exports.ElfOptions || (exports.ElfOptions = {}));
;
