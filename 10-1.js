//hard
const input = [45];

let iterCount = 0;
//dfs로 풀면 n=45일때 약 1분이 걸린다...
const solution = () => {
    const [n] = input;
    let cnt = 0;
    const dfs = (acc = 0) => {
        iterCount++;
        if (acc === n) {
            cnt++;
            return;
        }
        if (acc > n) {
            return;
        }

        dfs(acc + 1);
        dfs(acc + 2);
    };
    dfs();
    return cnt;
};

//그러나 dp를 사용하면 n=65일 때도 약 8ms만에 끝낼 수 있다
//점화식을 찾아내는 것이 중요하다
const dpSolution = () => {
    const [n] = input;

    const answers = Array(n).fill(0);
    answers[0] = 1;
    answers[0] = 2;

    for (let i = 2; i < n; i++) {
        answers[i] = answers[i - 1] + answers[i - 2];
    }
    return answers[n - 1];
};
console.time();
console.log(dpSolution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
