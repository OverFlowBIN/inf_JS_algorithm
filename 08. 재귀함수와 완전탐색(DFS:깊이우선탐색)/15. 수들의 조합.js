// 15. 수들의 조합

// N개의 정수가 주어지면 그 숫자들 중 K개를 뽑는 조합의 합이
// 임의의 정수 M의 배수인 개수 는 몇 개가 있는지 출력하는 프로그램을 작성하세요.
// 예를 들면 5개의 숫자 2 4 5 8 12가 주어지고,
// 3개를 뽑은 조합의 합이 6의 배수인 조합을 찾으면 4+8+12 2+4+12로 2가지가 있습니다.
// ▣ 입력설명
// 첫줄에 정수의 개수 N(3<=N<=20)과 임의의 정수 K(2<=K<=N)가 주어지고, 두 번째 줄에는 N개의 정수가 주어진다.
// 세 번째 줄에 M이 주어집니다.
// ▣ 출력설명
// 총 가지수를 출력합니다.
// ▣ 입력예제 1
// 5 3
// 2 4 5 8 12
// 6
// ▣ 출력예제 1
// 2

function solution1(arr, k) {
  let answer = [];
  let temp = [];

  function DFS(vertex, starIdx, sum) {
    if (vertex === k) {
      if (sum % 6 === 0) answer.push(temp.slice());
      else return;
    } else {
      for (let i = starIdx; i < arr.length; i++) {
        temp[vertex] = arr[i];
        DFS(vertex + 1, i + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0, 0);
  return answer.length;
}

function solution2(arr, k) {
  let answer = [];

  let temp = [];
  function DFS(v, sum, starIdx) {
    if (v === 3) {
      if (sum % 6 === 0) answer.push(temp.slice());
      else return;
    } else {
      for (let i = starIdx; i < arr.length; i++) {
        temp[v] = arr[i];
        DFS(v + 1, sum + arr[i], i + 1);
      }
    }
  }

  DFS(0, 0, 0);
  return answer;
}

// solve.3 review
function solution3(arr, k) {
  let answer = 0;

  function DFS(vertex, idx, sum) {
    if (vertex === k && sum % 6 === 0) {
      answer++;
      // return;
    } else {
      for (let i = idx; i < arr.length; i++) {
        DFS(vertex + 1, i + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0, 0);
  return answer;
}

// solve.4 => compare to solve.3
function solution4(arr, k) {
  let answer = 0;

  function DFS(vertex, idx, sum) {
    if (vertex === k && sum % 6 === 0) {
      answer++;
      return;
    } else {
      for (let i = idx; i < arr.length; i++) {
        DFS(vertex + 1, i + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0, 0);
  return answer;
}

let arr = [2, 4, 5, 8, 12, 14, 17, 20, 22, 25, 30];
let k = 3;
console.log(solution1(arr, k));
console.log(solution2(arr, k));

console.time("3");
console.log(solution3(arr, k));
console.timeEnd("3");

console.time("4");
console.log(solution4(arr, k));
console.timeEnd("4");
