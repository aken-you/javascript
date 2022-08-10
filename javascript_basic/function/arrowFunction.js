// 화살표 함수
// 무조건 익명함수로만 사용할 수 있음

let hello = () => "안녕"; // 호이스팅 대상 아님
console.log(hello());

let sum = (a, b) => a + b;
console.log(sum(3,4));

// 메소드나 생성자 함수로 사용할 수 없음
// 메소드에 사용 x
const cat = {
  name: "meow",
  callName: () => console.log(this.name)
};

cat.callName(); // undefined

// 생성자 함수 x
const foo = () => {};
const Foo = new foo(); // TypeError: foo is not a constructor