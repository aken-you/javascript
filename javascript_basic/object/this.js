// method: 객체 프로퍼티에 할당된 함수
// method는 this로 객체를 참조한다.
let user1 = {
  name: 'Homu',
  age: 30,
  sayHi: function () {
    console.log('hi');
  }, // sayHi가 method
};

// method 단축 구문 -> 위와 완전히 동일하지 않음
let user2 = {
  name: 'Homu',
  age: 30,
  sayHi() {
    console.log('hi');
  },
};

// 대부분의 method가 객체 key 값을 활용
let user3 = {
  name: 'Homu',
  age: 30,
  sayHi() {
    console.log(`hi ${this.name}`); // this는 user3 가르킴
  },
};

user3.sayHi(); // hi Homu

// this: 객체를 나타냄
// 모든 함수에 사용

// 동일한 함수라도 다른 객체에서 호출했다면 'this'가 참조하는 값이 달라진다.
let user = { name: 'Jone' };
let admin = { name: 'Admin' };

function sayHi() {
  console.log(this.name);
}

// 별개의 객체에서 동일한 함수 사용
user.f = sayHi;
admin.f = sayHi;

user.f(); // Jone
admin.f(); // Admin

// 화살표 함수에는 this가 없다.
let group = {
  title: '1모둠',
  students: ['보라', '호진', '지민'],
  showlist() {
    this.students.forEach((student) => console.log(this.title + ':' + student));
  },
};

group.showlist();
// forEach에서 화살표 함수 사용 -> 화살표 함수에서 this.title은 showlist()가 가리키는 대상과 동일 -> this == group

let group2 = {
  title: '2모둠',
  students: ['보라', '호진', '지민'],
  showList() {
    this.students.forEach(function (student) {
      console.log(this.title + ':' + student);
    });
  },
};

group2.showList(); // undefined
