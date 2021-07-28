//hard

const input = [3, 2];

let iterCount = 0;
const solution = () => {
    const [n, m] = input;
    const results = [];
    let cnt = 0;
    const dfs = (start = 0, acc = []) => {
        iterCount++;
        if (acc.length === m) {
            console.log(acc);
            cnt++;
            return;
        }
        if (start > n) return;

        for (let l = 1; l <= n; l++) {
            dfs(start + 1, [...acc, l]);
        }
    };
    dfs();
    return cnt;
};
const alterSolution = () => {
    const [n, m] = input;
    const results = Array(m).fill(0);
    let cnt = 0;

    const dfs = (idx) => {
        if (idx === m) {
            cnt++;
            console.log(results);
            return;
        }
        for (let l = 1; l <= n; l++) {
            results[idx] = l;
            dfs(idx + 1);
        }
    };

    dfs(0);
    return cnt;
};
console.time();
console.log(alterSolution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
