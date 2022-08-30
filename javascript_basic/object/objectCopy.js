// 참조에 의한 객체 복사
// 객체가 할당된 변수를 복사할 땐 객체의 참조 값이 복사

let user = { name: 'jone' };

let admin = user;
admin.name = 'pete'; // admin 참조 값에 의해 변경

console.log(user.name); // pete

// 객체 비교시 참조에 의한 비교
// 동등 연산자 ==와 일치 연산자 ===는 동일하게 동작
console.log(user == admin); // true
console.log(user === admin); // true

// 독립된 객체이기 때문에
let a = {};
let b = {};
console.log(a == b); // false
