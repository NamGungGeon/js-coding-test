const input = ["KKHSSSSSSSE"];

const solution = () => {
  const [str] = input;
  let currentChar = null;
  let acc = 0;

  let result = "";
  str.split("").forEach((char) => {
    if (currentChar !== char) {
      if (currentChar) {
        result += currentChar;
        if (acc > 1) result += acc;
      }
      currentChar = char;
      acc = 1;
    } else {
      acc++;
    }
  });

  result += currentChar;
  if (acc > 1) result += acc;

  return result;
};
console.log(solution());
