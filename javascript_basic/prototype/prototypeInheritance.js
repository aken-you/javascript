// 함수의 prototype 프로퍼티

// 다른객체를 참조하는 경우 참조 대상을 prototype
// object에서 프로퍼티를 읽으려고 하는데 해당 프로퍼티가 없으면 prototype에서 프로퍼티를 찾음: 프로토타입 상속

// prototype 값 설정: __proto__(많이 안씀) -> Object.getprototypeOf나 Object.setPrototypeOf써서 프로토타입을 획득하거나 설정합니다.
let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};
// animal이 rabbit의 prototype이 되도록 설정
rabbit.__proto__ = animal;

// prototype이 참조하고 있는 객체인 animal에서 eats를 얻어낸다.(eats = 상속 프로퍼티)
console.log(rabbit.eats);
console.log(rabbit.jumps);

// 객체는 [[Prototype]]이라는 숨김 프로퍼티를 갖는다.
// 이 숨김 프로퍼티 값이 null이거나 다른객체에 대한 참조가 됨
console.log(animal.hasOwnProperty('eats'));

// rabbit은 animal을 상속 받는다.

let animal2 = {
  eats: true,
  walk() {
    console.log('동물이 걷는다.');
  },
};

let rabbit2 = {
  jumps: true,
  __proto__: animal2,
};

rabbit2.walk();

// prototype 체이닝
// 1. 순환 참조 x
// 2. __proto__의 값은 객체나 null만 가능
// 3. 객체엔 오직 하나의 prototype만 존재
let longEar = {
  earlength: 10,
  __proto__: rabbit2,
};

longEar.walk();
console.log(longEar.jumps);

// prototype은 프로퍼티를 읽을 때만 사용
// 프로퍼티를 추가, 수정, 지우는 연산은 객체에 직접 해야함

// 접근자 프로퍼티
let user = {
  name: 'Jone',
  surname: 'Smith',

  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
};

console.log(admin.fullName); // Jone Smith

// setter함수 실행 -> this == admin
admin.fullName = 'Alice Cooper';

console.log(admin.fullName); // Alice Cooper
console.log(user.fullName); // Jone Smith

// this가 나타내는 것
// this는 언제나 . 앞에 있는 객체
let animal3 = {
  walk() {
    if (!isSleeping) {
      console.log('동물은 걷고 있습니다.');
    }
  },
  sleep() {
    this.isSleeping = true;
  },
};

let rabbit3 = {
  name: '하얀 토끼',
  __proto__: animal3,
};

// rabbit3에 새로운 프로퍼티 isSleeping 추가 그 값을 true로 변경
rabbit3.sleep();

console.log(rabbit3.isSleeping); // true
console.log(animal3.isSleeping); // undefined(프로토타입에는 isSleeping이라는 프로퍼티가 없음)
// 즉, 메서드는 공유되지만, 객체의 상태는 공유되지 않음

// for ... in 반복문
let animal4 = {
  eats: true,
};
let rabbit4 = {
  jumps: true,
  __proto__: animal4,
};

console.log(rabbit4); // [ 'jumps' ]
for (let prop in rabbit4) console.log(prop); // jumps, eats

// for ... in은 오직 열거 가능한 프로퍼티만 순회 대상에 포함
for (let prop in rabbit4) {
  let isOwn = rabbit4.hasOwnProperty(prop);

  if (isOwn) {
    console.log(`객체 자신의 프로퍼티: ${prop}`); // jumps
  } else {
    console.log(`상속 프로퍼티: ${prop}`); // eats
  }
}
// rabbit < animal < Object.prototype < null
// animal은 객체 리터럴 방식으로 선언했기 때문에 Object.prototype을 상속 받음
// 상속 프로퍼티에 hasOwnProperty가 출력되지 않은 이유: 열거 가능한 프로퍼티가 아님
