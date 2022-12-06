export const sum = (elements: number[]): number => elements.reduce((prev: number, curr: number) => prev + curr, 0);

export const range = (start: number, end: number): number[] => 
    Array.from({length: end - start+1}, (_, indx) => indx + start)

export const arrayColumn = (arr, n) => arr.map(x => x[n]);