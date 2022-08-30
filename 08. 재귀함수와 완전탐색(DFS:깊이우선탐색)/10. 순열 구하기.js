// 10. 순열 구하기

// 10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력합 니다.
// ▣ 입력설명
// 첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다. 두 번째 줄에 N개의 자연수가 오름차순으로 주어집니다.
// ▣ 출력설명
// 첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다. 출력순서는 사전순으로 오름차순으로 출력합니다.
// ▣ 입력예제 1
// 3 2
// 3 6 9
// ▣ 출력예제 1
// 3 6
// 3 9
// 6 3
// 6 9
// 9 3
// 9 6
// 6

function solution(nums, m) {
  let answer = [];
  nums.sort((a, b) => a - b);
  let isUsed = Array.from({ length: nums.length }, () => 0);

  let temp = [];
  function DFS(v) {
    if (v === m) {
      answer.push(temp.slice());
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (isUsed[i] === 0) {
          isUsed[i] = 1;
          temp[v] = nums[i];
          DFS(v + 1);
          isUsed[i] = 0;
        }
      }
    }
  }

  DFS(0);
  return answer;
}

let m = 2;
let nums = [3, 6, 9];
console.log(solution(nums, m));
