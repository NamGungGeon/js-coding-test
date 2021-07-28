//hard
const input = [4, 2];

let iterCount = 0;
const solution = () => {
    const [n, m] = input;

    const arr = Array(m).fill(0);
    const used = arr.slice();
    const dfs = (depth = 0) => {
        if (depth === n) {
            console.log(arr);
            return;
        }

        for (let l = 1; l <= n; l++) {
            if (!used[l - 1]) {
                used[l - 1] = 1;
                arr[depth] = l;
                dfs(depth + 1);
                used[l - 1] = 0;
            }
        }
    };
    dfs();
};
console.time();
console.log(solution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
