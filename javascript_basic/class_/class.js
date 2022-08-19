// class
// 함수의 한 종류
// constructor(): 객체의 기본 상태를 설정해주는 생성자 메서드 -> new에 의해 자동으로 호출, 객체를 초기화
// 메서드 사이엔 쉼표가 없다!

class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`안녕하세요. ${this.name}님.`);
  }
}

let user = new User('Homu');
user.sayHi();
console.log(typeof User); // function
// 위의 예시
// 1. User라는 이름을 가진 함수 생성, 함수 본문은 생성자 메서드 constructor에서 가져온다.
// 2. sayHi 같은 클래스 내에 정의된 메서드를 User.prototype에 저장한다.