"use strict";
var _a, _b;
exports.__esModule = true;
exports.SuggestedElfOptions = exports.LooseOptions = exports.WinOptions = void 0;
var enums_1 = require("./enums");
exports.WinOptions = (_a = {},
    _a[enums_1.GameOptions.rock] = enums_1.GameOptions.paper,
    _a[enums_1.GameOptions.paper] = enums_1.GameOptions.scissors,
    _a[enums_1.GameOptions.scissors] = enums_1.GameOptions.rock,
    _a);
exports.LooseOptions = (_b = {},
    _b[enums_1.GameOptions.rock] = enums_1.GameOptions.scissors,
    _b[enums_1.GameOptions.paper] = enums_1.GameOptions.rock,
    _b[enums_1.GameOptions.scissors] = enums_1.GameOptions.paper,
    _b);
exports.SuggestedElfOptions = {
    X: "loose",
    Y: "draw",
    Z: "win"
};
