// 10. 이분 검색

// 임의의 N개의 숫자가 입력으로 주어집니다. N개의 수를 오름차순으로 정렬한 다음 N개의 수 중 한 개의 수인 M이 주어지면 이분검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구하는 프로그램을 작성하세요. 단 중복값은 존재하지 않습니다.
// ▣ 입력설명
// 첫 줄에 한 줄에 자연수 N(3<=N<=1,000,000)과 M이 주어집니다. 두 번째 줄에 N개의 수가 공백을 사이에 두고 주어집니다.
// ▣ 출력설명
// 첫 줄에 정렬 후 M의 값의 위치 번호를 출력한다.
// ▣ 입력예제 1
// 8 32
// 23 87 65 12 57 32 99 81
// ▣ 출력예제 1 3

// solve.1 O(N)
const solution1 = (arr, num) => {
  let answer = 1;

  for (el of arr) {
    if (el < num) answer++;
  }
  return answer;
};

// solve.2 O(logN)
const solution2 = (arr, num) => {
  let answer;
  arr.sort((a, b) => a - b);

  let sIdx = 0;
  let eIdx = arr.length - 1;
  while (sIdx <= eIdx) {
    let mid = Math.floor((eIdx + sIdx) / 2);
    if (arr[mid] === num) {
      answer = mid + 1;
      break;
    }
    if (arr[mid] <= num) {
      sIdx = mid + 1;
    } else {
      eIdx = mid - 1;
    }
  }

  return answer;
};

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution1(arr, 32));
console.log(solution2(arr, 32));

// 처으 startIdx = 0, endIdx = arr.length - 1
// 미드 = lenth.arr/2.mathfloor(5) 작을 경우 startIdx = 0(유지), endIdx = mid - 1(4)
// 미드 = 5/2.Math.floor(2) 작을 경우 startIdx = 0(유지), endIdx = mide - 1(1)
// 미드 = 2 클 경우 startIdx = mid +1(3), endIdx = 4(유지)
// ...
