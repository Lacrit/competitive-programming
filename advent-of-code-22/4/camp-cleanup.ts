const range = (start: number, end: number): number[] => Array.from({length: end - start+1}, (_, indx) => indx + start)

console.log(range(6, 6))