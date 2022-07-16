// 중복문자 제거

// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하 세요.
// 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.
// ▣ 입력설명
// 첫 줄에 문자열이 입력됩니다.
// ▣ 출력설명
// 첫 줄에 중복문자가 제거된 문자열을 출력합니다.
// ▣ 입력예제 1 ksekkset
// ▣ 출력예제 1 kset

// sovle.1 (includes)
function solution1(str) {
  let answer = "";
  for (el of str) {
    if (!answer.includes(el)) answer += el;
  }
  return answer;
}

console.log(solution1("ksekkset"));

// sovle.2 (indexOf)
function solution2(str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (answer.indexOf(str[i]) === -1) answer += str[i];
  }
  return answer;
}

console.log(solution2("ksekkset"));

// sovle.3 (indexOf)
function solution3(str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) answer += str[i];
  }
  return answer;
}

console.log(solution3("ksekkset"));
