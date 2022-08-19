if (a) {
  console.log("True");
} else {
  console.log("False");
}

// truthy(참 같은 값): boolean을 기대하는 문맥에서 true로 평가되는 값
// 예) {}, [], "0", "false", infinity, -infinity
console.log(Boolean({})); // true

// falsy(거짓 같은 값)
// false, 0, -0, 0n, "", null, undefined와 NaN
// undefined: 결과값이 없을 때 나옴


// 활용

const getAge = (person) => {
  if (!person) {
    return "객체가 아닙니다.";
  }
  return person.age;
};

let person = { age: 25 };
const age = getAge(person);
console.log(age);

