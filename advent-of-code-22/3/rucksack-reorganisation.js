var readFileSync = require('fs').readFileSync;
var file = readFileSync('./data.txt', 'utf-8');
var formatInputData = function (fileData) { return fileData.split("\n").map(function (x) {
    var half = Math.floor(x.length / 2);
    return [x.slice(0, half), x.slice(half, x.length)];
}); };
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
    var UPPERCASE_OFFSET = 38; // ASCII's value minus 7 
    var LOWERCASE_OFFSET = 96; // ASCII's value minus 1
    return char ? char.charCodeAt(0) - (char == char.toUpperCase() ? UPPERCASE_OFFSET : LOWERCASE_OFFSET) : 0;
};
var findCompartmentError = function (compartments) {
    return compartments.reduce(function (prevValue, currValue) { return prevValue + getCharPriority(findRucksackError(currValue)); }, 0);
};
var inputData = formatInputData(file);
console.log(findCompartmentError(inputData));
