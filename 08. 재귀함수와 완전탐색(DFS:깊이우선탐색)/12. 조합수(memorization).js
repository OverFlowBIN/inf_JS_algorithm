// 12. 조합의 경우수(메모제이션)

// nCr = n-1Cr-1 + n-1Cr

// ▣ 입력설명
// 첫째 줄에 자연수 n(3<=n<=33)과 r(0<=r<=n)이 입력됩니다.
// ▣ 출력설명
// 첫째 줄에 조합수를 출력합니다.
// ▣ 입력예제 1
// 5 3
// ▣ 출력예제 1
// 10
// ▣ 입력예제 2
// 33 19
// ▣ 출력예제 2
// 818809200

function solution1(n, r) {
  let answer;
  let stack = Array.from({ length: n + 1 }, () =>
    Array.from({ length: r + 1 }, () => 0)
  );

  function DFS(n, r) {
    if (stack[n][r] > 0) return stack[n][r];
    if (n === r || r === 0) return 1;
    else {
      return (stack[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
    }
  }
  answer = DFS(n, r);
  return answer;
}

function solution2(n, r) {
  let answer;
  let graph = Array.from({ length: n + 1 }, () =>
    Array.from({ length: r + 1 }, () => 0)
  );

  function DFS(n, r) {
    if (n === r || r === 0) return 1;
    if (graph[n][r] !== 0) return graph[n][r];
    else {
      // nCr = n-1Cr-1 + n-1Cr, graph에 return 값 넣기
      return (graph[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
    }
  }

  answer = DFS(n, r);
  return answer;
}

console.log(solution1(5, 3));
console.log(solution1(33, 19));

console.log(solution2(5, 3));
console.log(solution2(33, 19));
