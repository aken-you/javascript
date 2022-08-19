// 문자열 비교하기
// 유니코드 순으로 문자열을 비교함

// 소문자는 대문자보다 항상 크다.
console.log('a' > 'Z'); // true

// NaN != NaN을 제외하고 NaN과 비교하면 모든 값이 다 false로 나온다.
console.log(NaN == NaN); // false
console.log('abc' < 5); // false -> 이때 'abc'가 NaN

console.log(true > false); // true

// == vs ===
// ==: 값 비교
// ===: 값과 자료형 비교

console.log(undefined == false); // false
console.log(undefined == 0); // false
console.log(undefined == ''); // false
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(typeof null); // object -> 버그


// null 병합 연산자
// a ?? b
// a가 null도 아니고 undefined도 아니면 a
// b
// (a !== null && a !== undefined) ? a : b;
let a;
a = a ?? 10;
console.log(a); // 10


// ??과 || 구분하기
let height = 0; // falsy한 값 취급 == undefined, null 취급

console.log(height || 100); // 100
console.log(height ?? 100); // 0

// ||는 첫번째 truthy한 값을 반환
// ??는 첫번째 정의된(defined)된 값을 반환
