const input = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

const solution = () => {
  const maxRow = Math.max(...input.map((row) => row.reduce((acc, val) => acc + val, 0)));
  const maxCol = Math.max(
    ...input.map((row, idx) => {
      const sumCol = input
        .map((_row) => {
          return _row[idx];
        })
        .reduce((acc, sum) => acc + sum, 0);
      return sumCol;
    })
  );
  let lineSum1 = 0;
  let lineSum2 = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (i == j) lineSum1 += input[i][j];
      else if (i + j + 1 === input.length) lineSum2 += input[i][j];
    }
  }
  const results = [maxRow, maxCol, lineSum1, lineSum2];
  return Math.max(...results);
};
console.log(solution());
