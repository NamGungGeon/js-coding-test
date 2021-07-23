const input = ['bacaAacba', 'abc'];

const solution = () => {
    const [a, b] = input;

    const bo = {};
    b.split('').forEach((char) => {
        if (!bo[char]) bo[char] = 0;
        bo[char]++;
    });

    const check = (str) => {
        const so = {};
        str.split('').forEach((char) => {
            if (!so[char]) so[char] = 0;
            so[char]++;
        });

        let result = true;
        [...Object.keys(bo), ...Object.keys(so)].forEach((char) => {
            if (bo[char] !== so[char]) result = false;
        });

        return result;
    };

    let result = 0;
    for (let l = 0; l < a.length; l++) {
        if (l + b.length - 1 >= a.length) break;

        const substring = a.substring(l, l + b.length);
        if (check(substring)) {
            result++;
        }
    }
    return result;
};
console.time();
console.log(solution());
console.timeEnd();
