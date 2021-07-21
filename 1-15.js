const input = ["stud"];

const solution = () => {
  const [str] = input;
  const target = Math.trunc(str.length / 2);
  if (str.length % 2) {
    //odd
    return str[target];
  } else {
    //even
    return str[target - 1] + str[target];
  }
};
console.log(solution());
