// 삼각형 판별하기
// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

// ▣ 입력설명
// 첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.
// ▣ 출력설명
// 첫 번째 줄에 “YES", "NO"를 출력한다.
// ▣ 입력예제 1 6 7 11
// ▣ 출력예제 1 YES
// ▣ 입력예제 1 13 33 17
// ▣ 출력예제 1 NO

// pesudocode
// 가장 큰 값 찾기
// 가장큰값 > 작은값1 + 작은값2 공식 성립시 YES 출력
function solution(a, b, c) {
  let answer = "NO";
  let max = Math.max(a, b, c);
  if (max === a) {
    if (a < b + c) answer = "YES";
  }
  if (max === b) {
    if (b < a + c) answer = "YES";
  }
  if (max === c) {
    if (c < a + b) answer = "YES";
  }
  return answer;
}

function solution(a, b, c) {
  let answer, max;
  if (a > b) max = a;
  else max = b;
  if (answer < c) max = c;
  let sum = a + b + c - max;

  if (max < sum) answer = "YES";
  else answer = "NO";

  return answer;
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
