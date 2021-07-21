const input = ["BANANA"];

const solution = () => {
  const [str] = input;
  //   return str.replace(/A/gi, "#");
  return str
    .split("")
    .map((c) => (c === "A" ? "#" : c))
    .join("");
};
console.log(solution());
