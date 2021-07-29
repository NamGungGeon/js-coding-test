# js-coding-test

[인프런 강좌](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4)에서 제공하는 문제와 강의를 듣고 직접 작성한 답안을 저장합니다.

예시 답안에서처럼 html내에서 script태그를 사용하지 않고, nodejs 환경에서 실행했습니다.

코드 내에 문제 관련 파일은 없으며, 답안 작성 시 필요한 주석과 결과 코드만을 업로드합니다.

## 어려웠던/몰랐던 문제

어려웠던/몰랐던 문제는 코드 내에 주석으로 `//hard`를 입력했습니다.

해당 문제는 이 프로젝트의 루트에서 `grep -r 'hard' *.js` 커맨드를 이용해 찾아볼 수 있습니다

## 템플릿

답안의 반복 횟수와 실행 시간을 대략적으로 측정하기 위해 아래의 코드 템플릿을 사용했습니다.

```
const input = [];

let iterCount = 0;
const solution = () => {
    //your codes...
};
console.time();
console.log(solution());
console.timeEnd();
if (iterCount) console.log('iter count', iterCount);
```

필요한 경우 반복문 내에서 `iterCount++;`를 입력하여 반복 횟수를 확인할 수 있습니다.

또한 `solution()`의 결과를 출력하기 전, `console.time()`으로 측정을 시작하고, 출력 후 `console.timeEnd()`를 호출하여 실행 시간을 표시합니다.
