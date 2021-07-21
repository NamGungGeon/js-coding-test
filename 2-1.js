const input = [7, 3, 9, 5, 6, 12];

const solution = () => {
  const results = [];
  input.forEach((value, index) => {
    if (index === 0) results.push(value);
    else {
      if (input[index - 1] < value) {
        results.push(value);
      }
    }
  });
  return results;
};
console.log(solution());
