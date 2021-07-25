//hard
const input = [[3], [1, 2, 8, 4, 9]];

let iterCount = 0;
const solution = () => {
    const [count] = input[0];
    const rooms = input[1].sort();

    let lt = 0;
    let rt = rooms[rooms.length - 1];
    let result = 0;
    while (lt <= rt) {
        //최소 떨어져야 하는 거리
        let mid = Math.round((lt + rt) / 2);
        let cnt = 0;
        let ep = 0;
        rooms.forEach((room, idx) => {
            iterCount++;
            if (!idx || room - rooms[ep] >= mid) {
                cnt++;
                ep = idx;
                console.log('put', room);
            }
        });
        console.log('[lt, rt], mid, cnt', [lt, rt], mid, cnt);

        if (cnt >= count) {
            result = mid;
            lt = mid + 1;
        } else {
            rt = mid - 1;
        }
        console.log('reuslt', result);
    }
    return result;
};
console.time();
console.log(solution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
