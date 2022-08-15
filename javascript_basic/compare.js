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
