//hard

const input = [
  [2, 3, 3, 1, 3],
  [1, 1, 2, 2, 3],
];

const solution = () => {
  const [a, b] = input;
  const results = [];
  for (let l = 0; l < a.length; l++) {
    if (a[l] === b[l]) {
      results.push("D");
    } else {
      //decision...
      if (a[l] === 1 && b[l] === 3) results.push("A");
      else if (a[l] === 2 && b[l] === 1) results.push("A");
      else if (a[l] === 3 && b[l] === 2) results.push("A");
      else results.push("B");
    }
  }
  return results.join("");
};
console.log(solution());
