// 06. 격자핀 최대합

// 5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.

// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합 니다.
// ▣ 입력설명
// 첫 줄에 자연수 N이 주어진다.(1<=N<=50)
// 두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는 다.
// ▣ 출력설명 최대합을 출력합니다.
// ▣ 입력예제 1
// 5
// 10 13 10 12 15
// 12 39 30 23 11
// 11 25 50 53 15
// 19 27 29 37 27
// 19 13 30 13 19
// ▣ 출력예제 1 155

// pesudocode 다 더해서 배열에 넣은 다음 최대값 구하기

function solution1(arr) {
  let answer = Number.MIN_SAFE_INTEGER;

  // 수평, 수직 더하기
  for (let i = 0; i < arr.length; i++) {
    let total1 = 0;
    let total2 = 0;
    for (let j = 0; j < arr.length; j++) {
      total1 += arr[i][j];
      total2 += arr[j][i];
    }
    answer = Math.max(answer, total1, total2);
  }

  // 대각선 더하기
  let total1 = 0;
  let total2 = 0;
  for (let i = 0; i < arr.length; i++) {
    total1 += arr[i][i];
    total2 += arr[i][arr.length - i - 1];
    answer = Math.max(answer, total1, total2);
  }

  return answer;
}
let matrix = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution1(matrix));
