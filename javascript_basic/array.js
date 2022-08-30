let arr = [1, 2, 3, 4]; // 배열 리터럴
console.log(arr);

// 배열 리터럴은 어떤 자료형이든 넣어도 상관 없음
// 1)
console.log(arr[0]); // 1
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]); // 4

// 2)
for (let x of arr) {
  console.log(x);
}

// 3)
arr.forEach((elm) => console.log(elm));

// 배열의 가장 앞에 요소 추가
arr.unshift(0);
console.log(arr);

// 배열의 가장 마지막에 요소 추가
arr.push(6);
arr.push({ key: 'value' });
console.log(arr);

// 배열의 가장 앞 요소 삭제
arr.shift();
console.log(arr);

// 배열의 가장 마지막 요소 삭제
arr.pop();
console.log(arr);

// 배열의 길이 -> 자동으로 갱신
console.log(arr.length);

// 2차원 배열 길이
const b = [
  [1, 2, 4],
  [3, 4],
];
console.log(b.length); // 2
console.log(b[0].length); // 3
console.log(b[1].length); // 2

// 배열의 중간 요소 삭제
// splice(시작 index, 삭제 갯수)
const target = ['가', '나', '다', '라', '마', '바'];
target.splice(2, 2); // 다 라 삭제
console.log(target); // 가 나 마 바
target.splice(2); // 마 이후로 다 삭제
console.log(target); // 가 나
target.splice(1, 0, '캬'); // 1 index 앞에 캬 추가
console.log(target); // 가 캬 나
