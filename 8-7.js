const input = [
    [20],
    [
        [10, 5],
        [25, 12],
        [15, 8],
        [6, 3],
        [7, 4],
    ],
];

let iterCount = 0;
const solution = () => {
    const [limit, exams] = input;

    let maxScore = Number.MIN_SAFE_INTEGER;
    const dfs = (depth, accTime, accScore) => {
        iterCount++;
        if (accTime > limit) return;
        if (depth === exams.length) {
            maxScore = Math.max(maxScore, accScore);
            return;
        }

        dfs(depth + 1, accTime + exams[depth][1], accScore + exams[depth][0]);
        dfs(depth + 1, accTime, accScore);
    };

    dfs(0, 0, 0);
    return maxScore;
};
console.time();
console.log(solution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
