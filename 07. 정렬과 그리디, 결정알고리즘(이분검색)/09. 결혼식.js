// 09. 결혼식

// 현수는 다음 달에 결혼을 합니다.
// 현수는 결혼식 피로연을 장소를 빌려 3일간 쉬지 않고 하려고 합니다.
// 피로연에 참석하는 친구들 N명의 참석하는 시간정보를 현수는 친구들에게 미리 요구했습니다. 각 친구들은 자신이 몇 시에 도착해서 몇 시에 떠날 것인지 현수에게 알려주었습니다.
// 현수는 이 정보를 바탕으로 피로연 장소에 동시에 존재하는 최대 인원수를 구하여 그 인원을 수용할 수 있는 장소를 빌리려고 합니다. 여러분이 현수를 도와주세요.
// 만약 한 친구가 오는 시간 13, 가는시간 15라면 이 친구는 13시 정각에 피로연 장에 존재하는 것이고 15시 정각에는 존재하지 않는다고 가정합니다.
// ▣ 입력설명
// 첫째 줄에 피로연에 참석할 인원수 N(5<=N<=100,000)이 주어집니다.
// 두 번째 줄부터 N줄에 걸쳐 각 인원의 오는 시간과 가는 시간이 주어집니다.
// 시간은 첫날 0시를 0으로 해서 마지막날 밤 12시를 72로 하는 타임라인으로 오는 시간과 가 는 시간이 음이 아닌 정수로 표현됩니다.
// ▣ 출력설명
// 첫째 줄에 피로연장에 동시에 존재하는 최대 인원을 출력하세요.
// ▣ 입력예제 1 5
// 14 18
// 12 15
// 15 20
// 20 30
// 5 14
// ▣ 출력예제 1 2

const solution1 = (arr) => {
  let count = 0;
  let timeLine = [];

  arr.forEach((el) => {
    timeLine.push([el[0], "s"]);
    timeLine.push([el[1], "e"]);
  });

  timeLine.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    return a[0] - b[0];
  });

  let temp = 0;
  for (el of timeLine) {
    if (el[1] === "s") temp++;
    else temp--;
    count = Math.max(count, temp);
  }

  return count;
};

function solution2(arr) {
  let answer = 0;

  let max = Math.max(...arr.flat());

  let time = Array.from({ length: max + 1 }, () => []);

  for (let i = 0; i < arr.length; i++) {
    time[arr[i][0]].push("s");
    time[arr[i][1]].push("e");
  }

  let temp = 0;
  for (let i = 0; i < time.length; i++) {
    if (time[i].length !== 0) {
      while (time[i].length) {
        let shift = time[i].shift();
        if (shift === "s") temp++;
        else temp--;
      }
      answer = Math.max(answer, temp);
    }
  }

  return answer;
}

let arr = [
  [14, 24],
  [12, 30],
  [15, 20],
  [20, 22],
  [5, 14],
];

console.time("test");
console.log(solution1(arr));
console.timeEnd("test");

console.time("1");
console.log(solution1(arr));
console.timeEnd("1");

arr = [
  [14, 24],
  [12, 30],
  [15, 20],
  [20, 22],
  [5, 14],
];
console.time("2");
console.log(solution2(arr));
console.timeEnd("2");

// 0 1 2 3 4 5 6 7 8 9 10 11 12
// s---------e   s-----e
//       s---------e
//                 s---------e
