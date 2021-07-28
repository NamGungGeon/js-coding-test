const input = [33, 19];

let iterCount = 0;
//use cache: 7ms
//faster then 500times as no cache solution
const solution = () => {
    const [N, R] = input;
    const cache = Array(N)
        .fill(0)
        .map((_n) => Array(R).fill(0));
    const nCr = (n, r) => {
        if (cache[n - 1][r - 1]) return cache[n - 1][r - 1];
        if (n === r) {
            return 1;
        }
        if (r === 1) {
            return n;
        }
        return (cache[n - 1][r - 1] = nCr(n - 1, r - 1) + nCr(n - 1, r));
    };

    return nCr(N, R);
};
//no cache: 3s
const slowSolution = () => {
    const [N, R] = input;
    const nCr = (n, r) => {
        if (n === r) {
            return 1;
        }
        if (r === 1) {
            return n;
        }
        //use cache
        return nCr(n - 1, r - 1) + nCr(n - 1, r);
    };

    return nCr(N, R);
};
function alterSolution(n = input[0], r = input[1]) {
    let answer = [];
    let dy = Array.from(Array(35), () => Array(35).fill(0));

    function DFS(n, r) {
        if (dy[n][r] > 0) return dy[n][r];
        if (n === r || r === 0) return 1;
        else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
    }
    answer = DFS(n, r);
    return answer;
}
console.time();
console.log(slowSolution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
