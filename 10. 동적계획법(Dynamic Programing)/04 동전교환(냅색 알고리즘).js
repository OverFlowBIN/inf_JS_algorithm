// 04. 동전교확(냅색 알고리즘)

// 다음과 같이 여러 단위의 동전들이 주어져 있을때 거스름돈을 가장 적은 수의 동전으로 교환 해주려면 어떻게 주면 되는가?
// 각 단위의 동전은 무한정 쓸 수 있다.
// ▣ 입력설명
// 첫 번째 줄에는 동전의 종류개수 N(1<=N<=12)이 주어진다. 두 번째 줄에는 N개의 동전의 종 류가 주어지고,
// 그 다음줄에 거슬러 줄 금액 M(1<=M<=500)이 주어진다.
// 각 동전의 종류는 100원을 넘지 않는다.
// ▣ 출력설명
// 첫 번째 줄에 거슬러 줄 동전의 최소개수를 출력한다.
// ▣ 입력예제 1 3
// 125
// 15
// ▣ 출력예제 1 3
// 설명 : 5 5 5 동전 3개로 거슬러 줄 수 있다.

function solution(m, coin) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 10000);
  dy[0] = 0;
  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j <= m; j++) {
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
      // console.log(dy);
    }
  }

  return (answer = dy[m]);
}

let arr = [1, 2, 5];

console.log(solution(15, arr));
