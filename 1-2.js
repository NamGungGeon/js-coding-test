const input = [13, 33, 21];

const solution = () => {
  let max = 0;
  let sum = 0;
  input.forEach((value) => {
    if (max < value) max = value;
    sum += value;
  });
  sum -= max;
  if (sum - max > 0) {
    return "YES";
  } else {
    return "NO";
  }
};
console.log(solution());
