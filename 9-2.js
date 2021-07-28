const input = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
];

let iterCount = 0;
const solution = (dest = 5) => {
    const paths = input;

    let cnt = 0;
    const currentPath = [];
    const dfs = (currentLocation) => {
        iterCount++;
        if (currentPath.indexOf(currentLocation) !== -1) {
            return;
        }
        currentPath.push(currentLocation);
        if (currentLocation === dest) {
            cnt++;
            console.log(currentPath);
            currentPath.pop();
            return;
        }

        paths.forEach((path) => {
            if (path[0] === currentLocation) {
                dfs(path[1]);
            }
        });
        currentPath.pop();
    };
    dfs(1);
    return cnt;
};
console.time();
console.log(solution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
