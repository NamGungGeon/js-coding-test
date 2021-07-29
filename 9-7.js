//hard
const input = [
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
];

let iterCount = 0;
const solution = () => {
    const map = input;

    let cnt = 0;
    const moves = [-1, 1];
    //지정된 좌표에서 상하좌우, 대각선에 1인 값이 있다면 전부 0으로 바꿈
    const dfs = (i = 0, j = 0) => {
        iterCount++;
        if (i < 0 || j < 0 || i >= map.length || j >= map.length) {
            return;
        }

        const current = map[i][j];
        if (!current) return;
        map[i][j] = 0;

        moves.map((move) => {
            dfs(i + move, j, current);
            dfs(i + move, j + move, current);
            dfs(i + move, j - move, current);
            dfs(i, j + move, current);
        });
    };

    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
            iterCount++;
            if (map[i][j]) {
                dfs(i, j);
                cnt++;
            }
        }
    }

    return cnt;
};
console.time();
console.log(solution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
