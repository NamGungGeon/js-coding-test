const input = ["teacher", "time", "student", "beautiful", "good"];

const solution = () => {
  const lengths = input.map((str) => str.length);
  const max = Math.max(...lengths);
  return input.find((str) => str.length === max);
};
console.log(solution());
