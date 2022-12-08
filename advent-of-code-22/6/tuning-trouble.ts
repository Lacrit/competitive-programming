const { readFileSync } = require( 'fs');
const file: string = readFileSync('advent-of-code-22/6/data.txt', 'utf-8');

// ==================================================================

const hasDuplicates = (values: string[]) => {
    return new Set(values).size !== values.length;
}

const findStartMarker = (signal: string, elvesProtocolLength = 4) => {
    let processedCharsCount = 0;
    for (let i = elvesProtocolLength-1; i < signal.length; i++) {
        const signalPart:string[] = [];
        for (let j = 0; j < elvesProtocolLength; j++) {
            signalPart.push(signal[i-j]);
        }
        if (!hasDuplicates(signalPart)) {
            processedCharsCount = i+1;
            break;
        }
    }
    return processedCharsCount;
}

const part1 = findStartMarker(file);
const part2 = findStartMarker(file, 14);

console.log(part1, part2)