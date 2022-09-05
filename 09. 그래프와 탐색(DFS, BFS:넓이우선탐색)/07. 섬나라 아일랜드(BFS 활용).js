// 06. 섬나라 아일랜드(DFS 활용)

// N*N의 섬나라 아일랜드의 지도가 격자판의 정보로 주어집니다. 각 섬은 1로 표시되어 상하좌 우와 대각선으로 연결되어 있으며, 0은 바다입니다. 섬나라 아일랜드에 몇 개의 섬이 있는지 구하는 프로그램을 작성하세요.

// 1100010
// 0110110
// 0100000
// 0001011
// 1101100
// 1000100
// 1010100

// 만약 위와 같다면
// ▣ 입력설명
// 첫 번째 줄에 자연수 N(3<=N<=20)이 주어집니다. 두 번째 줄부터 격자판 정보가 주어진다.
// ▣ 출력설명
// 첫 번째 줄에 섬의 개수를 출력한다.
// ▣ 입력예제 1
// 7
// 1100010
// 0110110
// 0100000
// 0001011
// 1101100
// 1000100
// 1010100
// ▣ 출력예제 1 5

// sovle by BFS
function solution(board) {
  let answer = 0;
  let len = board.length;
  let dx = [0, 1, 1, 1, 0, -1, -1, -1]; // 8방향(12시부터)
  let dy = [-1, -1, 0, 1, 1, 1, 0, -1];
  let queue = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        queue.push([i, j]);

        while (queue.length) {
          let [x, y] = queue.shift(); // => x, y 활용 가능
          board[x][y] = 0;
          for (let k = 0; k < dx.length; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            if (
              nx >= 0 &&
              ny >= 0 &&
              nx < len &&
              ny < len &&
              board[nx][ny] === 1
            ) {
              queue.push([nx, ny]);
            }
          }
        }
        answer++;
      }
    }
  }

  return answer;
}

let board = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(board));
