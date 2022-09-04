// 02. 경로 탐색(인접리스트)
function solution1(arr) {
  let answer = 0;

  let maxVertex = Math.max(...arr.flat());
  let check = Array.from({ length: maxVertex + 1 }, () => 0);

  // vertex개수 +1개 만큼 빈 배열([])을 만든다.
  // 이후 간선을 확인하며 graph를 채운다.
  let graph = Array.from(Array(maxVertex + 1), () => Array());

  for (let [from, to] of arr) {
    graph[from].push(to);
  }

  console.log(graph);

  function DFS(vertex) {
    if (vertex === maxVertex) {
      answer++;
    } else {
      check[vertex] = 1;
      for (let i = 0; i < graph[vertex].length; i++) {
        let toVertex = graph[vertex][i];
        if (check[toVertex] === 0) {
          check[toVertex] = 1;
          DFS(toVertex);
          check[toVertex] = 0;
        }
      }
    }
  }

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
