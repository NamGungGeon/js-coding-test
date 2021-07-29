//hard
const input = [[1, 2, 5], 15];

let iterCount = 0;
const solution = () => {
    const [coins, target] = input;
    const answers = Array(target + 1).fill(Number.MAX_SAFE_INTEGER);
    answers[0] = 0;
    for (let i = 1; i < answers.length; i++) {
        //answers[i]는 i원을 거슬러주는데 필요한 동전의 갯수
        for (let j = 0; j < coins.length; j++) {
            const coin = coins[j];
            if (i >= coin) {
                const coinCountExceptCurrent = answers[i - coins[j]] + 1;
                answers[i] = Math.min(coinCountExceptCurrent);
            }
        }
    }
    console.log(answers);
    return answers[target];
};
console.time();
console.log(solution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
