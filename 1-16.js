const input = ["ksekkset"];

const solution = () => {
  const [str] = input;
  const used = [];
  return str
    .split("")
    .map((char) => {
      if (used.indexOf(char) !== -1) return "";
      else {
        used.push(char);
        return char;
      }
    })
    .join("");
};
console.log(solution());
