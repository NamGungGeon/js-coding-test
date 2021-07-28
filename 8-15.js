const input = [[5, 3], [2, 4, 5, 8, 12], [6]];

let iterCount = 0;
const solution = () => {
    const [n, k] = input[0];
    const arr = input[1];
    const [m] = input[2];

    let ok = 0;
    const dfs = (depth, sum, cnt) => {
        if (depth === n || cnt === k) {
            if ((cnt === k && sum % m) === 0) ok++;
            return;
        }

        dfs(depth + 1, sum + arr[depth], cnt + 1);
        dfs(depth + 1, sum, cnt);
    };
    dfs(0, 0, 0);

    return ok;
};
console.time();
console.log(solution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
