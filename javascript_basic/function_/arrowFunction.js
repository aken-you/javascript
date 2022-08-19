// 화살표 함수
// 중괄호 {}를 사용하여 return 값을 반환하고 싶다면 꼭 return써야함
// 괄호 ()로 감싸진 부분은 return 된다.

let sum = (a, b) => a + b;
console.log(sum(3, 4));

// 인수가 하나밖에 없다면 인수를 감싸는 괄호 생략(but 명확성과 일관성을 위해 항상 인자를 괄호로 감싸기)
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

// 화살표 함수에 this가 없다.
// 화살표 함수에서 this를 참조하면, 화살표 함수가 아닌 평범한 외부 함수에서 this 값을 가져온다.
// 예시: arrow()의 this는 외부 함수 user.sayHi()의 this가 된다.
let user = {
  name: '보라',
  sayHi() {
    let arrow = () => console.log(this.name);
    arrow();
  },
};

user.sayHi(); // 보라

// 다른 예시
let group = {
  title: '1모둠',
  students: ['보라', '호진', '지민'],
  showlist() {
    this.students.forEach((student) => console.log(this.title + ':' + student));
  },
};

group.showlist();
// forEach에서 화살표 함수 사용 -> 화살표 함수에서 this.title은 showlist()가 가리키는 대상과 동일 -> this == group

// 생성자 함수 x
const foo = () => {};
const Foo = new foo(); // TypeError: foo is not a constructor

// 객체 리터럴 반환은 예상대로 작동하지 않는다.
// 이유: 중괄호 안 코드가 객체 리터럴 property가 아니라 구문으로 되기 때문
var func = () => { foo: 1 };
console.log(func()); // undefined
// 올바른 코드
var func = () => ({ foo: 1});
console.log(func());



// 화살표 함수 컨벤션

// 1. 익명 함수 사용할 때 화살표 함수 표현
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x = y;
});

// 2. 하나의 식으로 구성된 함수가 사이드 이팩트 없는 표현식 반환하는 경우
// 중괄호 생략하고 암시적 반환 사용
// 그 외에 중괄호 냅두고 return문 사용하기
// bad
[1, 2, 3].map(number => {
  const nextNumber = number + 1;
  `A string containing the ${nextNumber}.`;
});

// good - 암시적 반환 사용
[1, 2, 3].map(number => `A string containing the ${number}.`);

// good
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;
  return `A string containing the ${nextNumber}.`;
});

// 3. 항상 인자를 괄호로 감싸주기
// bad
[1, 2, 3].map(x => x * x);

// good
[1, 2, 3].map((x) => x * x);

// 4. 암시적 반환을 하는 화살표 함수 몸체 위치 적절히 설정
// bad
(foo) =>
  bar;

// good
(foo) => bar;
(foo) => (bar);
(foo) => (
  bar
);