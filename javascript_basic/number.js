// 0b: 2진법
console.log(0b011); // 3

// 0: 8진법
console.log(0111); // 73

// 0x: 16진법
console.log(0x111); // 273

// NaN: not a number
console.log(typeof NaN); // number

// 문자 -> 숫자
console.log(typeof parseInt('123'));
console.log(typeof Number('123'));

// parseInt vs Number
console.log(parseInt('3월'));
console.log(Number('3월'));

console.log(parseInt('123', 2));
