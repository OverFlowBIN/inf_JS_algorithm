// A를 #으로

// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 문자열이 입력된다.
// ▣ 출력설명
// 첫 번째 줄에 바뀐 단어를 출력한다.
// ▣ 입력예제 1 BANANA
// ▣ 출력예제 1 B#N#N#

// solve.1  => 3.32ms
function solution1(str) {
  let answer;
  let arr = str.split("");

  answer = arr.map((el) => {
    if (el === "A") {
      return "#";
    } else {
      return el;
    }
  });

  return answer.join("");
}

console.time("solution1");
console.log(solution1("BANANA"));
console.timeEnd("solution1");

// solve.2  => 0.06ms
function solution2(str) {
  let answer = "";
  for (el of str) {
    if (el === "A") answer += "#";
    else answer += el;
  }
  return answer;
}

console.time("solution2");
console.log(solution2("BANANA"));
console.timeEnd("solution2");

// solve.3  => 0.03ms
function solution3(str) {
  return str.replace(/A/g, "#");
}

console.time("solution3");
console.log(solution3("BANANA"));
console.timeEnd("solution3");
