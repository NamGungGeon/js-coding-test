const input = [
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6],
];

const solution = () => {
    return input.sort((c1, c2) => {
        if (c1[0] === c2[0]) {
            return c1[1] - c2[1];
        }
        return c1[0] - c2[0];
    });
};
console.time();
console.log(solution());
console.timeEnd();
