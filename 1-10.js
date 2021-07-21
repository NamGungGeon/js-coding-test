const input = ["COMPUTERPROGRAMMING", "R"];

const solution = () => {
  const [str, char] = input;
  return str.split("").reduce((acc, c) => {
    if (c === char) return acc + 1;
    return acc;
  }, 0);
};
console.log(solution());
