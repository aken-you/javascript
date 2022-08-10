if (a) {
  console.log("True");
} else {
  console.log("False");
}

// truethy(참 같은 값)

// falsy(거짓 같은 값)
// 0 -0 0n "" null undefined NaN

// 활용

const getAge = (person) => {
  if (!person) {
    return "객체가 아닙니다.";
  }
  return person.age;
};

let person = { age : 25 };
const age = getAge(person);
console.log(age);

