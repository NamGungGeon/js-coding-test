const input = [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
];

let iterCount = 0;
const solution = (limit = 20) => {
    const exams = input;
    //answers의 첨자는 걸린 시간이고
    //그 첨자에 해당하는 값은 그 시간 내에 얻을 수 있는 점수의 최대값이다
    const answers = Array(limit + 1).fill(0);

    for (let i = 1; i < answers.length; i++) {
        for (let j = 0; j < exams.length; j++) {
            iterCount++;
            const [score, time] = exams[j];
            
            //현재 문제가 5분이 걸리는 문제라면
            //걸린 시간(i)에서 5분을 i-5 위치의 answers 값과 현재 문제의 점수값을 더한 값을 더하고
            //그 값과 기존의 answers[i]의 값을 비교해 더 큰값으로 갱신한다
            if (i - time >= 0)
                answers[i] = Math.max(answers[i], answers[i - time] + score);
        }
    }

    console.log('answers', answers);
    //answers는 각 시간마다 얻을 수 있는 점수의 최대값을 가지고 있으므로,
    //Math.max(...answers)하면 주어진 시간 내에서 얻을 수 있는 점수의 최대값이 된다.
    return Math.max(...answers);
};
console.time();
console.log(solution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
