//hard

const input = [20, 7, 23, 19, 10, 15, 25, 8, 13];
const solution = () => {
  let sum = input.reduce((acc, value) => acc + value, 0);
  let validSum = 100;
  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (sum - (input[i] + input[j]) === validSum) {
        //find!
        return input.filter((_, idx) => idx !== i && idx !== j);
      }
    }
  }
  //not found
};
console.log(solution());
