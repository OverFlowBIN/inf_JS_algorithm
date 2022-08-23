// 02. 이진수 출력(재귀)

// 10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램을 작성하세요. 단 재귀함수를 이용 해서 출력해야 합니다.
// ▣ 입력설명
// 첫 번째 줄에 10진수 N(1<=N<=1,000)이 주어집니다.
// ▣ 출력설명
// 첫 번째 줄에 이진수를 출력하세요.
// ▣ 입력예제 1 11
// ▣ 출력예제 1 1011

// pesudocode
// 11
// 2^1으로 빼서 양수면
// 2^2으로 빼서 양수면
//2^3으로 빼서 양수면
//2^4으로 뺴서 음수면
//2^3 => 10^3을 answer에 넣고
// 남은값 11 - 8 = 3으로 다시
// 2^1로 빼서 양수면
// 2^2로 빼서 음수면
// 2^1 => 10^1을 answer에 더하고
// 남은값 3 - 2^1 = 1로 다시
// 2^1빼서 음수면
// 1 - 2^(1-1) = 1을 answer에 넣기
// 최종값이 1, 0일때 answer에 합치고 끝내기

// solve.1
function solution1(num) {
  let answer = 0;
  let n = 1;

  function DFS(num, n) {
    if (num <= 1) {
      answer += num;
      return answer;
    }
    // 음수면
    if (num - 2 ** n > 0) DFS(num, n + 1);
    // 양수면
    else {
      answer += 10 ** (n - 1);
      num -= 2 ** (n - 1);
      DFS(num, 1);
    }
  }
  // console.log("console", DFS(num, n));  => TODO: 여기서 왜 console이 안찍히나요? return 하는데..?
  DFS(num, n);

  return answer;
}

//pesudocode
// 11 / 2 => 5 ... 1
// 5 / 2 => 2 ... 1
// 2 / 2 => 1 ... 0
// 1 / 2 => 0 ... 1
// 거꾸로 합친 값 1011이 답
// solve.2
function solution2(num) {
  let answer = "";

  function DFS(num) {
    let quotient = parseInt(num / 2);
    let remainder = num % 2;
    if (quotient > 0) DFS(quotient);
    answer += String(remainder);
  }

  DFS(num);

  return +answer;
}

console.log(solution1(213));
console.log(solution2(213));
// 10진수 2진수
// 0     0
// 1     1
// 2     10
// 3     11
// 4     100
// 5     101
// 6     110
// 7     111
// 8     1000
// 9     1001
// 10    1010
// 11    1011
//    ...

// log2  => 1, 10^1
// log4  => 2, 나머지 없음 => 10^2
// log8  => 3, 나머지가 없음 => 10^3 => 1000 => 나머지가 없으면 끝
// log16 => 4, 나머지가없음 => 10^4 => 10000 => 나머지가 없으면 끝

// 3 / 2 => 1.5 => 1, 나머지가 있음 => 10^1
// 나머지 1 => 1 => 1
// 1000 + 10 + 1 => 1011

// 11 /2 => 5, 1
// 5 / 2 => 2, 1
// 2 / 2 => 1, 0
