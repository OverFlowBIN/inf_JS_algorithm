// 03. 숫자만 추출

// 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만 듭니다.
// 만약 “tge0a1h205er”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205 이 됩니다.
// 추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.
// ▣ 입력설명
// 첫 줄에 숫자가 썩인 문자열이 주어집니다. 문자열의 길이는 50을 넘지 않습니다.
// ▣ 출력설명
// 첫 줄에 자연수를 출력합니다.
// ▣ 입력예제 1 g0en2T0s8eSoft
// ▣ 출력예제 1 208

// solve.1 (replace)
function solution1(str) {
  let answer;
  str = str.replace(/[a-z,A-Z]/g, "");
  answer = +str;
  return answer;
}

// sovle.2 (isNaN)
function solution2(str) {
  let answer = 0;
  for (el of str) {
    if (!isNaN(el)) answer = answer * 10 + +el;
  }
  return answer;
}

// solve.3 review
function solution3(str) {
  let answer = 0;
  for (let el of str) {
    if (!isNaN(el)) answer = answer * 10 + Number(el);
  }
  return +answer;
}

let str = "g0en2T0s8eSoft";
console.log(solution1(str));

str = "g0e@#5t3n2T0s8eSof1t";
console.log(solution2(str));

str = "g0en2T0s8eSoft";
console.log(solution3(str));

str = "g0e@#5t3n2T0s8eSof1t";
console.log(solution3(str));
