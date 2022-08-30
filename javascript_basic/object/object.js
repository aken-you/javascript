// 프로퍼티(property): 'key: value' 쌍으로 구성

let person = {
  key: 'value',
  key1: 123,
  key2: true,
  key3: undefined,
  key4: [1, 2],
  key5: function () {},
}; // 객체 리터럴 방식

console.log(person);
console.log(person.key1);
console.log(person['key2']);

// 함수를 이용해 값 호출

let person2 = {
  name1: 'Mike',
  age: 25,
};

console.log(getPropertyValue('name1'));

function getPropertyValue(key) {
  return person2[key];
}

// 프로퍼티 추가
person2.location = '한국';
person2['gender'] = '남성';
console.log(person2);

// 프로퍼티 값 수정
person2.name1 = 'jay';
console.log(person2);

// 프로퍼티 삭제
// delete는 단순히 객체와 속성과의 연결을 끊을 뿐 실제로 메모리에서 제거하는 것은 아님
// null이나 undefined로 설정하는 것이 낫다
delete person2.location;
person2.gender = null;
console.log(person2);

// const로 선언한 객체는 수정할 수 있다.
// 아래 예시에서 person3을 전체적으로 설정하려고 할 때만 오류
const person3 = {
  name2: 'hay',
  age: 34,
  say: function () {
    console.log('안녕');
  },
};
// 프로퍼티를 함수로 갖는 것: 객체의 method vs 프로퍼티를 함수로 갖지 않는 것: member

person3.name2 = 'jake';
console.log(person3);
person3.say();

// 대괄호 표기법
// 점은 유요한 변수 식별자(공백 x, 숫자로 시작 x, $와 _를 제외한 특수 문자 x)인 경우에만 사용
const meal = {
  한식: '비빔밥',
  일식: '초밥',
  양식: '스테이크',
  중식: '멘보샤',
};

const key = '한식';

delete person2.location;
person2.gender = null;
console.log(person2);

// const로 선언한 객체는 수정할 수 있다.
// 아래 예시에서 person3을 전체적으로 설정하려고 할 때만 오류
const person3 = {
  name2: 'hay',
  age: 34,
  say: function () {
    console.log('안녕');
  },
};
// 프로퍼티를 함수로 갖는 것: 객체의 method vs 프로퍼티를 함수로 갖지 않는 것: member

person3.name2 = 'jake';
console.log(person3);
person3.say();

// 대괄호 표기법
// 점은 유요한 변수 식별자(공백 x, 숫자로 시작 x, $와 _를 제외한 특수 문자 x)인 경우에만 사용
const meal = {
  한식: '비빔밥',
  일식: '초밥',
  양식: '스테이크',
  중식: '멘보샤',
};

const key = '한식';

console.log(meal.key); // undefined
console.log(meal[key]); // 비빔밥

// this
let girl = {
  name: 'july',
  age: 25,
  gender: 'woman',
  say() {
    console.log(`hello ${this.name}`);
  },
};

girl.say();

console.log(girl.location); // 존재하지 않는 프로퍼티의 키 -> undefined

// 키가 객체에 존재하는지 확인
console.log(`${'name' in girl}`); // true
console.log(`${'location' in girl}`); // false

// value가 객체에 존재하는지 확인
let girlValues = Object.values(girl); // 리스트 형태
console.log(girlValues.includes('july'));
console.log(girlValues.includes(26));

// 객체 정렬 방식
// 정수 프로퍼티는 자동으로 정렬, 그 외 프로퍼티는 객체에 추가한 순서 그대로 정렬
