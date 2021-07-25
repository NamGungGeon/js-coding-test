const input = [1, 2, 3, -3, -2, 5, 6, -6];

const solution = () => {
    const pos = [];
    const neg = [];
    input.forEach((num) => {
        if (num > 0) {
            pos.push(num);
        } else {
            neg.push(num);
        }
    });
    return [...neg, ...pos];
};
console.time();
console.log(solution());
console.timeEnd();
