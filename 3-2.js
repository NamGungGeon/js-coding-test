const input = ["found7, time: study; Yduts; emit, 7Dnuof"];

const solution = () => {
  const str = input[0].toLowerCase().replace(/[^a-zA-Z]/g, "");
  const result = str === str.split("").reverse().join("");
  return result ? "YES" : "NO";
};
console.log(solution());
