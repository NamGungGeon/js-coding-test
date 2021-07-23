const input = [
    [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 3],
        [0, 2, 5, 0, 1],
        [4, 2, 4, 4, 2],
        [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4],
];

const solution = () => {
    const [board, moves] = input;
    const boardSize = board.length;
    let busket = [];
    let comboCount = 0;
    moves.forEach((move) => {
        let depth = boardSize;
        let hold = 0;
        for (let l = 0; l < depth; l++) {
            if (board[l][move - 1]) {
                hold = board[l][move - 1];
                board[l][move - 1] = 0;
                break;
            }
        }
        if (hold) {
            console.log(board, busket, hold);
            if (busket[busket.length - 1] === hold) {
                comboCount += 2;
                busket.splice(busket.length - 1, 1);
                console.log('boom!');
            } else {
                busket.push(hold);
            }
        }
    });
    return comboCount;
};
console.time();
console.log(solution());
console.timeEnd();
