const input = [130, 135, 148, 140, 145, 150, 150, 153];

const solution = () => {
  let currentMax = 0;
  let count = 0;
  input.forEach((value, idx) => {
    if (currentMax < value) {
      currentMax = value;
      count++;
    }
  });
  return count;
};
console.log(solution());
