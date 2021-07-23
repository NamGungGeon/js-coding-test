const input = ['BACBACCACCBDEDE'];

const solution = () => {
    const votes = input[0];
    const result = {};
    votes.split('').forEach((vote) => {
        if (!result[vote]) result[vote] = 0;

        result[vote]++;
    });

    let selected = null;
    let max = 0;
    Object.keys(result).forEach((candi) => {
        if (result[candi] > max) {
            max = result[candi];
            selected = candi;
        }
    });

    return selected;
};
console.time();
console.log(solution());
console.timeEnd();
