// 예시1
let a = 1;
a > 0 ? console.log("양수") : console.log("음수"); // 음수는 사실 0 미만!

// 예시2
let b = [];
b.length === 0 ? console.log("빈 배열") : console.log("안 빈 배열");

const arrayStatus = b.length === 0 ? "빈 배열" : "안 빈 배열";
console.log(arrayStatus);

// 예시3
let c = [];

const result = c ? true : false;
console.log(result); // true

// 삼항연산자 중첩 -> 가독성 떨어짐 -> 가급적으로 if문으로 변경하기
// 90점 이상 A +
// 50점 이상 B +
// 둘다 아니면 F

let score = 30;

score >= 90 ? console.log("A+") : score >= 50 ? console.log("B+") : console.log("F");

if(score >= 90) {
  console.log("A+");
} else if (score >= 50) {
  console.log("B+");
} else {
  console.log("F");
}