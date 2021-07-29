const input = [7];

let iterCount = 0;
const solution = () => {
    const [n] = input;
    const answers = Array(n + 1).fill(0);
    answers[1] = 1;
    answers[2] = 2;
    for (let l = 3; l <= n; l++) {
        iterCount++;
        answers[l] = answers[l - 2] + answers[l - 1] + 1;
    }

    return answers[n] + 1;
};
const alterSolution = () => {
    const [n] = input;
    //돌다리가 하나 더 있다고 생각하고 접근한다
    const answers = Array(n + 2).fill(0);
    answers[1] = 1;
    answers[2] = 2;
    for (let l = 3; l <= n + 1; l++) {
        iterCount++;
        answers[l] = answers[l - 2] + answers[l - 1];
    }
    return answers[n + 1];
};
console.time();
console.log(alterSolution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
