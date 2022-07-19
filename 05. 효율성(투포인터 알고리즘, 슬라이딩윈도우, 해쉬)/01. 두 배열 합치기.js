// 01. 두 배열 합치기

// 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램 을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다. 두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다.
// 세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어집니다. 네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다.
// 각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.
// ▣ 출력설명
// 오름차순으로 정렬된 배열을 출력합니다.
// ▣ 입력예제 1
// 3
// 135
// 5
// 23679
// ▣ 출력예제 1 12335679

function solution1(arr1, arr2) {
  let answer = [];
  let len = arr1.length > arr2.length ? arr1.length : arr2.length;
  for (let i = 0; i < len; i++) {
    if (arr1[i] <= arr2[2]) {
      answer.push(arr1[i]);
      answer.push(arr2[i]);
    } else if (arr1[i] > arr2[2]) {
      answer.push(arr2[i]);
      answer.push(arr1[i]);
    } else if (arr2[i] === undefined) {
      answer.push(arr1[i]);
    } else {
      answer.push(arr2[i]);
    }
  }
  return answer;
}

let arr1 = [1, 3, 5];
let arr2 = [2, 3, 6, 7, 9];

console.log(solution1(arr1, arr2));
