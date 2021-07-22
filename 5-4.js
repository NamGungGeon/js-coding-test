// hard
const input = [
    [5, 5],
    [1, 3, 1, 2, 3],
];

const solution = () => {
    const [_, m] = input[0];
    const combination = input[1];
    const result = [];

    let unit = 1;
    let pointer = 0;
    while (unit <= combination.length) {
        while (
            pointer < combination.length &&
            pointer + unit <= combination.length
        ) {
            const subComb = combination.slice(pointer, pointer + unit);
            const sum = subComb.reduce((acc, value) => acc + value, 0);
            if (sum <= m) {
                result.push(subComb);
            }
            pointer++;
        }
        pointer = 0;
        unit++;
    }

    return result.length;
};
const fastSolution = () => {
    const [_, m] = input[0];
    const combination = input[1];
    let sum = 0;
    let result = 0;
    let lt = 0;
    for (let rt = 0; rt < combination.length; rt++) {
        sum += combination[rt];
        while (sum > m) {
            sum -= combination[lt];
            lt++;
        }
        result += rt - lt + 1;
    }
    return result;
};
console.time();
console.log(fastSolution());
console.timeEnd();
