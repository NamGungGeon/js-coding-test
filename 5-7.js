const input = ['abaCC', 'Caaab'];

const solution = () => {
    const [a, b] = input;
    const ao = {};
    const bo = {};
    a.split('').forEach((char) => {
        if (!ao[char]) ao[char] = 0;
        ao[char]++;
    });
    b.split('').forEach((char) => {
        if (!bo[char]) bo[char] = 0;
        bo[char]++;
    });

    let result = true;
    [...Object.keys(bo), ...Object.keys(ao)].forEach((char) => {
        if (ao[char] !== bo[char]) result = false;
    });
    return result;
};
console.time();
console.log(solution());
console.timeEnd();
