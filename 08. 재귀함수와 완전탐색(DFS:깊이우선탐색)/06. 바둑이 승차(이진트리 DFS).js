// 06. 바둑이 승차(이진트리 DFS)

// 철수는 그의 바둑이들을 데리고 시장에 가려고 한다. 그런데 그의 트럭은 C킬로그램 넘게 태 울수가 없다.
// 철수는 C를 넘지 않으면서 그의 바둑이들을 가장 무겁게 태우고 싶다.
// N마리의 바둑이와 각 바둑이의 무게 W가 주어지면, 철수가 트럭에 태울 수 있는 가장 무거운 무게를
// 구하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 자연수 C(1<=C<=100,000,000)와 N(1<=N<=30)이 주어집니다.
// 둘째 줄부터 N마리 바둑이의 무게가 주어진다.
// ▣ 출력설명
// 첫 번째 줄에 가장 무거운 무게를 출력한다.
// ▣ 입력예제 1 259 5
// 81 58 42 33 61
// ▣ 출력예제 1 242

// pesudocode
// 선택한다, 선택하지 않는다... 등등 => 부분집합이란 느낌 => DFS

// solve.1 전체 이진트리를 다 돌아서 최대값을 return
function solution1(k, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  // arr.sort((a, b) => a - b);

  function DFS(v, sum) {
    if (arr[v] === undefined) {
      // console.log("sum", sum);
      if (sum <= k) answer = Math.max(answer, sum);
      else return;
    } else {
      DFS(v + 1, sum + arr[v]);
      DFS(v + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
}

// sovle.2 reference => 내가 푼것과 동일함 =>
// 조건중에 n === 30인경우도 있는데 확인해야할 가지수가 최대 n^30 가지 이다.. 이럴떄는..?
function solution2(k, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  function DFS(L, sum) {
    if (sum > k) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}

// solve.3 review
function solution3(k, arr) {
  let answer = Number.MIN_SAFE_INTEGER;

  function DFS(vt, sum) {
    if (vt === arr.length) {
      if (sum <= k) answer = Math.max(answer, sum);
      else return;
    } else {
      DFS(vt + 1, sum + arr[vt]);
      DFS(vt + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
}

// let k = 1100;
// let arr = [
//   81, 58, 42, 33, 61, 73, 18, 39, 28, 58, 38, 18, 96, 38, 47, 95, 15, 37, 59,
//   15, 84, 25, 59, 37, 15, 59, 15, 48, 59, 62,
// ];
let k = 259;
let arr = [81, 58, 42, 33, 61];
console.log(solution1(k, arr));
console.log(solution2(k, arr));
console.log(solution3(k, arr));
