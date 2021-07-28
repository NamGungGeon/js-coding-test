const input = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
];

let iterCount = 0;
const solution = (size = 7) => {
    const maze = input;

    let cnt = 0;
    const dfs = (i, j) => {
        iterCount++;
        if (j === size - 1 && i === size - 1) {
            cnt++;
            return;
        }
        maze[i][j] = 1;
        if (i + 1 < size && !maze[i + 1][j]) {
            dfs(i + 1, j);
        }
        if (i - 1 >= 0 && !maze[i - 1][j]) {
            dfs(i - 1, j);
        }
        if (j + 1 < size && !maze[i][j + 1]) {
            dfs(i, j + 1);
        }
        if (j - 1 >= 0 && !maze[i][j - 1]) {
            dfs(i, j - 1);
        }
        maze[i][j] = 0;
    };

    dfs(0, 0);
    return cnt;
};
console.time();
console.log(solution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
