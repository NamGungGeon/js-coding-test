const input = ["StuDY"];

const solution = () => {
  const [str] = input;
  return str
    .split("")
    .map((char) => {
      if (char >= "A" && char <= "Z") return char.toLowerCase();
      else if (char >= "a" && char <= "z") return char.toUpperCase();
      return char;
    })
    .join("");
};
console.log(solution());
