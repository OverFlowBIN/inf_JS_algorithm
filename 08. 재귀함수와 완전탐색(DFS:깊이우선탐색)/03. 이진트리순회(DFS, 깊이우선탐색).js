// 03. 이진트리순회(DFS, 깊이우선탐색)

// 아래 그림과 같은 이진트리를 전위순회와 후위순회를 연습해보세요.
//         1
//     2       3
//   4   5   6   7
// 전위순회 출력 : 1 2 4 5 3 6 7
// 중위순회 출력 : 4 2 5 1 6 3 7
// 후위순회 출력 : 4 5 2 6 7 3 1

// 왼쪽 = 부모 * 2
// 오른쪽 = 부모 * 2 + 1

// 전위순위
function solution1(v) {
  let answer = [];
  function DFS(v) {
    if (v > 7) return;
    else {
      answer.push(v);
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  }
  DFS(v);
  return answer;
}

// 중위순위
function solution2(v) {
  let answer = [];
  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2);
      answer.push(v);
      DFS(v * 2 + 1);
    }
  }
  DFS(v);
  return answer;
}
// 후위순위
function solution3(v) {
  let answer = [];
  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2);
      DFS(v * 2 + 1);
      answer.push(v);
    }
  }
  DFS(v);
  return answer;
}

console.log(solution1(1));
console.log(solution2(1));
console.log(solution3(1));
