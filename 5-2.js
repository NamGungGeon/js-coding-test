const input = [
    [1, 3, 9, 5, 2],
    [3, 2, 5, 7, 8],
];

const solution = () => {
    const [a, b] = input;
    const result = [];
    //my solution's time complexity is O(n^2)
    a.forEach((aValue) => {
        if (b.indexOf(aValue) !== -1) {
            result.push(aValue);
        }
    });
    return result.sort((v1, v2) => v1 - v2);
};

const fastSolution = () => {
    const [a, b] = input;
    a.sort((v1, v2) => v1 - v2);
    b.sort((v1, v2) => v1 - v2);

    const result = [];
    let ai = 0;
    let bi = 0;
    //fast solution's time complexity is O(n)
    while (ai < a.length && bi < b.length) {
        if (a[ai] === b[bi]) {
            result.push(a[ai]);
            ai++;
            bi++;
        } else if (a[ai] < b[bi]) {
            ai++;
        } else {
            bi++;
        }
    }
    return result;
};
console.time();
console.log(fastSolution());
console.timeEnd();
