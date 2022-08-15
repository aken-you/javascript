// 비구조화 할당(구조 분해 할당): 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게하는 표현식

var foo = ['one', 'two', 'three'];
var [red, yellow, green] = foo;
console.log(red, yellow, green);

// 선언에서 분리한 할당
var a, b;
[a, b] = [1, 2];
console.log(a, b);

// 기본값

let [one, two, three, four = '4'] = ['one', 'two', 'three'];
console.log(one, two, three, four);

// 일부 반환 값 무시
function f() {
  return [1, 2, 3];
}

var [a, b] = f();
console.log(a, b); // 1 2

// 변수에 배열의 나머지를 할당
var array = [1, 2, 3];
[a, ...b] = array;
console.log(a); // 1
console.log(b); // [2, 3]

// swap 활용
let a = 10;
let b = 20;

[a, b] = [b, a];
console.log(a, b); // 20 10

// 객체의 비구조화 할당 - key을 기준
let object = {
  one: 'one',
  two: 'two',
  three: 'three',
  name: 'july',
};

// 새로운 변수 이름으로 할당하기
let {
  name: myName,
  one: one1,
  two: two2,
  three: three3,
  four4 = 'four',
} = object;
console.log(one1, two2, three3, myName, four4);

// 객체의 비구조화 할당
const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨'
};

const captainAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카'
};

// function print(hero) {
//   console.log(`${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor}입니다.`)
// }
// print(ironMan);
// print(captainAmerica);

function print(hero) {
  const {alias, name, actor} = hero;
  console.log(`${alias}(${name}) 역할을 맡은 배우는 ${actor}입니다.`);
}

function print({alias, name, actor}) {
  console.log(`${alias}(${name}) 역할을 맡은 배우는 ${actor}입니다.`);
}

print(ironMan);
print(captainAmerica);