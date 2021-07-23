const input = [[8, 3]];

const solution = () => {
    const [n, k] = input[0];
    let number = 1;
    let princes = Array(n)
        .fill(0)
        .map((_, idx) => idx + 1);
    console.log(princes);
    let princeIndex = 0;

    while (princes.length !== 1) {
        if (princeIndex === princes.length) {
            princeIndex = 0;
        }
        if (number === k) {
            console.log('kickoff', princes[princeIndex]);
            princes.splice(princeIndex, 1);
            number = 1;
            continue;
        }
        number++;
        princeIndex++;
    }

    return princes[0];
};
console.time();
console.log(solution());
console.timeEnd();
