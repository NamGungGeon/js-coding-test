const input = ["good", "time", "good", "time", "student"];

const solution = () => {
  const used = [];

  return input
    .map((str) => {
      if (used.indexOf(str) !== -1) return null;
      else {
        used.push(str);
        return str;
      }
    })
    .filter((str) => str);
};
console.log(solution());
