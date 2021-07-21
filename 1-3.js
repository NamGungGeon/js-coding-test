const input = [13];

const solution = () => {
  const [students] = input;
  let requiredDas = students / 12;
  //   if (requiredDas > parseInt(requiredDas)) requiredDas = parseInt(requiredDas) + 1;
  //   return parseInt(requiredDas);
  return Math.ceil(requiredDas);
};
console.log(solution());
