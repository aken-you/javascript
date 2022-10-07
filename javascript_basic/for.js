const arr = ['a', 'b', 'c'];

for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let person = {
  name: "유수아",
  age: 20,
  tall: 170
};

// for...in 반복문: 객체에서 문자열로 키가 지정된 모든 열거 가능한 non-Symbol 속성에 대해 반복
for (key in person) {
  console.log(key);
} // name, age, tall

const a = [4, 5, 6, 7];
for(let x in a){
  console.log(x);
} // 인덱스 출력

// for...of: 배열 순회
for(let x of a) {
  console.log(x);
} // 배열 순회

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
