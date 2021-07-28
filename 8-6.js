const input = [[259], [81, 58, 42, 33, 61]];

let iterCount = 0;
const solution = () => {
    const [limit, weights] = input;

    let max = Number.MIN_SAFE_INTEGER;
    const dfs = (depth, acc) => {
        if (acc > limit) return;
        if (depth === weights.length) {
            if (max < acc) {
                max = acc;
            }
            return;
        }

        dfs(depth + 1, acc + weights[depth]);
        dfs(depth + 1, acc);
    };

    dfs(0, 0);
    return max;
};
console.time();
console.log(solution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
