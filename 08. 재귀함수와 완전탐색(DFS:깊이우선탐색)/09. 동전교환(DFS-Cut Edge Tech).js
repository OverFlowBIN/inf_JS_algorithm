// 09. 동전교환

// 다음과 같이 여러 단위의 동전들이 주어져 있을때 거스름돈을 가장 적은 수의 동전으로 교환 해주려면 어떻게 주면 되는가?
// 각 단위의 동전은 무한정 쓸 수 있다.
// ▣ 입력설명
// 첫 번째 줄에는 동전의 종류개수 N(1<=N<=12)이 주어진다. 두 번째 줄에는 N개의 동전의 종 류가 주어지고, 그 다음줄에 거슬러 줄 금액 M(1<=M<=500)이 주어진다.
// 각 동전의 종류는 100원을 넘지 않는다.
// ▣ 출력설명
// 첫 번째 줄에 거슬러 줄 동전의 최소개수를 출력한다.
// ▣ 입력예제 1
// 3
// 1 2 5
// 15
// ▣ 출력예제 1
// 3
// 설명 : 5 5 5 동전 3개로 거슬러 줄 수 있다.

function solution1(coins, changes) {
  let answer = Number.MAX_SAFE_INTEGER;

  function DFS(v, sum) {
    // 필요 없는 가지를 삭제 할 수있다(다른 가지에서 v >= answer 보다 크면 가지를 뻗을 필요가 없다.
    if (sum > changes || v >= answer) {
      return;
    }
    if (sum === changes) {
      answer = Math.min(answer, v);
    } else {
      for (let i = 0; i < coins.length; i++) {
        DFS(v + 1, sum + coins[i]);
      }
    }
  }

  DFS(0, 0);
  return answer;
}

function solution2(coins, changes) {
  let answer = Number.MAX_SAFE_INTEGER;

  function DFS(v, sum) {
    if (sum > changes || v >= answer) return;
    if (sum === changes) {
      answer = Math.min(answer, v);
      return;
    } else {
      for (let i = 0; i < coins.length; i++) {
        DFS(v + 1, sum + coins[i]);
      }
    }
  }

  DFS(0, 0);
  return answer;
}

function solution3(coins, changes) {
  let answer = Number.MAX_SAFE_INTEGER;

  function DFS(v, sum) {
    if (sum === changes) answer = Math.min(answer, v);
    if (sum > changes) return;
    else {
      for (let i = 0; i < coins.length; i++) {
        DFS(v + 1, sum + coins[i]);
      }
    }
  }

  DFS(0, 0);
  return answer;
}

// solve.4 => review
function solution4(coins, changes) {
  coins.sort((a, b) => b - a); // => 큰 값부터 보는게 시간적으로 유리하다
  let answer = Number.MAX_SAFE_INTEGER;

  function DFS(vertex, sum) {
    if (sum > changes || vertex > answer)
      return; // => 이미 정답에 가까운 답이 있으니 그것보다 큰건 패쓰
    else if (sum === changes) {
      answer = Math.min(answer, vertex);
    } else {
      for (let i = 0; i < coins.length; i++) {
        DFS(vertex + 1, sum + coins[i]);
      }
    }
  }

  DFS(0, 0);
  return answer;
}

let coins = [1, 2, 5, 8, 9];
let changes = 20;
console.log(solution1(coins, changes));
console.time("2");
console.log(solution2(coins, changes));
console.timeEnd("2");
console.time("3");
console.log(solution3(coins, changes));
console.timeEnd("3");
coins = [1, 2, 5, 8, 9];
console.time("4");
console.log(solution4(coins, changes));
console.timeEnd("4");
