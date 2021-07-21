const input = ["ItisTimeToStudy"];

const solution = () => {
  const [str] = input;
  return str
    .split("")
    .map((char) => {
      if (char >= "a" && char <= "z") return char.toUpperCase();
      return char;
    })
    .join("");
};
console.log(solution());
