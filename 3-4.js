const input = ["teachermode", "e"];

const solution = () => {
  const [str, targetChar] = input;
  const targetCharIndexes = [];
  str.split("").map((char, idx) => {
    if (char === targetChar) targetCharIndexes.push(idx);
  });

  return str.split("").map((char, idx) => {
    const distances = targetCharIndexes.map((tIdx) => {
      return Math.abs(tIdx - idx);
    });
    return Math.min(...distances);
  });
};
console.log(solution());
