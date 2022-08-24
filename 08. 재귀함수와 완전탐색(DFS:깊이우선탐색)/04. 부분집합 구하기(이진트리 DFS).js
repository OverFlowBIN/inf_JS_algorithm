// 04. 부분집합 구하기(이진트리 DFS)

// 자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램 을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 자연수 N(1<=N<=10)이 주어집니다.
// ▣ 출력설명
// 첫 번째 줄부터 각 줄에 하나씩 부분집합을 아래와 출력예제와 같은 순서로 출력한다. 단 공집합은 출력하지 않습니다.
// ▣ 입력예제 1 3
// ▣ 출력예제 1
// 1 2 3
// 1 2
// 1 3
// 1
// 2 3
// 2
// 3

// function solution(n) {
//   let answer = [];
//   // let arr = Array.from({ length: n }, (el, idx) => idx + 1);
//   // arr = arr.map((el) => [el, true]);
//   let temp = [];
//   let isEqual = true;

//   function DFS(n, isEqual) {
//     if (n > 3) return;
//     else {
//       console.log(n, isEqual);
//       DFS(n + 1, true);
//       DFS(n + 2, false);
//     }
//   }
//   DFS(1, true);

//   return answer;
// }

// function solution(n) {
//   let answer = [];
//   let ch = Array.from({ length: n + 1 }, () => 0);
//   function DFS(v, isEqual) {
//     if (v > n) {
//       let temp = "";
//       for (let i = 1; i <= n; i++) {
//         if (ch[i] === 1) temp += `${i} `;
//       }
//       if (temp) answer.push(temp.trim());
//     } else {
//       ch[v] = 1;
//       DFS(v + 1);
//       ch[v] = 0;
//       DFS(v + 1);
//     }
//   }
//   DFS(1, true);
//   return answer;
// }

// console.log(solution(3));

function solution(n) {
  let answer = [];
  let isUsed = Array.from({ length: n + 1 }, () => 0);
  // (n=3) => [0, 0, 0, 0]

  function DFS(v) {
    if (v > n) {
      let temp = "";
      for (let i = 1; i < isUsed.length; i++) {
        if (isUsed[i] === 1) temp += i;
      }
      if (temp) answer.push(temp);
    } else {
      isUsed[v] = 1;
      DFS(v + 1);
      isUsed[v] = 0;
      DFS(v + 1);
    }
  }

  DFS(1);
  return answer;
}

console.log(solution(3));
