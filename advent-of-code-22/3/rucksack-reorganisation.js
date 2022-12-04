var readFileSync = require('fs').readFileSync;
var file = readFileSync('./data.txt', 'utf-8');
var formatInputDataPart1 = function (fileData) { return fileData.split("\n").map(function (x) {
    var half = Math.floor(x.length / 2);
    return [x.slice(0, half), x.slice(half, x.length)];
}); };
var formatInputDataPart2 = function (fileData) { return fileData.split("\n").map(function (x) {
    var half = Math.floor(x.length / 2);
    return [x.slice(0, half), x.slice(half, x.length)];
}); };
// ==================================================================
var getCharPriority = function (char) {
    if (!char)
        return 0;
    if (char === char.toUpperCase())
        return 27 + char.charCodeAt(0) - 'A'.charCodeAt(0);
    return 1 + char.charCodeAt(0) - 'a'.charCodeAt(0);
};
var findRucksackError = function (compartment1, compartment2) {
    return [compartment1, compartment2].reduce(function (prevValue, currValue) {
        return new Set(Array.from(prevValue).filter(function (char) { return currValue.has(char); }));
    }).values().next().value;
};
var findCompartmentError = function (compartments) {
    return compartments.reduce(function (prevValue, currValue) {
        return prevValue + getCharPriority(findRucksackError(new Set(currValue[0]), new Set(currValue[1])));
    }, 0);
};
var inputDataPart1 = formatInputDataPart1(file);
var part1 = findCompartmentError(inputDataPart1);
console.log(part1);
