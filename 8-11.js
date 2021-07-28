const input = [5];

let iterCount = 0;
const solution = () => {
    const dfs = (num) => {
        iterCount++;
        if (num === 1) return 1;
        return num * dfs(num - 1);
    };

    return dfs(input[0]);
};
console.time();
console.log(solution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
