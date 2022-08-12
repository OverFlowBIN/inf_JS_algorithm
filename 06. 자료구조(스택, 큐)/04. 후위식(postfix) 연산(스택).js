// 04. 후위식(postifix) 연산(스택)

// 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
// 만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.
// ▣ 입력설명
// 첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다. 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.
// ▣ 출력설명
// 연산한 결과를 출력합니다.
// ▣ 입력예제 1 352+*9-
// ▣ 출력예제 1 12

// 3*(5+2)-9

// 352+*9- => 3*(5+2)- 9 21-9 => 12

// solve.1
function solution1(str) {
  let stack = [];
  let len = stack.length;
  // let nums = /[1-9]/;
  for (el of str) {
    let temp = 0;

    if (el === "+") {
      temp = stack[stack.length - 2] + stack[stack.length - 1];
      stack.pop();
      stack.pop();
      stack.push(temp);
    } else if (el === "-") {
      temp = stack[stack.length - 2] - stack[stack.length - 1];
      stack.pop();
      stack.pop();
      stack.push(temp);
    } else if (el === "*") {
      temp = stack[stack.length - 2] * stack[stack.length - 1];
      stack.pop();
      stack.pop();
      stack.push(temp);
    } else if (el === "/") {
      temp = stack[stack.length - 2] / stack[stack.length - 1];
      stack.pop();
      stack.pop();
      stack.push(temp);
    } else stack.push(Number(el));
  }
  return stack[0];
}

// solve.2 => refactoring

let str = "352+*9-";
console.log(solution1(str));
