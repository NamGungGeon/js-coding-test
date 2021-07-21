const input = [32, 55, 62, 20, 250, 370, 200, 30, 100];

//어떤 수의 소수 판별 시 2부터 그 수의 제곱근까지만 나누어 떨어지는지 확인하면 된다
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  //2도 소수이다
  for (let l = 2; l < parseInt(Math.sqrt(num)); l++) {
    if (num % l === 0) return false;
  }
  return true;
};
const solution = () => {
  const result = [];

  input.forEach((num) => {
    let reverseNum = 0;
    while (num) {
      reverseNum *= 10;
      reverseNum += num % 10;
      num = Math.trunc(num / 10);
    }

    //check
    if (isPrime(reverseNum)) result.push(reverseNum);
  });
  return result;
};
console.log(solution());
