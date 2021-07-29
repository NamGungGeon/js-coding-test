//hard
const input = [5, 3, 7, 8, 6, 2, 9, 4];

let iterCount = 0;
const solution = () => {
    const answers = Array(input.length).fill(0);
    for (let i = 0; i < answers.length; i++) {
        let length = 0;
        for (let j = i - 1; j >= 0; j--) {
            if (input[i] > input[j] && answers[j] > length) {
                length = answers[j];
            }
        }
        answers[i] = length + 1;
    }
    console.log(answers);
    return Math.max(...answers);
};
console.time();
console.log(solution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
