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

  for (el of str) {
    if (isNaN(Number(el))) {
      let num2 = stack.pop();
      let num1 = stack.pop();

      if (el === "+") {
        stack.push(num1 + num2);
      } else if (el === "-") {
        stack.push(num1 - num2);
      } else if (el === "*") {
        stack.push(num1 * num2);
      } else if (el === "/") {
        stack.push(num1 / num2);
      }
    } else stack.push(Number(el));
  }

  return stack[0];
}

// solve.2 review
function solution2(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      stack.push(str[i]);
    } else {
      let pop1 = +stack.pop();
      let pop2 = +stack.pop();
      if (str[i] === "+") stack.push(pop2 + pop1);
      if (str[i] === "-") stack.push(pop2 - pop1);
      if (str[i] === "*") stack.push(pop2 * pop1);
    }
  }
  return stack[0];
}

let str = "352+*9-";
console.log(solution1(str));

str = "352+*9-";
console.log(solution2(str));
