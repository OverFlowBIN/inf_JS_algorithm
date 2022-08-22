// 11. 뮤직비디오(결정알고리즘)

// 지니레코드에서는 불세출의 가수 조영필의 라이브 동영상을 DVD로 만들어 판매하려 한다. DVD에는 총 N개의 곡이 들어가는데, DVD에 녹화할 때에는 라이브에서의 순서가 그대로 유지 되어야 한다. 순서가 바뀌는 것을 우리의 가수 조영필씨가 매우 싫어한다. 즉, 1번 노래와 5번 노래를 같은 DVD에 녹화하기 위해서는 1번과 5번 사이의 모든 노래도 같은 DVD에 녹화해야 한다. 또한 한 노래를 쪼개서 두 개의 DVD에 녹화하면 안된다.
// 지니레코드 입장에서는 이 DVD가 팔릴 것인지 확신할 수 없기 때문에 이 사업에 낭비되는 DVD를 가급적 줄이려고 한다. 고민 끝에 지니레코드는 M개의 DVD에 모든 동영상을 녹화하기 로 하였다. 이 때 DVD의 크기(녹화 가능한 길이)를 최소로 하려고 한다. 그리고 M개의 DVD는 모두 같은 크기여야 제조원가가 적게 들기 때문에 꼭 같은 크기로 해야 한다.
// ▣ 입력설명
// 첫째 줄에 자연수 N(1≤N≤1,000), M(1≤M≤N)이 주어진다. 다음 줄에는 조영필이 라이브에서 부른 순서대로 부른 곡의 길이가 분 단위로(자연수) 주어진다. 부른 곡의 길이는 10,000분을 넘지 않는다고 가정하자.
// ▣ 출력설명
// 첫 번째 줄부터 DVD의 최소 용량 크기를 출력하세요.
// ▣ 입력예제 1
// 93 123456789
// ▣ 출력예제 1 17
// 설명 : 3개의 DVD용량이 17분짜리이면 (1, 2, 3, 4, 5) (6, 7), (8, 9) 이렇게 3개의 DVD로 녹음을 할 수 있다. 17분 용량보다 작은 용량으로는 3개의 DVD에 모든 영상을 녹화할 수 없다.

// solve.1
function solution1(arr, k) {
  let maxStack = [];

  let lt = Math.max(...arr); // 9
  let rt = arr.reduce((acc, cur) => acc + cur); // 45
  let mid = Math.floor((rt + lt) / 2); // 27

  while (lt <= rt) {
    let count = 1;
    let temp = 0;
    for (el of arr) {
      temp += el;
      if (temp > mid) {
        count++;
        temp = el;
      }
    }
    if (count <= k) {
      maxStack.push(mid);
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
    mid = Math.floor((rt + lt) / 2);
  }

  return Math.min(...maxStack);
}

// solve.2 reference
function count(songs, capacity) {
  let cnt = 1,
    sum = 0;
  for (let x of songs) {
    if (sum + x > capacity) {
      cnt++;
      sum = x;
    } else {
      sum += x;
    }
  }
  return cnt;
}
function solution2(songs, k) {
  let answer;

  let lt = Math.max(...songs);
  let rt = songs.reduce((acc, cur) => acc + cur);

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(songs, mid) <= k) {
      answer = mid;
      rt = mid - 1;
    } else lt = mid + 1;
  }

  return answer;
}

let arr = [4, 7, 9, 3, 5, 7, 6, 4, 3];
console.log(solution1(arr, 3));
console.log(solution2(arr, 3));

// 4,7,9,3,5,7,6,4,3
// 4(최대용량) => X
// 4,7(max 11), 92, 57, 64, 3 => 5개 X
// 479(max 20), 20, 7 => 3개(max20) ok, break
// 꺼꾸로도 돌려보기
// 3,4,6,7,5,2,9,7,4
// 3,4,6(max 13), 25, 76, 43 => 4개 x
// 3467(max 20), 529, 64 => 3ea ok break
// 앞으로 돌린것과 뒤로 돌린것 중 작은 값을 리턴
