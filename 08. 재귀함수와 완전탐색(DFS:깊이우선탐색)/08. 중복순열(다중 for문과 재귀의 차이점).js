// 중복순열(다중 for문과 재귀의 차이점)

// 1부터 N까지 번호가 적힌 구슬이 있습니다. 이 중 중복을 허락하여 M번을 뽑아 일렬로 나열 하는 방법을 모두 출력합니다.
// ▣ 입력설명
// 첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.
// ▣ 출력설명
// 첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다. 출력순서는 사전순으로 오름차순으로 출력합니다.
// ▣ 입력예제 1
// 3 2
// ▣ 출력예제 1
// 1 1
// 1 2
// 1 3
// 2 1
// 2 2
// 2 3
// 3 1
// 3 2
// 3 3

/** solve.1 */
function solution1(n, m) {
  let answer = [];
  let temp = [];

  function DFS(v) {
    if (v === m) {
      // push temp를 바로 하면 stack이 나중에 최종 temp의 값은 바뀌게 된다 (클로저가 밖에 있어서)
      // 그러므로 slice를 해서 stack이 마무리 됬을때 기준으로 복사를 한 값을 계속 가져가 stack이 종료되도
      // 최종 temp는 유지 시킨 상태로 answer에 push할 수 있게 한다!!!!...
      answer.push(temp);
      return;
      // temp = [];
    } else {
      for (let i = 1; i <= n; i++) {
        temp[v] = i;
        DFS(v + 1);
      }
    }
  }

  DFS(0);
  return answer;
}

// function solution2(n, m) {
//   let answer = [];
//   let temp = Array.from({ length: m }, () => 0);

//   function DFS(v) {
//     if (v === m) {
//       answer.push(temp.slice());
//       return;
//     } else {
//       for (let i = 1; i <= n; i++) {
//         temp[v] = i;
//         DFS(v + 1);
//       }
//     }
//   }

//   DFS(0);
//   return answer;
// }

let n = 3,
  m = 2;
console.log(solution1(n, m));
// console.log(solution2(n, m));
