// 01. 자리수의 합

// N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고,
// 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요.
// 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
// 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
// ▣ 입력설명
// 첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
// 각 자연수의 크기는 10,000,000를 넘지 않는다.
// ▣ 출력설명
// 자릿수의 합이 최대인 자연수를 출력한다.
// ▣ 입력예제 1
// 7
// 128 460 603 40 521 137 123
// ▣ 출력예제 1 137

// solve.1 (total array를 만들어 비교하기)
function solution1(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let maxIdx;
  let numArr = arr.map((el) => {
    let nums = String(el).split("");
    let total = nums.reduce((a, b) => Number(a) + Number(b));
    return total;
  });

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > max) {
      max = numArr[i];
      maxIdx = i;
    } else if (numArr[i] === max) {
      if (arr[i] > arr[maxIdx]) {
        max = numArr[i];
        maxIdx = i;
      }
    }
  }
  return arr[maxIdx];
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution1(arr));

// sovle.2 (for문 한번으로 끝내기 => 반복문 돌며 새로운 값을 만들지만 기존값은 유지되는 것을 이용)
function solution2(arr) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;
  for (let el of arr) {
    let sum = el
      .toString()
      .split("")
      .reduce((a, b) => a + parseInt(b), 0);
    if (sum > max) {
      max = sum;
      answer = el;
    } else if (sum === max) {
      if (el > answer) answer = el;
    }
  }
  return answer;
}

arr = [219, 128, 460, 603, 40, 521, 137, 123];
console.log(solution2(arr));
