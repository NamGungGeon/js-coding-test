//hard

const input = ['352+*9-'];

const solution = () => {
    const postfix = input[0];

    const numbers = [];
    postfix.split('').forEach((value) => {
        if (isNaN(value)) {
            let result = 0;
            const rt = numbers.pop();
            const lt = numbers.pop();
            switch (value) {
                case '+':
                    result = lt + rt;
                    break;
                case '-':
                    result = lt - rt;
                    break;
                case '*':
                    result = lt * rt;
                    break;
                case '/':
                    result = lt / rt;
                    break;
            }
            numbers.push(result);
        } else {
            numbers.push(parseInt(value));
        }
        console.log(numbers);
    });
    return numbers.pop();
};
console.time();
console.log(solution());
console.timeEnd();
