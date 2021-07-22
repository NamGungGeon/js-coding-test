const input = [
    [5, 28],
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
];

const solution = () => {
    const [studentCount, money] = input[0];
    input.splice(0, 1);
    const gifts = input.sort((g1, g2) => {
        return g1[0] + g1[1] - (g2[0] + g2[1]);
    });

    let count = 0;
    let currentMoney = 0;
    gifts.every((gift) => {
        const [price, ship] = gift;
        if (currentMoney + price + ship <= money) {
            count++;
            currentMoney += price + ship;
        } else if (currentMoney + price / 2 + ship <= money) {
            count++;
            currentMoney += price / 2 + ship;
        } else {
            return false;
        }
        return true;
    });
    return count;
};
console.time();
console.log(solution());
console.timeEnd();
