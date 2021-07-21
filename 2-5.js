const input = [87, 89, 92, 100, 76];

const solution = () => {
  //Array.sort는 원형 값도 변형시킨다
  const sorted = input.slice().sort((i1, i2) => i2 - i1);
  return input.map((score) => {
    return sorted.indexOf(score) + 1;
  });
};
console.log(solution());
