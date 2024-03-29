// 03. 연속 부분 수열_1

// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
// 만약 N=8, M=6이고 수열이 다음과 같다면
// 12131112
// 합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.
// ▣ 입력설명
// 첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다. 수열의 원소값은 1,000을 넘지 않는 자연수이다.
// ▣ 출력설명
// 첫째 줄에 경우의 수를 출력한다.
// ▣ 입력예제 1 86 12131112
// ▣ 출력예제 1 3

function solution1(k, arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    for (let j = i; j < arr.length; j++) {
      temp += arr[j];
      if (temp === k) answer++;
      else if (temp > k) break;
    }
    // console.log("1", temp);
  }
  return answer;
}

// solve.2 review => n^2 algorithm
function solution2(k, arr) {
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    for (let j = i; j < arr.length; j++) {
      temp += arr[j];
      if (temp > k) break;
      else if (temp === k) {
        answer++;
        break;
      }
    }
    if (temp < k) break;
    // console.log("2", temp);
  }
  return answer;
}

// solve.3 review => n algorithm
function solution3(k, arr) {
  let answer = 0;
  let sum = arr[0];
  let start = 0;
  let end = 0;

  while (end < arr.length) {
    if (sum < k) {
      sum += arr[end++];
    }
    if (sum > k) {
      sum -= arr[start++];
    }
    if (sum === k) {
      answer++;
      sum -= arr[start++];
    }
  }
  return answer;
}

function solution4(m, arr) {
  let answer = 0,
    lt = 0,
    sum = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

let k = 6;
let arr = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution1(k, arr));

console.time("2");
console.log(solution2(k, arr));
console.timeEnd("2");

console.time("3");
console.log(solution3(k, arr));
console.timeEnd("3");

console.time("4");
console.log(solution4(k, arr));
console.timeEnd("4");
