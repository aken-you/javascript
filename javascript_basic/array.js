let arr = [1, 2, 3, 4]; // 배열 리터럴
console.log(arr);

// 배열 리터럴은 어떤 자료형이든 넣어도 상관 없음

console.log(arr[0]); // 1
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]); // 4

// 배열의 가장 마지막에 요소 추가
arr.push(6);
arr.push({key: "value"});
console.log(arr);

// 배열의 길이 -> 자동으로 갱신
console.log(arr.length);
