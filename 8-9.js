const input = [[1, 2, 5], [15]];

let iterCount = 0;
const solution = () => {
    const [coins] = input;
    //내림차순 정렬
    coins.sort((c1, c2) => c2 - c1);
    const [money] = input[1];

    let minCnt = Number.MAX_SAFE_INTEGER;
    const dfs = (depth = 0, coinCnt = 0, lastMoney = money) => {
        iterCount++;
        if (lastMoney === 0) {
            minCnt = Math.min(coinCnt, minCnt);
            return coinCnt;
        }
        if (lastMoney < 0) {
            return Number.MAX_SAFE_INTEGER;
        }

        for (let l = 0; l < coins.length; l++) {
            dfs(depth + 1, coinCnt + 1, lastMoney - coins[l]);
        }
    };

    dfs();
    return minCnt;
};
console.time();
console.log(solution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
