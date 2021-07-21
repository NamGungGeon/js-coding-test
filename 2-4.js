const input = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

const solution = () => {
  let score = 0;
  let acc = 0;
  input.forEach((value) => {
    if (value) {
      acc += 1;
      score += acc;
    } else {
      acc = 0;
    }
  });
  return score;
};
console.log(solution());
