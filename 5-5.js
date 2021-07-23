const input = [
    [1, 3],
    [12, 15, 11, 20, 25, 10, 20, 19, 13, 15],
];

const solution = () => {
    const [_, k] = input[0];
    const sellAmounts = input[1];

    let max = 0;
    for (let l = 0; l < sellAmounts.length; l++) {
        let endIndex = l + k - 1;
        if (endIndex > sellAmounts.length - 1) {
            break;
        }
        let sum = 0;
        for (let k = l; k <= endIndex; k++) {
            sum += sellAmounts[k];
        }
        if (sum > max) max = sum;
    }
    return max;
};
console.time();
console.log(solution());
console.timeEnd();
