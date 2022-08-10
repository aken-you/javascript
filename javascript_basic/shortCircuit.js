// 논리 연산자: &&, ||, !

const getAge = (person) => {
  const age = person && person.age;
  return age || "객체가 아닙니다.";
};

let person = null;
const age = getAge(person);
console.log(age);

