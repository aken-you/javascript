// 숫자 -> 문자
// toString
console.log((123.1).toString());
// 10진수 5를 이진수로 변환하여 문자로 출력
console.log((5).toString(2));

// Stirng
console.log(String(123));

// 문자 -> 숫자
let a = 1;
let b = '2';
// parseInt: int로 형변환, 몫 구할 때 사용
console.log(a + parseInt(b)); // 3
console.log(parseInt(12 / 5));

console.log(typeof parseInt('123'));
console.log(typeof Number('123'));

// parseInt vs Number
console.log(parseInt('3월')); // 3
console.log(Number('3월')); // NaN

// parseInt의 2번째 파라미터는 인수
// 밑의 예시는 '123' 문자를 2진수로 변환
console.log(parseInt('123', 2));
