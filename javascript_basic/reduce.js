// reduce((누적값, 현재값, 인덱스, 요소) => {return 결과}, 초깃값);
// 초깃값이 주어졌다면 처음 누적값 = 초깃값
// 초기값이 없으면 배열의 첫 번째 요소 사용

// 덧셈 예시
const arr = [1, 2, 3];

const initialValue = 0;

// 초기값 0
let sumWithInitial = arr.reduce((previousValue, currentValue, idx) => {
  console.log(previousValue, currentValue, idx);
  return previousValue + currentValue;
}, initialValue); 

sumWithInitial;
console.log(sumWithInitial); // 6

// 초기값 생략
sumWithInitial = arr.reduce((previousValue, currentValue) => {
  console.log(previousValue, currentValue);
  return previousValue + currentValue;
});
console.log(sumWithInitial); // 6

// reduceRight는 reduce와 동작은 같지만 요소 순회를 오른쪽에서 왼쪽으로

sumWithInitial = arr.reduceRight((previousValue, currentValue) => {
  console.log(previousValue, currentValue);
  return previousValue + currentValue;
}, 0);
console.log(sumWithInitial);

// reduce로 map과 filter 구현 가능
// map
let result = arr.reduce((acc, cur) => {
  acc.push(cur % 2 ? '홀수' : '짝수');
  return acc;
}, []);
console.log(result);
console.log(arr.map((elm) => (elm % 2 ? '홀수' : '짝수')));

// filter
result = arr.reduce((acc, cur) => {
  if (cur % 2) acc.push(cur);
  return acc;
}, []);
console.log(result); // [1, 3]
console.log(arr.filter((elm) => elm % 2 === 1));

// 비동기 프로그래밍 할 때 유용
const promiseFactory = (time) => {
  return new Promise((resolve, reject) => {
    console.log(time);
    setTimeout(resolve, time);
  });
};
[1000, 2000, 3000, 4000].reduce((acc, cur) => {
  return acc.then(() => promiseFactory(cur));
}, Promise.resolve());
