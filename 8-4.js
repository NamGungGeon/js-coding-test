//hard
const input = [3];

let iterCount = 0;
const solution = () => {
    const n = input[0];

    const dfs = (v, use, result = '') => {
        iterCount++;
        const nextResult = use ? result + ' ' + v : result;
        if (v === n) {
            console.log(nextResult);
            return;
        }

        //다음 원소가 포함된다(true), 포함되지 않는다(false)로 나눠 계속 연산
        dfs(v + 1, true, nextResult);
        dfs(v + 1, false, nextResult);
    };
    dfs(1, true);
    dfs(1, false);
};
console.time();
console.log(solution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
