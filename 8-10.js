const input = [
    [3, 2],
    [3, 6, 9],
];

let iterCount = 0;
const solution = () => {
    const [[n, m], nums] = input;
    let cnt = 0;

    const dfs = (depth = 0, lasts = nums, acc = []) => {
        iterCount++;
        if (lasts.length + m === nums.length) {
            cnt++;
            console.log(acc);
            return;
        }
        if (depth === n) return;

        for (let l = 0; l < lasts.length; l++) {
            const nextLasts = lasts.slice();
            nextLasts.splice(l, 1);
            dfs(depth + 1, nextLasts, [...acc, lasts[l]]);
        }
    };
    dfs();
    return cnt;
};
console.time();
console.log(solution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
