// 02. 뒤집은 소수

// N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면
// 그 소수를 출력하 는 프로그램을 작성하세요.
// 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출 력한다.
// 단, 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.
// ▣ 입력설명
// 첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다. 각 자연수의 크기는 100,000를 넘지 않는다.
// ▣ 출력설명
// 첫 줄에 뒤집은 소수를 출력합니다. 출력순서는 입력된 순서대로 출력합니다.
// ▣ 입력예제 1
// 9
// 32 55 62 20 250 370 200 30 100
// ▣ 출력예제 1 23 2 73 2 3

// solve.1
function solution1(arr) {
  arr = arr.map((el) => Number(el.toString().split("").reverse().join("")));
  let answer = arr.filter((el) => {
    if (el > 1) {
      if (el === 2 || el === 3) return true;
      for (let i = 2; i < Math.sqrt(el); i++) {
        if (el % i === 0) return false;
      }
    } else return false;
    return true;
  });

  return answer;
}

// solve.2
function solution2(arr) {
  let answer = [];
  for (el of arr) {
    let res = 0;
    while (el) {
      let temp = el % 10;
      res = res * 10 + temp;
      el = parseInt(el / 10);
    }

    // 이부분을 isPrime 함수를 만들어 따로 해도 좋음.
    let isEqual = true;
    for (let i = 2; i < Math.sqrt(res); i++) {
      if (res % i === 0) {
        isEqual = false;
        break;
      }
    }
    if (res === 1) break;
    if (isEqual) answer.push(res);
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution1(arr));

arr = [32, 55, 62, 2, 250, 370, 200, 30, 100];
console.log(solution2(arr));
