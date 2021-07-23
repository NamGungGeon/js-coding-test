const input = ['()(((()())(())()))(())'];

const solution = () => {
    const a = input[0];

    let openCount = 0;
    let pieceCount = 0;
    a.split('').forEach((char, idx, str) => {
        if (char === '(') openCount++;
        else if (char === ')') {
            openCount--;
            if (str[idx - 1] === '(') {
                //razer!
                //start cutting
                pieceCount += openCount * 2;
            }
        }
    });

    return pieceCount;
};
console.time();
console.log(solution());
console.timeEnd();
