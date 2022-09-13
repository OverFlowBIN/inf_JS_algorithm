// 04. 삽입정렬

// N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요. 정렬하는 방법은 삽입정렬입니다.
// ▣ 입력설명
// 첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
// 두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에 있습니다.
// ▣ 출력설명
// 오름차순으로 정렬된 수열을 출력합니다.
// ▣ 입력예제 1 6
// 11 7 5 6 10 9
// ▣ 출력예제 1 5 6 7 9 10 11

// solve.1 내가 작성한 코드
function solution1(arr) {
  let answer = arr;
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (temp < arr[j]) {
        arr[j + 1] = arr[j];
        if (j === 0) arr[0] = temp;
      } else {
        arr[j + 1] = temp;
        break;
      }
    }
  }
  return answer;
}

// sovle.2 reference
function solution2(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j; // 밖에서 설정 할 수 있다!!!!!!!!!!!!!!!
    for (j = i - 1; j >= 0; j--) {
      if (temp < arr[j]) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
      // break가 실행될떄 for문을 바로 나가는 것이 아니라 밑에 코드가 있으면 실행되고 나간다.
      arr[j + 1] = temp;
      // j의 scope밖이 있으므로 실행이 안된다.
      // 하지만 두번째 포문 밖에서 let j를 지정해 주면 밖에서도 사용 가능하다! => break로 j의 point가 잡혀있음.
    }
  }
  return arr;
}

// solve.3 review
function solution3(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (temp < arr[j]) {
        arr[j + 1] = arr[j];
      } else break;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution1(arr));

arr = [11, 7, 5, 6, 10, 9];
console.log(solution2(arr));

arr = [11, 7, 5, 6, 10, 9];
console.log(solution3(arr));
