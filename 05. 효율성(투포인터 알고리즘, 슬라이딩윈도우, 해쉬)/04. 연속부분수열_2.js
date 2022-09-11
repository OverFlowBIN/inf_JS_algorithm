// 04. 연속 부분수열_2

// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그 램을 작성하세요.
// 만약 N=5, M=5이고 수열이 다음과 같다면
// 13123
// 합이 5이하가 되는 연속부분수열은 {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3}, {1, 3, 1}로 총 10가지입니다.
// ▣ 입력설명
// 첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다. 수열의 원소값은 1,000을 넘지 않는 자연수이다.
// ▣ 출력설명
// 첫째 줄에 경우의 수를 출력한다.
// ▣ 입력예제 1 55 13123
// ▣ 출력예제 1 10

// solve.1 O(n^2)
function solution1(N, arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    for (let j = i; j < arr.length; j++) {
      if (temp + arr[j] <= N) {
        answer++;
        temp += arr[j];
      } else {
        break;
      }
    }
  }

  return answer;
}

// solve.2 review1 O(n)????
function solution2(n, arr) {
  let answer = (lt = rt = sum = 0);

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > n) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}

// solve.3 review2
// function solution2(n, arr) {
//   let answer = (lt = rt = sum = 0);

//   while (lt <= arr.length) {
//     if (sum <= n) {
//       sum += arr[rt];
//       answer += rt - lt + 1;
//       rt++;
//     } else {
//       while (sum >= n) {
//         lt++;
//       }
//     }
//   }
//   return answer;
// }

let arr = [1, 2, 3, 1, 4];

console.log(solution1(5, arr));
console.log(solution2(5, arr));
// console.log(solution3(5, arr));
