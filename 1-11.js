const input = ["KoreaTimeGood"];

const solution = () => {
  const [str] = input;
  return str.split("").reduce((acc, char) => {
    if (char >= "A" && char <= "Z") return acc + 1;
    return acc;
  }, 0);
};
console.log(solution());
