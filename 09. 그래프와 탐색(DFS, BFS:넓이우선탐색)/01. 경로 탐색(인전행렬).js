// 01. 경로 탐색(인전행렬)

// 방향그래프가 주어지면 1번 정점에서 N번 정점으로 가는 모든 경로의 가지 수를 출력하는 프 로그램을 작성하세요. 아래 그래프에서 1번 정점에서 5번 정점으로 가는 가지 수는
// 12345
// 125
// 13425
// 1345
// 1425
// 145
// 총 6 가지입니다.

//   ▣ 입력설명
// 첫째 줄에는 정점의 수 N(1<=N<=20)와 간선의 수 M가 주어진다. 그 다음부터 M줄에 걸쳐 연 결정보가 주어진다.
// ▣ 출력설명
// 총 가지수를 출력한다.
// ▣ 입력예제 1
// 59
// 12
// 13
// 14
// 21
// 23
// 25
// 34
// 42
// 45
// ▣ 출력예제 1 6

function solution1(arr) {
  let answer = 0;
  // 최대 정점 숫자 찾기
  let maxVertex = Math.max(...arr.flat());
  let check = Array.from({ length: maxVertex + 1 }, () => 0);
  // let graph = Array.from({ length: maxVertex + 1 }, () =>
  //   Array.from({ length: maxVertex + 1 }, () => 0)
  // );
  let graph = Array.from(Array(maxVertex + 1), () =>
    Array(maxVertex + 1).fill(0)
  );
  // 확인용
  let path = [];

  // for (let i = 0; i < arr.length; i++) {
  //   graph[arr[i][0]][arr[i][1]] = 1;
  // }

  for (let [from, to] of arr) {
    graph[from][to] = 1;
  }

  function DFS(vertex) {
    if (vertex === maxVertex) {
      answer++;
      console.log(path);
    } else {
      check[vertex] = 1;
      for (let i = 1; i <= maxVertex; i++) {
        if (check[i] === 0 && graph[vertex][i] === 1) {
          check[i] = 1;
          path.push(i);
          DFS(i);
          check[i] = 0;
          path.pop();
        }
      }
    }
  }

  path.push(1);
  DFS(1);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];

console.log(solution1(arr));
