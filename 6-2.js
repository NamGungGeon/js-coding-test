const input = ['(A(BC)D)EF(G(H)(IJ)K)LM(N)'];

const solution = () => {
    const str = input[0];

    let openCount = 0;
    let result = '';
    str.split('').forEach((char) => {
        if (char === '(') {
            openCount++;
        } else if (char === ')') {
            openCount--;
        } else {
            if (!openCount) {
                result += char;
            }
        }
    });

    return result;
};
console.time();
console.log(solution());
console.timeEnd();
