const input = ["g0en2T0s8eSoft"];

const solution = () => {
  const str = input[0].replace(/[^\d]/g, "");
  return parseInt(str);
};
console.log(solution());
