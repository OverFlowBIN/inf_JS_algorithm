// 가운데 문자 출력

// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세 요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.
// ▣ 입력설명
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 첫 줄에 가운데 문자를 출력합니다.
// ▣ 입력예제 1 study
// ▣ 출력예제 1 u
// ▣ 입력예제 2 good
// ▣ 출력예제 2 oo

// solve.1
function solution1(str) {
  let mid = Math.floor(str.length / 2);
  if (str.length % 2 === 1) {
    return str[mid];
  } else {
    return str[mid - 1] + str[mid];
  }
}

console.log(solution1("study"));
console.log(solution1("good"));

// solve.2
function solution2(str) {
  let mid = Math.floor(str.length / 2);
  if (str.length % 2 === 1) {
    return str[mid];
  } else {
    return str.substring(mid - 1, mid + 1);
  }
}

console.log(solution2("study"));
console.log(solution2("good"));

// solve.3
function solution3(str) {
  let mid = Math.floor(str.length / 2);
  if (str.length % 2 === 1) {
    return str[mid];
  } else {
    return str.substr(mid - 1, 2);
  }
}

console.log(solution3("study"));
console.log(solution3("good"));
