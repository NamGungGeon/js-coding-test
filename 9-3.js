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
const solution = (n = 5, dest = 5) => {
    const paths = input;
    const info = Array(n)
        .fill(0)
        .map(() => {
            return [];
        });

    paths.forEach((path) => {
        const [s, d] = path;
        info[s - 1].push(d);
    });
    console.log(info);
    let cnt = 0;

    let visited = Array(n).fill(0);
    let history = [];
    const dfs = (source) => {
        iterCount++;
        history.push(source);
        if (source === dest) {
            console.log(history);
            history.pop();
            cnt++;
            return;
        }
        const avaliables = info[source - 1].filter((d) => {
            return !visited[d - 1];
        });
        console.log('status', source, visited);
        avaliables.forEach((d, idx) => {
            visited[d - 1] = 1;
            dfs(d);
            visited[d - 1] = 0;
        });
        history.pop();
    };
    visited[0] = 1;
    dfs(1);
    return cnt;
};
console.time();
console.log(solution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
