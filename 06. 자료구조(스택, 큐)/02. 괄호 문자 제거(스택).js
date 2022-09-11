// 02. 괄호 문자 제거(스택)

// 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
// ▣ 출력설명
// 남은 문자만 출력한다.
// ▣ 입력예제 1 (A(BC)D)EF(G(H)(IJ)K)LM(N)
// ▣ 출력예제 1 EFLM

// solve.1
function solution1(str) {
  let answer = "";
  let stack = [];
  let char = /[A-Z]/;

  for (el of str) {
    if (el === "(") {
      stack.push(el);
    } else if (el === ")") {
      stack.pop();
    } else if (char.test(el)) {
      // or else
      if (stack.length === 0) answer += el;
    }
  }
  return answer;
}

// solve.2
function solution2(str) {
  let answer,
    stack = [];
  for (el of str) {
    if (el === ")") {
      while (stack.pop() !== "("); // => while의 조건으로만 사용 가능.
    } else stack.push(el);
  }
  return stack.join("");
}

// solve.3 review
function solution3(str) {
  let answer = "";
  let stack = [];
  for (let el of str) {
    if (el === "(") stack.push(el);
    else if (el === ")") stack.pop();
    else if (stack.length === 0) {
      answer += el;
    } else continue;
  }
  return answer;
}

// sovle.4 review reference
function solution4(str) {
  let answer;
  let stack = [];
  for (let el of str) {
    if (el === ")") {
      while (stack.pop() !== "(") {}
    } else {
      stack.push(el);
    }
  }
  answer = stack.join("");
  return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution1(str));
console.log(solution2(str));
console.log(solution3(str));
console.log(solution4(str));
