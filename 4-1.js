const input = [128, 460, 603, 40, 521, 137, 123];

const solution = () => {
  const sums = input.map((num) => {
    return [
      num,
      num
        .toString()
        .split("")
        .reduce((acc, nc) => {
          return acc + parseInt(nc);
        }, 0),
    ];
  });
  const sorted = sums.sort((s1, s2) => s2[1] - s1[1]);
  if (sorted[0][1] === sorted[1][1]) {
    const removeExceptMaxLength = sorted.filter((s) => s[1] === sorted[0][1]).sort((s1, s2) => s2[0] - s1[0]);
    return removeExceptMaxLength[0][0];
  } else {
    return sorted[0][0];
  }
};
const fastSolution = () => {
  let maxSum = 0;
  let result = 0;
  input.forEach((num) => {
    let temp = num;
    let sum = 0;
    while (temp) {
      sum += temp % 10;
      temp = Math.trunc(temp / 10);
    }
    if (maxSum < sum || result < num) {
      maxSum = sum;
      result = num;
    }
  });
  return result;
};
console.log(fastSolution());
