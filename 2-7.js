const input = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

const solution = () => {
  let result = 0;
  for (let l = 0; l < input.length; l++) {
    for (let k = 0; k < input[l].length; k++) {
      const current = input[l][k];
      let isPoint = true;
      if (l > 0 && input[l - 1][k] >= current) {
        isPoint = false;
      }
      if (l < input.length - 2 && input[l + 1][k] >= current) {
        isPoint = false;
      }
      if (k > 0 && input[l][k - 1] >= current) {
        isPoint = false;
      }
      if (k < input[l].length - 2 && input[l][k + 1] >= current) {
        isPoint = false;
      }

      if (isPoint) result++;
    }
  }
  return result;
};
console.log(solution());
