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

    const moves = [-1, 1];
    const traverse = (i, j) => {
        if (i < 0 || j < 0 || i >= map.length || j >= map.length) {
            return;
        }
        if (map[i][j]) {
            moves.forEach((move) => {});
        }
    };
    const queue = [];
    let cnt = 0;
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
            iterCount++;
            if (map[i][j]) {
                console.log(i, j);
                //섬이 최초로 발견되었을 때 섬 카운팅 증가
                cnt++;
                queue.push([i, j]);
                map[i][j] = 0;
                //start explorer
                //근처에 있는 값이 1인 원소를 모두 0으로 바꾼다 (섬 제거)
                while (queue.length) {
                    iterCount++;
                    const [qi, qj] = queue.shift();
                    moves.forEach((move) => {
                        const [di, dj] = [move, move];
                        let pos = null;
                        if (qi + di >= 0 && qi + di < map.length) {
                            pos = map[qi + di][qj];
                            if (pos) {
                                queue.push([qi + di, qj]);
                                map[qi + di][qj] = 0;
                            }
                        }
                        if (qj + dj >= 0 && qj + dj < map.length) {
                            pos = map[qi][qj + dj];
                            if (pos) {
                                queue.push([qi, qj + dj]);
                                map[qi][qj + dj] = 0;
                            }
                        }
                        if (
                            qi + di >= 0 &&
                            qj - dj >= 0 &&
                            qi + di < map.length &&
                            qj - dj < map.length
                        ) {
                            pos = map[qi + di][qj - dj];
                            if (pos) {
                                queue.push([qi + di, qj - dj]);
                                map[qi + di][qj - dj] = 0;
                            }
                        }
                        if (
                            qi - di >= 0 &&
                            qj + dj >= 0 &&
                            qi - di < map.length &&
                            qj + dj < map.length
                        ) {
                            pos = map[qi - di][qj + dj];
                            if (pos) {
                                queue.push([qi - di, qj + dj]);
                                map[qi - di][qj + dj] = 0;
                            }
                        }
                    });
                }
            }
        }
    }
    return cnt;
};
console.time();
console.log(solution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
