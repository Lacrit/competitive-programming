var readFileSync = require('fs').readFileSync;
var file = readFileSync('./data.txt', 'utf-8');
var formatInputData = function (fileData) {
    return fileData.split("\n\n").map(function (x) { return x.split("\n").map(Number); });
};
var findElfCarryingMostCalories = function (elves) {
    return Math.max.apply(Math, elves.map(function (x) { return x.reduce(function (prev, curr) { return prev + curr; }, 0); }));
};
var inputData = formatInputData(file);
var result = findElfCarryingMostCalories(inputData);
console.log(result);
