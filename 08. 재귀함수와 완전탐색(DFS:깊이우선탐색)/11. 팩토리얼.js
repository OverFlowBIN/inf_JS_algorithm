// 11. 팩토리얼

// 자연수 N을 입력하면 N!값을 구하세요. N! = n*(n-1)*(n-2)*.....*2*1입니다. 만약 N=5라면 5!=5*4*3*2*1=120입니다.
// ▣ 입력설명
// 첫째 줄에 자연수 N(3<=n<=10)이 입력됩니다.
// ▣ 출력설명
// 첫째 줄에 N팩토리얼 값을 출력합니다.
// ▣ 입력예제 1 5
// ▣ 출력예제 1 120

function solution1(num) {
  let answer = 1;

  function DFS(num) {
    if (num === 1) return answer;
    else {
      answer = answer * num;
      DFS(num - 1);
    }
  }

  DFS(num);
  return answer;
}

function solution2(num) {
  let answer;
  function DFS(num) {
    if (num === 1) return 1;
    else return num * DFS(num - 1);
  }
  answer = DFS(num);
  return answer;
}

function solution3(num) {
  let answer;

  function DFS(num) {
    if (num === 1) return 1;
    else {
      return num * DFS(num - 1);
    }
  }

  answer = DFS(num);
  return answer;
}

let num = 5;
console.log(solution1(num));
console.log(solution2(num));
console.log(solution3(num));
