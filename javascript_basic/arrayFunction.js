const arr = [1, 2, 3, 4];

// 배열의 순회 
arr.forEach((elm) => console.log(elm));

// 새로운 배열에 요소 넣기
const newArr = arr.map((elm) => elm * 2);
console.log(newArr);

// 배열에 어떤 값이 있는지 includes method는 === 연산자 사용
let number1 = 3;
let number2 = "3";

console.log(arr.includes(number1)); // true
console.log(arr.includes(number2)); // false

// 배열의 index값 호출
console.log(arr.indexOf(number1)); // 2
console.log(arr.indexOf(number2)); // -1 : 존재하지 않기 때문에

const arr2 = [
  { color : "red" },
  { color : "black" },
  { color : "blue" },
  { color : "white" },
  { color : "blue" }
];

// findIndex: 가장 먼저 조건을 만족하는 인덱스 추출
console.log(arr2.findIndex((elm) => elm.color === "blue")); // 2

// find: 조건을 만족하는 요소 추출
console.log(arr2.find((elm) => elm.color === "red"));

// filter : 배열에서 특정한 조건을 만족하는 모든 요소를 추출하는 method
const arr3 = [
  { num: 1, color : "red" },
  { num: 2, color : "black" },
  { num: 3, color : "blue" },
  { num: 4, color : "white" },
  { num: 5, color : "blue" }
];

console.log(arr3.filter((elm) => elm.color === "blue"));

// slice
console.log(arr3.slice(0,3)); // index 0에서 2까지 출력

// 배열 붙이기
const arr4 = [
  { num: 1, color : "red" },
  { num: 2, color : "black" },
  { num: 3, color : "blue" }
];
const arr5 = [
  { num: 4, color : "white" },
  { num: 5, color : "blue" }
];

// arr4 뒤에 arr5 요소 추가
console.log(arr4.concat(arr5));

// 정렬
const arr6 = ["나","다","가"];

// sort는 문자를 사전 순서대로 정렬
arr6.sort();

console.log(arr6);

// 숫자 배열
const number = [0,1,4,2,7,20,10,32,15];

number.sort();
console.log(number); // 크기 순서대로 배열 안됨 -> 요소들이 문자열이라고 생각하고 배열하기 때문

// 두 값을 비교하는 함수를 매개변수로 sort 내장함수에 넘겨줌
number.sort((a,b) => a-b);

console.log(number);

// 문자 합치기
const hello = ["json","님","안녕하세요.","또 오셨군요."];

console.log(hello.join()); // 중간에 ,들어가서 합쳐짐
console.log(hello.join(" "));