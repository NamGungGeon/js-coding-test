const input = [10];

let iterCount = 0;
const solution = () => {
    const [n] = input;
    const printRecursively = (num) => {
        iterCount++;
        if (num < 1) {
            return;
        }
        printRecursively(num - 1);
        console.log(num);
    };
    printRecursively(n);
};
console.time();
console.log(solution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
