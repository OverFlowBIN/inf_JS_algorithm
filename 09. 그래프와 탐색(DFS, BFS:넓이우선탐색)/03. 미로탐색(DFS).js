// 03. 미로탐색(DFS)

// 7*7 격자판 미로를 탈출하는 경로의 가지수를 출력하는 프로그램을 작성하세요.
// 출발점은 격 자의 (1, 1) 좌표이고, 탈출 도착점은 (7, 7)좌표이다.
// 격자판의 1은 벽이고, 0은 통로이다. 격 자판의 움직임은 상하좌우로만 움직인다. 미로가 다음과 같다면
// 출발 0  0  0  0  0  0
// 0   1  1  1  1  1  0
// 0   0  0  1  0  0  0
// 1   1  0  1  0  1  1
// 1   1  0  0  0  0  1
// 1   1  0  1  1  0  0
// 1   0  0  0  0  0 도착
// 위의 지도에서 출발점에서 도착점까지 갈 수 있는 방법의 수는 8가지이다.
// ▣ 입력설명
// 7*7 격자판의 정보가 주어집니다.
// ▣ 출력설명
// 첫 번째 줄에 경로의 가지수를 출력한다.
// ▣ 입력예제 1
// 0000000
// 0111110
// 0001000
// 1101011
// 1100001
// 1101100
// 1000000
// ▣ 출력예제 1
// 8

// solve.1
function solution1(board) {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  function DFS(x, y) {
    if (x === board[0].length - 1 && y === board.length - 1) {
      answer++;
    } else {
      for (let i = 0; i < dx.length; i++) {
        if (
          x + dx[i] >= 0 &&
          y + dy[i] >= 0 &&
          x + dx[i] <= board.length - 1 &&
          y + dy[i] <= board.length - 1 &&
          board[x + dx[i]][y + dy[i]] === 0
        ) {
          board[x + dx[i]][y + dy[i]] = 1;
          DFS(x + dx[i], y + dy[i]);
          board[x + dx[i]][y + dy[i]] = 0;
        }
      }
    }
  }

  board[0][0] = 1;
  DFS(0, 0);
  return answer;
}

// solve.2 refernce
function solution2(board) {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  function DFS(x, y) {
    if (x === board[0].length - 1 && y === board.length - 1) {
      answer++;
    } else {
      for (let k = 0; k < dx.length; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        if (
          nx >= 0 &&
          nx <= board.length - 1 &&
          ny >= 0 &&
          ny <= board.length - 1 &&
          board[nx][ny] === 0
        ) {
          board[nx][ny] = 1;
          DFS(nx, ny);
          board[nx][ny] = 0;
        }
      }
    }
  }
  board[0][0] = 1;
  DFS(0, 0);
  return answer;
}

let board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution1(board));
console.log(solution2(board));
