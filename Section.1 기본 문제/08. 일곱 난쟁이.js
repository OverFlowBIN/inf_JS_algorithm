// 일곱 난쟁이

// 왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다. 일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.
// 아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다. 뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을 기억해 냈다.
// 아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시 오.
// ▣ 입력설명
// 아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며, 아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.
// ▣ 출력설명
// 입력된 순서대로 일곱 난쟁이의 키를 출력한다.
// ▣ 입력예제 1
// 20 7 23 19 10 15 25 8 13
// ▣ 출력예제 1
// 20 7 23 19 10 8 13

// sovle.1
function solution1(arr) {
  let answer, fake1, fake2;
  let total = arr.reduce((a, b) => a + b);
  let fakeTotal = total - 100;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] + arr[j] === fakeTotal) {
        fake1 = i;
        fake2 = j;
      }
    }
  }

  answer = arr.filter((el, idx) => idx !== fake1 && idx !== fake2);

  return answer;
}

console.time("solution1");
console.log(solution1([20, 7, 23, 19, 10, 15, 25, 8, 13]));
console.timeEnd("solution1");

// solve.2
function solution2(arr) {
  let answer = arr;
  let total = arr.reduce((a, b) => a + b);
  let fakeTotal = total - 100;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === fakeTotal) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }

  return answer;
}

console.time("solution2");
console.log(solution2([20, 7, 23, 19, 10, 15, 25, 8, 13]));
console.timeEnd("solution2");

// solve.1은 돌았던 for문을 또 돌고, filter도 사용하기 때문에 속도가 매우 느리다.
// 필요없는 for문을 도는건 제거해야 하고, splice를 활용 하는 것이 좋다.
