//hard

const input = [
    [9, 3],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
];

let iterCount = 0;
const solution = () => {
    const [_, m] = input[0];
    const musics = input[1];

    const findMin = (lt, rt) => {
        console.log(lt, rt);
        const mid = Math.round((lt + rt) / 2);
        if (lt >= rt) return mid;
        let count = 1;
        let capacity = 0;
        musics.forEach((music) => {
            if (capacity + music > mid) {
                count++;
                capacity = music;
            } else {
                capacity += music;
            }
        });

        if (count <= m) {
            return findMin(lt, mid - 1);
        } else {
            return findMin(mid + 1, rt);
        }
    };
    const musicsSum = musics.reduce((acc, music) => acc + music, 0);
    let [lt, rt] = [Math.max(...musics), musicsSum];

    return findMin(lt, rt);
};
console.time();
console.log(solution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
