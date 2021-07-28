const input = [7];

let iterCount = 0;
const solution = () => {
    const [n] = input;
    const queue = [];
    let weight = 0;
    for (let l = 1; l <= n; l++) {
        queue.push(l);
        if (Math.pow(2, weight) === queue.length) {
            weight++;
            while (queue.length) {
                console.log(queue.shift());
            }
        }
    }
};
console.time();
console.log(solution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
