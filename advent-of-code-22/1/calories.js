var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var readFileSync = require('fs').readFileSync;
var file = readFileSync('./data.txt', 'utf-8');
var formatInputData = function (fileData) { return fileData.split("\n\n").map(function (x) { return x.split("\n").map(Number); }); };
var sumElements = function (elements) { return elements.reduce(function (prev, curr) { return prev + curr; }, 0); };
// ====================================
// part 1
var findMostCalories = function (elves) { return Math.max.apply(Math, elves.map(sumElements)); };
// part 2
var findTotalCaloriesFromTopNElves = function (elves, n) {
    if (n === void 0) { n = 3; }
    var totalCalories = elves.map(sumElements);
    var topN = __spreadArray([], totalCalories, true).sort(function (a, b) { return b - a; }).slice(0, n);
    return sumElements(topN);
};
var inputData = formatInputData(file);
var part1 = findMostCalories(inputData);
var part2 = findTotalCaloriesFromTopNElves(inputData);
console.log(part1, part2);
