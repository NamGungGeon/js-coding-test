//hard
const input = [4, 18];

let iterCount = 0;
const solution = () => {
    //파스칼의 삼각형은 가장 상위의 수에서
    //pos[0]*n-1C0+ pos[1]*n-1C1+ ...pos[n-1]*n-1Cn-1을 계산하여 가장 하위의 수가 출력된다.

    const [n, f] = input;
    const cache = Array(n)
        .fill(0)
        .map(() => {
            return Array(n).fill(0);
        });
    const nCr = (n, r) => {
        if (cache[n - 1][r - 1]) return cache[n - 1][r - 1];
        if (n === r || r === 0) return 1;
        if (r === 1) return n;
        return (cache[n - 1][r - 1] = nCr(n - 1, r - 1) + nCr(n - 1, r));
    };

    const used = Array(n).fill(0);
    const arr = Array(n).fill(0);
    let found = false;
    const dfs = (depth = 0, sum = 0) => {
        if (found) return;
        iterCount++;
        if (depth === n) {
            if (sum === f) {
                console.log('found!', arr);
                found = true;
            }
            return;
        }

        for (let l = 1; l <= n; l++) {
            if (!used[l - 1]) {
                used[l - 1] = 1;
                arr[depth] = l;
                dfs(depth + 1, sum + l * nCr(n - 1, depth));
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
