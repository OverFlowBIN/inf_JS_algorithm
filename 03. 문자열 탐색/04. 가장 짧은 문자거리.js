// 04. 가장 짧은 문자거리

// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를
// 출력하는 프로그램을 작성하세요.
// ▣ 입력설명
// 첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다.
// 문자열의 길이는 100을 넘지 않는다.
// ▣ 출력설명
// 첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.
// ▣ 입력예제 1 teachermode e
// ▣ 출력예제 1 10121012210

// sovle.1 (O(n^2))
function solution1(str, t) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === t) {
      answer += 0;
      continue;
    }
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < str.length; j++) {
      if (str[j] == t) {
        min = Math.min(min, Math.abs(j - i));
      }
    }
    answer += min;
  }
  return answer;
}

// teachermode
// 10123012340
// 10321043210
// 10121012210

// sovle.1 (O(n))
function solution2(str, t) {
  let answer = "";

  let st_answer = [];
  let re_answer = [];

  let temp = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === t) {
      st_answer.push(0);
      temp = 1;
    } else if (str[i + 1] === t) st_answer.push(temp);
    else if (str[i + 1] !== t) {
      st_answer.push(temp);
      temp++;
    }
  }

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === t) {
      re_answer.unshift(0);
      temp = 1;
    } else if (str[i - 1] === t) re_answer.unshift(temp);
    else if (str[i - 1] !== t) {
      re_answer.unshift(temp);
      temp++;
    }
  }

  for (let i = 0; i < st_answer.length; i++) {
    if (st_answer[i] <= re_answer[i]) answer += st_answer[i];
    else answer += re_answer[i];
  }

  return answer;
}

// solve.3
function solution3(s, t) {
  let answer = "";
  let tIdx = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) tIdx.push(i);
  }
  console.log(tIdx);

  for (let i = 0; i < s.length; i++) {
    let temp = Number.MAX_SAFE_INTEGER;
    if (s[i] !== t) {
      for (let j = 0; j < tIdx.length; j++) {
        temp = Math.min(Math.abs(tIdx[j] - i), temp);
      }
      answer += temp;
    } else {
      answer += 0;
    }
  }
  return answer;
}

console.log(solution1("teacheeermode", "e"));

console.log(solution2("teacheeermode", "e"));

console.log(solution3("teacheeermode", "e"));
