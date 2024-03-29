// 05. 최대 매출

// 현수의 아빠는 제과점을 운영합니다.
// 현수 아빠는 현수에게 N일 동안의 매출기록을 주고 연속 된 K일 동안의 최대 매출액이 얼마인지 구하라고 했습니다.
// 만약 N=10이고 10일 간의 매출기록이 아래와 같습니다. 이때 K=3이면
// 12 15 11 20 25 10 20 19 13 15
// 연속된 3일간의 최대 매출액은 11+20+25=56만원입니다. 여러분이 현수를 도와주세요.
// ▣ 입력설명
// 첫 줄에 N(5<=N<=100,000)과 M(2<=K<=N)가 주어집니다.
// 두 번째 줄에 N개의 숫자열이 주어집니다. 각 숫자는 500이하의 음이 아닌 정수입니다.
// ▣ 출력설명
// 첫 줄에 최대 매출액을 출력합니다.
// ▣ 입력예제 1
// 10 3
// 12 15 11 20 25 10 20 19 13 15
// ▣ 출력예제 1 56

// solve.1 => O(n^2)
function solution1(K, arr) {
  let answer = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length - 2; i++) {
    let temp = arr[i];
    for (let j = 1; j < K; j++) {
      temp += arr[i + j];
    }
    if (temp >= answer) answer = temp;
  }

  return answer;
}

// solve.2 => review, O(n)
function solution2(k, arr) {
  let temp = arr.slice(0, k).reduce((acc, cur) => acc + cur);
  let answer = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length - k; i++) {
    temp = temp - arr[i] + arr[i + k];

    if (answer <= temp) answer = temp;
  }

  return answer;
}

let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution1(3, arr));
console.log(solution2(3, arr));
