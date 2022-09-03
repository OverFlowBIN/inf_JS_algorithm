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
// 125
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
      console.log(v, sum);
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
    console.log(v, sum);
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

let coins = [1, 2, 5, 8, 9];
let changes = 19;
console.log(solution1(coins, changes));
console.log(solution2(coins, changes));
