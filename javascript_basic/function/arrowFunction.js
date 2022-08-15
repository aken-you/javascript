// 화살표 함수
// 중괄호 {}를 사용하여 return 값을 반환하고 싶다면 꼭 return써야함
// 괄호 ()로 감싸진 부분은 return 된다.

let sum = (a, b) => a + b;
console.log(sum(3, 4));

// 인수가 하나밖에 없다면 인수를 감싸는 괄호 생략
let double = (n) => n * 2;
console.log(double(3));

// 인수가 하나도 없을 때 괄호를 비워놓으면 됨, 괄호 생략 안됨
let sayHi = () => console.log('Hi');
sayHi();

// 메소드나 생성자 함수로 사용할 수 없음
// 메소드에 사용 x
const cat = {
  name: 'meow',
  callName: () => console.log(this.name),
};

cat.callName(); // undefined

// 생성자 함수 x
const foo = () => {};
const Foo = new foo(); // TypeError: foo is not a constructor
