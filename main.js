// function addUpTo(n) {
//   let total = 0;
//   for(let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }


// function addUpTo(n) {
//   return n * (n + 1) / 2;
// }

// let t1 = performance.now();
// addUpTo(1000000000);
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);


// 6. 연산 갯수 세기
// 7. 시간 복잡도 시각화하기
// 8. 빅오에 대한 공식 소개 들을 차례
// 20. 2단계 구체적 예제들
// ex) Write a function whick takes in a string and returns counts of each character in the string.

// 21. 3 단계 : 세부 분석
// ex) Write a function which takes in a string and returns counts of each character in the string.\
charCount("aaaa");
// {a: 4}

charCount("hello");
// {
//   h: 1,
//   e: 1,
//   l: 2,
//   o: 1
// }

charCount("Your PIN number is 1234!");
// {
//   1: 1,
//   2: 1,
//   3: 1,
//   4: 1,
//   b: 1,
//   e: 1,
//   i: 2,
//   m: 1,
//   n: 2,
//   o: 1,
//   p: 1,
//   r: 2,
//   s: 1,
//   u: 2,
//   y: 1
// }

// function charCount(str) {
//   var obj = {};
//   for(var i = 0; i < str.length; i++) {
//     var char = str[i].toLowerCase();
//     if(/[a-z0-9]/.test(char)) {
//       if(obj[char] > 0) {
//         obj[char]++;
//       } else {
//         obj[char] = 1;
//       };
//     }
//   }
//   return console.log(obj);
// }

function charCount(str) {
  var obj = {};
  for(var char of str) {
    if(isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return console.log(obj);
}

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if(!(code > 47 && code < 58) && // numeric (0-9)
     !(code > 64 && code < 91) && // upper alpha (A-Z)
     !(code > 96 && code < 123)) { // lower alpha (a-z)
    return false;
  }
  return true;
}