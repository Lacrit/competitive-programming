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
var getCompartmentRepetitions = function (compartment) {
    var map = new Map();
    Array.from(compartment).forEach(function (char) {
        map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
    });
    return map;
};
var findRucksackError = function (rucksack) {
    var compartment1 = rucksack[0], compartment2 = rucksack[1];
    var compartment1Repetitions = getCompartmentRepetitions(compartment1);
    var commonChar = null;
    Array.from(compartment2).forEach(function (char) {
        if (compartment1Repetitions.has(char)) {
            commonChar = char;
        }
    });
    return commonChar;
};
var getCharPriority = function (char) {
    if (!char)
        return 0;
    if (char === char.toUpperCase())
        return 27 + char.charCodeAt(0) - 'A'.charCodeAt(0);
    return 1 + char.charCodeAt(0) - 'a'.charCodeAt(0);
};
var findCompartmentError = function (compartments) {
    return compartments.reduce(function (prevValue, currValue) { return prevValue + getCharPriority(findRucksackError(currValue)); }, 0);
};
var inputDataPart1 = formatInputDataPart1(file);
var part1 = findCompartmentError(inputDataPart1);
console.log(part1);
