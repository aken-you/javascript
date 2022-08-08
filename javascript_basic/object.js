let person = {
  key: "value", // 프로퍼티(객쳋 프로퍼티, 뜻: 속성)
  key1: 123,
  key2: true,
  key3: undefined,
  key4: [1,2],
  key5: function() {}
}; // 객체 리터럴 방식

console.log(person);
console.log(person.key1);
console.log(person["key2"]);

// 함수를 이용해 값 호출

let person2 = {
  name1: "Mike",
  age: 25
};

console.log(getPropertyValue("name1"));

function getPropertyValue(key) {
  return person2[key];
}

// 프로퍼티 추가
person2.location = "한국";
person2["gender"] = "남성";
console.log(person2);

// 프로퍼티 값 수정
person2.name1 = "jay";
console.log(person2);


// const로 선언한 객체는 오류 x
const person3 = {
  name2: 'hay',
  age: 34,
  say: function() {
    console.log("안녕");
  } // 프로퍼티를 함수로 갖는 것: 객체의 method vs 프로퍼티를 함수로 갖지 않는 것: member
};
person3.name2 = 'jake';
console.log(person3);
person3.say();
// 오류 x 이유 -> person3 상수 자체를 수정하는 행동이 아님

// 프로퍼티 삭제
// delete는 메모리 해제에 관하여 직접적으로 어떠한 작업도 하지 않음 -> null 사용
delete person2.location; 
delete person2['gender'];
console.log(person2);

person3.age = null;
console.log(person3);

// this
let girl = {
  name: 'july',
  age: 25,
  gender: 'woman',
  say: function() {
    console.log(`hello ${this.name}`);
  }
};

girl.say();

console.log(girl.location); // 존재하지 않는 프로퍼티의 키 -> undefined

// 키가 객체에 존재하는지 확인
console.log(`${'name' in girl}`); // true
console.log(`${'location' in girl}`); // false