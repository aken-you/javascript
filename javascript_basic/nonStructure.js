// 비구조화 할당

// 배열의 선언 분리
let [one, two, three, four=""] = ["one", "two", "three"];
console.log(one, two, three);

// swap 활용
let a = 10;
let b = 20;

[a, b] = [b, a];
console.log(a, b); // 20 10

// 객체의 비구조화 할당 - key을 기준
let object = {
  one: "one",
  two: "two",
  three: "three",
  name: "july"
};

let { name: myName, one: one1, two: two2, three: three3, four4 = "four" } = object;
console.log(one1, two2, three3, myName, four4);
