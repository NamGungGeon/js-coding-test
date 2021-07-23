const input = ['CBA', 'CBDAGE'];

const solution = () => {
    let [a, b] = input;
    let valid = true;
    b.split('').every((cls) => {
        if (a.length) {
            const aIndex = a.indexOf(cls);
            if (aIndex > 0) {
                valid = false;
            } else if (aIndex === 0) {
                a = a.substring(1);
            }
            return true;
        }
        return false;
    });
    return valid;
};
console.time();
console.log(solution());
console.timeEnd();
