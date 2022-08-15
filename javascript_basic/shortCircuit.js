// 논리 연산자: &&(and), ||(or), !(not)
// &&: 피연산자들이 모두 true일 경우만 true 반환
// ||: 피연산자들의 값 중 하나라도 true가 있으면 true 반환
// !: 피연산자 값의 반대 값 반환

const getAge = (person) => {
  const age = person && person.age;
  return age || "객체가 아닙니다.";
};

let person = null;
const age = getAge(person);
console.log(age);
