const input = [12, 77, 38, 41, 53, 92, 85];

const solution = () => {
  const odds = input.filter((v) => v % 2 !== 0);
  let sum = 0;
  odds.forEach((v) => {
    sum += v;
  });
  let min = Math.min(...odds);
  console.log(sum);
  console.log(min);
};
console.log(solution());
