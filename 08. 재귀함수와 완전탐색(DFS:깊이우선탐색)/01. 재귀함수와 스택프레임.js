// 01. 재귀함수와 스택프레임

// 자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄은 정수 N(3<=N<=10)이 입력된다.
// ▣ 출력설명
// 첫째 줄에 출력한다.
// ▣ 입력예제 1 3
// ▣ 출력예제 1 123
let answer = [];
function solution1(num) {
  if (num === 0) return answer;
  answer.unshift(num);

  return solution1(num - 1);
}

function solution2(num) {
  let answer = [];

  function DFS(num) {
    if (num === 0) return answer;
    answer.unshift(num);
    return DFS(num - 1);
  }

  return DFS(num);
}

console.log(solution1(5));
console.log(solution2(5));

// stack frame
/*
  메모리의 스택(stack) 영역은 함수의 호출과 관계되는 지역 변수와 매개변수가 저장되는 영역입니다.
  스택 영역은 함수의 호출과 함께 할당되며, 함수의 호출이 완료되면 소멸합니다.
  함수가 호출되면 스택에는 함수의 매개변수, 호출이 끝난 뒤 돌아갈 반환 주소값, 함수에서 선언된 지역 변수 등이 저장됩니다.
  이렇게 스택 영역에 차례대로 저장되는 함수의 호출 정보를 스택 프레임(stack frame)이라고 합니다.
  이러한 스택 프레임 덕분에 함수의 호출이 모두 끝난 뒤에, 해당 함수가 호출되기 이전 상태로 되돌아갈 수 있습니다.
*/
function stackFrame1(num) {
  function DFS(num) {
    if (num === 0) return;
    DFS(num - 1); // 위아래 순서에 따라 log의 순서가 다르다
    console.log(num); // 위아래 순서에 따라 log의 순서가 다르다
  }
  DFS(num);
}

function stackFrame2(num) {
  function DFS(num) {
    if (num === 0) return;
    console.log(num); // 위아래 순서에 따라 log의 순서가 다르다
    DFS(num - 1); // 위아래 순서에 따라 log의 순서가 다르다
  }
  DFS(num);
}

stackFrame1(5); // 1 2 3 4 5
stackFrame2(5); // 5 4 3 2 1
