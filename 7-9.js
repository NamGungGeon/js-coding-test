const input = [
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
];

let iterCount = 0;
const solution = () => {
    let endIdx = 0;
    let cnt = 0;
    let maxCnt = 0;
    input
        .sort((t1, t2) => {
            iterCount++;
            if (t1[0] === t2[0]) return t1[1] - t2[1];
            return t1[0] - t2[0];
        })
        .forEach((time, _, times) => {
            const [start, end] = time;
            cnt++;
            while (endIdx < input.length && start >= times[endIdx][1]) {
                iterCount++;
                endIdx++;
                cnt--;
            }
            maxCnt = Math.max(maxCnt, cnt);
        });
    return maxCnt;
};
function alternativeSolution() {
    const times = input;
    let answer = Number.MIN_SAFE_INTEGER;
    let T_line = [];
    for (let x of times) {
        iterCount++;
        T_line.push([x[0], 's']);
        T_line.push([x[1], 'e']);
    }
    T_line.sort((a, b) => {
        iterCount++;
        //시간에 맞춰 정렬하되, 동일할 경우 떠나는 시간을 앞으로 배치한다
        if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
        else return a[0] - b[0];
    });
    let cnt = 0;
    for (let x of T_line) {
        iterCount++;
        if (x[1] === 's') cnt++;
        else cnt--;
        answer = Math.max(answer, cnt);
    }
    return answer;
}
console.time();
console.log(solution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
