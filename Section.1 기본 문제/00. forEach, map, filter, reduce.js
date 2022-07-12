// forEach
// function forEach(predicate, thisArg)

let arr = [10, 11, 12, 13, 14, 15];

function foreach(arr) {
  arr.forEach((el, idx, arr, thisArg) => console.log(el, idx, arr, thisArg));
}

foreach(arr);

// map
// 배열을 탐색하며 새로운 배열을 만든다
// callback함수에 의해 return된 값을 배열에 다시 담는다.
// 조건에 의해 필터 되어도 조건에 안맞는 요소sms undefined로 채워진다
// => map이전 이후 배열의 길이는 동일 하다!!
// arr.map(callback(currentValue[, index[, array]])[, thisArg])

function map(arr) {
  let arr2 = arr.map((el) => {
    if (el >= 12) return el;
  });
  console.log(arr); // [ 10, 11, 12, 13, 14, 15 ]
  console.log(arr2); //[ undefined, undefined, 12, 13, 14, 15 ]
}

map(arr);

// filter
// 배열을 탐색하여 callback함수에 의해 true를 리턴한 요소만 배열에 담는다.
function filter(arr) {
  let arr2 = arr.filter((el) => {
    return el >= 12;
  });
  console.log(arr); // [ 10, 11, 12, 13, 14, 15 ]
  console.log(arr2); //[ 12, 13, 14, 15 ]
}

filter(arr);
