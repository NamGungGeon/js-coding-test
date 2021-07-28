const input = [65];

let iterCount = 0;
const solution = () => {
    const [n] = input;

    //11=> limit is 3
    let limit = parseInt(Math.log2(n));
    let num = n;
    const calc = (str = '') => {
        if (limit < 0) {
            return str;
        }
        if (num >= Math.pow(2, limit)) {
            str += '1';
            num -= Math.pow(2, limit);
        } else {
            str += '0';
        }
        limit--;
        return calc(str);
    };

    return calc();
};
console.time();
console.log(solution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
