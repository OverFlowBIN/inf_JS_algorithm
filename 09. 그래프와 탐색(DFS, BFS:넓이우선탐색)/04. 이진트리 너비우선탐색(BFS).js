// 04. 이진트리 너비우선탐색(BFS)

// 아래 트리의 너비우선탐색을 해봐라

//    1
//  2   3
// 4 5 6 7

function solution() {
  let answer = "";
  let queue = [];
  queue.push(1);
  while (queue.length) {
    let v = queue.shift();
    answer += v + " ";

    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv <= 7) queue.push(nv);
    }
  }
  return answer;
}

console.log(solution());
