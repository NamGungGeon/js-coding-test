const input = ['(()(()))(()'];

const solution = () => {
    const brakets = input[0].split('');
    let openCount = 0;

    let result = true;
    brakets.forEach((braket) => {
        if (braket === '(') openCount++;
        else if (braket === ')') openCount--;

        if (openCount < 0) {
            result = false;
        }
    });

    return result && !openCount;
};
console.time();
console.log(solution());
console.timeEnd();
