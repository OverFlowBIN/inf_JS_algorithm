// 중복 단어 제거

// N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요. 출력하는 문자열은 원래의 입력순서를 유지합니다.
// ▣ 입력설명
// 첫 줄에 자연수 N이 주어진다.(3<=N<=30)
// 두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 첫 줄부터 중복이 제거된 문자열을 차례로 출력한다.
// ▣ 입력예제 1 5
// good
// time
// good time student
// ▣ 출력예제 1 good
// time
// student

let arr = ["good", "time", "good", "time", "student"];

// solve.1 (includes) => 4.62ms
function solution1(arr) {
  let answer = [];
  for (el of arr) {
    if (!answer.includes(el)) answer.push(el);
  }
  return answer;
}

console.time("solution1");
console.log(solution1(arr));
console.timeEnd("solution1");

// solve.2 (indexOf, filter)
function solution2(arr) {
  return arr.filter((el, idx) => arr.indexOf(el) === idx);
}

console.time("solution2");
console.log(solution2(arr));
console.timeEnd("solution2");
