const input = [1, 3, 5, 6, 7, 10];

let iterCount = 0;
const solution = () => {
    const arr = input;

    const results = [];
    const dfs = (depth, acc) => {
        iterCount++;

        if (depth === arr.length) {
            results.push(acc);
            return acc;
        }

        dfs(depth + 1, acc + arr[depth]);
        dfs(depth + 1, acc);
    };
    dfs(0, 0);

    let result = false;
    results.sort().forEach((acc, idx, arr) => {
        iterCount++;
        if (idx !== arr.length - 2 && acc === arr[idx + 1]) result = true;
    });

    return result;
};
console.time();
console.log(solution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
