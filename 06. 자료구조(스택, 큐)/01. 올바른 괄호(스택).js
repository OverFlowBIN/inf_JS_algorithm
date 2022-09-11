//n 01. 올바른 괄호(스택)

// stack 은 input과 output의 입구가 동일하다.(Last in First out)
// Queue 은 input과 output의 입구가 다르다.(Fisrt in First out)

// 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
// (())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.
// ▣ 입력설명
// 첫 번째 줄에 괄호 문자열이 입력됩니다. 문자열의 최대 길이는 30이다.
// ▣ 출력설명
// 첫 번째 줄에 YES, NO를 출력한다.
// ▣ 입력예제 1 (()(()))(()
// ▣ 출력예제 1 NO

// sovle.1
function solution1(bracket) {
  let stack = [];

  for (el of bracket) {
    if (el === "(") stack.push(el);
    else {
      if (stack.length === 0) return "NO";
      let pop = stack.pop();
      // if (pop === undefined) return "NO";
    }
  }
  if (stack.length > 0) return "NO";
  return "YES";
}

function solution2(bracket) {
  let answer = "YES";
  let stack = [];
  for (let el of bracket) {
    if (el === "(") stack.push(el);
    else {
      let pop = stack.pop();
      if (pop === undefined) return "NO";
    }
  }
  if (stack.length > 0) return "NO";
  return answer;
}

let bracket = "()()(";
console.log(solution1(bracket));
console.log(solution2(bracket));
bracket = "((()())())())(()";
console.log(solution1(bracket));
console.log(solution2(bracket));
