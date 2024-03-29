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

// pesudocode
// 만약 1~3까지 숫자를 이용한 부분집합을 만든다 하면
// 1,2,3을 한개, 두개, 전체 사용으로 나누어서 부분집합을 정의 할 수 있다
// [1], [1,2], [1,2,3], [2], [2,3], [3], [1,3], [] => 2^3개(8개) => 나중에 공집합은 제외시키기.
// DFS(n) => 해당 n을 썻다 안썻다 하는걸 새로운 배열에 저장한다.
// [0, 0, 0, 0, 0, 0, 0, 0, 0] 해당 n 을 index로 사용하여 사용한다면 0 => 1로 변경
// 해당 인덱스를 썻다면 ([0, 1, 0, 0] => 1을 사용)

// solve.1
function solution1(n) {
  let answer = [];
  let isUsed = Array.from({ length: n + 1 }, () => 0);

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

function solution2(num) {
  let answer = [];
  let isUsed = Array.from({ length: num + 1 }, () => 0);

  let temp = [];
  function DFS(vertex) {
    if (vertex > num) {
      for (let i = 0; i < isUsed.length; i++) {
        if (isUsed[i] === 1) temp.push(i);
      }
      if (temp.length > 0) answer.push(temp);

      temp = [];
    } else {
      isUsed[vertex] = 1;
      DFS(vertex + 1);
      isUsed[vertex] = 0;
      DFS(vertex + 1);
    }
  }

  DFS(1);
  return answer;
}

console.log(solution1(3));
console.log(solution2(3));
