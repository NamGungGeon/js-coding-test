const input = [
    [10, 3],
    [13, 15, 34, 23, 45, 65, 33, 11, 26, 42],
];

const solution = () => {
    const [_, k] = input[0];
    const cards = input[1].sort((c1, c2) => c2 - c1);
    const results = [];

    for (let i = 0; i < cards.length; i++) {
        for (let j = i + 1; j < cards.length; j++) {
            for (let h = j + 1; h < cards.length; h++) {
                const sum = cards[i] + cards[j] + cards[h];
                if (results.indexOf(sum) === -1) results.push(sum);

                if (results.length === k) return results[k - 1];
            }
        }
    }

    return 0;
};
console.time();
console.log(solution());
console.timeEnd();
