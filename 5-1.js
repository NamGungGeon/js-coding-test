const input = [
    [1, 3, 5],
    [2, 3, 6, 7, 9],
];

const solution = () => {
    const [a, b] = input;
    const result = [];

    let ai = 0;
    let bi = 0;
    for (let i = 0; i < a.length + b.length; i++) {
        if (a[ai] <= b[bi] && ai < a.length) {
            result.push(a[ai]);
            ai++;
        } else {
            result.push(b[bi]);
            bi++;
        }
    }
    return result;
};
console.time();
console.log(solution());
console.timeEnd();
