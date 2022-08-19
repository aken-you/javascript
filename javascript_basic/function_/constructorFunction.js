// 생성자 함수
// 1. 함수 이름의 첫 글자는 대문자로 시작
// 2. 반드시 new 연산자를 붙여 실행

// 의의: 유사한 객체를 여러 개 만들어야 할 때 사용

function User(name) {
  // this = {}; 빈 객체가 암시적으로 생성

  // 새로운 프로퍼티를 this에 추가
  this.name = name;
  this.isAdmin = false;

  // return this; this가 암시적으로 반환
}

let user = new User("유민");

console.log(user); // User { name: '유민', isAdmin: false }

// new function() {...}
// 재사용할 필요가 없는 복잡한 객체를 만들때
let user1 = new function() {
  this.name = "Hon";
  this.isAdmin = false;
}

// 생성자 함수엔 보통 return문이 없다.
// 반환해야 할 것은 모두 this에 저장 -> this가 자동으로 반환
// 만약 return문이 있다면?
// 1. 객체를 return한다면 this대신 객체가 반환
function BigUser() {
  this.name = "원숭이";
  return {name: "고릴라"};
}

console.log(new BigUser().name); // 고릴라

// 2. 원시형이 return한다면 return문이 무시
function SmallUser() {
  this.name = "원숭이";
  return 1;
}

console.log(new SmallUser().name); // 원숭이

// 생성자 내 메서드
function User(name) {
  this.name = name;
  this.sayHello = function() {
    console.log(`제 이름은 ${this.name} 입니다.`);
  }
}

let bora = new User("보라");

bora.sayHello();
