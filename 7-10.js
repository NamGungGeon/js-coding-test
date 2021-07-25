const input = [[32], [23, 87, 65, 12, 57, 32, 99, 81]];

let iterCount = 0;
const solution = () => {
    const [m] = input[0];
    const arr = input[1];
    arr.sort();

    const find = (lt, rt) => {
        if (lt > rt) return -1;

        const mid = Math.round((rt + lt) / 2);
        const mv = arr[mid];
        if (mv < m) {
            //right
            return find(mid + 1, rt);
        } else if (mv > m) {
            //left
            return find(lt, mid - 1);
        } else {
            return mid + 1;
        }
    };

    return find(0, arr.length - 1);
};
console.time();
console.log(solution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
