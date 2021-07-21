const input = ["gooG"];

const solution = () => {
  const str = input[0].toLowerCase();

  //   const result = str === str.split("").reverse().join("");
  //   return result ? "YES" : "NO";

  for (let l = 0; l < Math.floor(str.length / 2); l++) {
    if (str[l] !== str[str.length - 1 - l]) return "NO";
  }
  return "YES";
};
console.log(solution());
