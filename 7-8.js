const input2 = [
    [3, 3],
    [1, 3],
    [2, 3],
];
const input = [
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
];

let iterCount = 0;
const solution = () => {
    let maxCnt = 0;
    input.sort((t1, t2) => {
        if (t1[1] === t2[1]) return t1[0] - t2[0];
        return t1[1] - t2[1];
    });
    input.forEach((_, idx) => {
        let currentEnd = 0;
        let count = 0;
        input.slice(idx).forEach((time) => {
            iterCount++;
            const [start, end] = time;
            if (currentEnd <= start) {
                currentEnd = end;
                count++;
            }
        });
        if (maxCnt < count) maxCnt = count;
    });
    return maxCnt;
};
const fastSolution = () => {
    input.sort((t1, t2) => {
        if (t1[1] === t2[1]) return t1[0] - t2[0];
        return t1[1] - t2[1];
    });

    let currentEnd = 0;
    let cnt = 0;
    input.forEach((time) => {
        const [start, end] = time;
        if (start >= currentEnd) {
            currentEnd = end;
            cnt++;
        }
        iterCount++;
    });
    return cnt;
};
console.time();
console.log(fastSolution());
console.timeEnd();
console.log('iter count', iterCount);
