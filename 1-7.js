const input = [[0], [12, 20, 54, 30, 87, 91, 30]];

const solution = () => {
  const day = input[0][0] % 10;
  const cars = input[1];

  const invalids = cars.filter((car) => car % 10 === day);
  return invalids.length;
};
console.log(solution());
