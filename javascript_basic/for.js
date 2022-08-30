const arr = ['a', 'b', 'c'];

for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let person = {
  name: "유수아",
  age: 20,
  tall: 170
};

// for ... in 반복문
for (key in person) {
  console.log(key);
} // name, age, tall


// 키만 출력
const personKeys = Object.keys(person);
for(let i = 0; i < personKeys.length; i++) {
  console.log(personKeys[i]);
}

// 값만 출력
const personValues = Object.values(person);
for(let i = 0; i < personValues.length; i++) {
  console.log(personValues[i]);
}

// 키랑 값이랑 동시 출력
for(let i = 0; i < person.length; i++) {
  const currentKey = personKeys[i];
  const currentValue = person[currentKey];
  console.log(`${currentKey} : ${currentValue}`);
}
