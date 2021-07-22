const input = [
    [8, 6],
    [1, 2, 1, 3, 1, 1, 1, 2],
];

const solution = () => {
    const [_, m] = input[0];
    const combination = input[1];

    let startIdx = 0;
    let endIdx = 0;

    const results = [];
    while (startIdx < combination.length && endIdx < combination.length) {
        if (endIdx > startIdx) {
            const subCombination = combination.slice(startIdx, endIdx + 1);
            const sum = subCombination.reduce((acc, value) => acc + value, 0);
            if (sum === m) {
                results.push(subCombination);
                endIdx++;
            } else {
                if (sum < m) {
                    endIdx++;
                } else {
                    startIdx++;
                }
            }
        } else {
            endIdx++;
        }
    }
    console.log(results);
    return results.length;
};
console.time();
console.log(solution());
console.timeEnd();
