// 마구간 정하기(결정알고리즘)

// greedy, 결정 알고리즘 : 이분법으로 풀면 좋다!

// N개의 마구간이 수직선상에 있습니다. 각 마구간은 x1, x2, x3, ......, xN의 좌표를 가지며, 마 구간간에 좌표가 중복되는 일은 없습니다.
// 현수는 C마리의 말을 가지고 있는데, 이 말들은 서로 가까이 있는 것을 좋아하지 않습니다. 각 마구간에는 한 마리의 말만 넣을 수 있고, 가장 가까운 두 말의 거리가 최대가 되게 말을 마구간에 배치하고 싶습니다.
// C마리의 말을 N개의 마구간에 배치했을 때 가장 가까운 두 말의 거리가 최대가 되는 그 최대 값을 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 줄에 자연수 N(3<=N<=200,000)과 C(2<=C<=N)이 공백을 사이에 두고 주어집니다. 둘째 줄에 마구간의 좌표 xi(0<=xi<=1,000,000,000)가 차례로 주어집니다.
// ▣ 출력설명
// 첫 줄에 가장 가까운 두 말의 최대 거리를 출력하세요.
// ▣ 입력예제 1 53 12849
// ▣ 출력예제 1 3

// 3마리
// 1,2,8,4,9 마구간 좌표 => 1 2 4 8 9
// 1 2 3 4 5 6 7 8 9
// O O X O X X X O O
// H O X H X X X O H

// pesudocode
// 가장 가까운 거리를 이분법으로 확인하며 3개가 들어가는지 확인하는 테스트
// mid = (1 + 9)/2 => 5(가장 가까운거리 예상해보기) => 1 8 끝 => 두개 밖에 안들어감! => 미드 줄이기
// mid = (1 + 4)/2 => 2 => 1, 4, 8 (3개 들어감!) => 미드(최소거리) 늘리기
// mid = (3 + 4)/2 => 3 => 1, 4, 8 (3개 들어감) => 미드(최소거리) 늘리기
// mid = 4 + 4 => 여기서 lt, rt가 같으므로 종료
// 따라서 mid(최소거리)가 3!!

// solve.1 내가 푼것 ==> 틀림!!!!!!
function solution1(arr, k) {
  let answer = 0;
  arr = arr.sort((a, b) => a - b);

  let lt = arr[0]; // 1
  let rt = arr[arr.length - 1]; // 9
  let mid = parseInt((lt + rt) / 2); // 5

  let count = 1;
  while (lt <= rt) {
    let start = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] >= start + mid) {
        count++;
        start = arr[i];
      }
    }

    if (count < k) {
      rt = mid - 1;
    } else {
      lt = mid + 1;
      answer = Math.max(answer, count);
    }
    count = 1;
    mid = parseInt((lt + rt) / 2);
  }

  return answer;
}

// solve.2 reference
function count(stable, dist) {
  let cnt = 1;
  let start = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - start >= dist) {
      cnt++;
      start = stable[i];
    }
  }
  return cnt;
}

function solution2(stable, c) {
  let answer;
  stable.sort((a, b) => a - b);

  let lt = stable[0];
  let rt = stable[stable.length - 1];
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}

function solution3(stable, hores) {
  let answer;
  stable.sort((a, b) => a - b);

  // return: 들어간 말의 개체수
  function count(stable, interval) {
    let cnt = 1;
    let sum = stable[0];
    for (let i = 1; i < stable.length; i++) {
      if (stable[i] >= interval + sum) {
        cnt++;
        sum = stable[i];
      }
    }
    // console.log("cnt", cnt);
    return cnt;
  }

  let lt = 1;
  let rt = stable[stable.length - 1];
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (count(stable, mid) >= hores) {
      lt = mid + 1;
      answer = mid;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}

let arr = [1, 2, 8, 4, 9, 10, 14, 20, 18];
console.log(solution1(arr, 3));
console.log(solution2(arr, 3));
console.log(solution3(arr, 3));
