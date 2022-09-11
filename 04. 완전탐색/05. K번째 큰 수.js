// 05. K번째 큰 수

// 현수는 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있습니다.
// 같은 숫자의 카드가 여러장 있을 수 있습니다. 현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려 고 합니다.
// 3장을 뽑을 수 있는 모든 경우를 기록합니다. 기록한 값 중 K번째로 큰 수를 출력 하는 프로그램을 작성하세요.
// 만약 큰 수부터 만들어진 수가 25 25 23 23 22 20 19......이고 K값이 3이라면 K번째 큰 값 은 22입니다.
// ▣ 입력설명
// 첫 줄에 자연수 N(3<=N<=100)과 K(1<=K<=50) 입력되고, 그 다음 줄에 N개의 카드값이 입력 된다.
// ▣ 출력설명
// 첫 줄에 K번째 수를 출력합니다. K번째 수는 반드시 존재합니다.
// ▣ 입력예제 1
// 10 3
// 13 15 34 23 45 65 33 11 26 42
// ▣ 출력예제 1 143

function solution1(k, arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        if (i !== j && i !== k && j !== k) {
          if (!answer.includes(arr[i] + arr[j] + arr[k])) {
            answer.push(arr[i] + arr[j] + arr[k]);
          }
        }
      }
    }
  }

  answer = answer.sort((a, b) => b - a);
  return answer[k - 1];
}

// solve.2 review
function solution2(k, arr) {
  // 카드의 값이 큰 순서대로 정렬
  arr = arr.sort((a, b) => b - a);

  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (stack.indexOf(arr[i] + arr[j] + arr[k]) < 0)
          stack.push(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  return stack[k - 1];
}

// solve.3 refernce => Set
function solution3(k, arr) {
  let answer;
  let n = arr.length;

  // set은 기본적으로 중복을 제거한다.
  let temp = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        temp.add(arr[i] + arr[j] + arr[k]);
      }
    }
  }
  let sortedArr = Array.from(temp).sort((a, b) => b - a);
  answer = sortedArr[k - 1];

  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution1(3, arr));
console.log(solution2(3, arr));
console.log(solution3(3, arr));
