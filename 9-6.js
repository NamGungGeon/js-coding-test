//hard

const input = [8, 3283];

let iterCount = 0;
const solution = () => {
    const [s, e] = input;
    let cnt = 0;
    const queue = [s];
    const checks = Array(10000).fill(0);
    while (queue.length) {
        const length = queue.length;
        for (let l = 0; l < length; l++) {
            const loc = queue.shift();
            if (loc === e) {
                return cnt;
            }
            for (let nextLoc of [loc + 1, loc + 5, loc - 1]) {
                //checks[nextLoc-1] 비교 추가 시 iterCount가 1089-> 81로 급격히 줄어듦
                //좌표의 범위는 1~10000이므로 그 밖은 검사할 필요가 없다
                if (!checks[nextLoc - 1] && nextLoc <= 10000) {
                    queue.push(nextLoc);
                    checks[nextLoc - 1] = true;
                }
                iterCount++;
            }
        }
        cnt++;
    }
    return cnt;
};
console.time();
console.log(solution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
