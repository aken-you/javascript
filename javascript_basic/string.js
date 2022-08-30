const str = 'Big golas get big results.';
// substr(시작 인덱스, 추출할 길이)
console.log(str.substr(0,9));
// substring(시작 인덱스, 추출 종료 인덱스)
console.log(str.substring(0, 9));
// slice도 substring과 같은 기능
console.log(str.slice(0, 9));
// splice는 배열에서만!

// split(끊어야 할 부분, 반환할 문자 혹은 문자열의 개수)
const a = 'ac cdf dfs';
// 문자열 -> 배열
console.log(a.split('')); // ['a', 'c', ' ', 'c', 'd', 'f', ' ', 'd', 'f', 's']
console.log(a.split(' ')); // [ 'ac', 'cdf', 'dfs' ]
console.log(a.split(' ', 2)); // [ 'ac', 'cdf', 'dfs' ]
console.log(a.split()); // [ 'ac cdf dfs' ]

// 문자열 바꾸기 - replace, regex
const b = 'i like you and i love you';
// replace: 문자열 또는 정규식 패턴과 첫번째로 일치하는 문자열이 교체된 문자열 반환
console.log(b.replace('and','or')); // i or you oh my god
console.log(b.replace('you','myself')); // i like myself and i love you
// replace 메서드는 정규식 패턴을 첫번째 인자로 받는다
// 정규식 flag g을 활용하여 일치하는 모든 문자를 변경
console.log(b.replace(/you/,'myself')); // i like myself and i love you
console.log(b.replace(/you/g,'myself')); // i like myself and i love myself

// ASCII: 대문자 < 소문자
// 문자 -> ascii 숫자
console.log('A'.charCodeAt(0)); // 65
console.log('a'.charCodeAt(0)); // 97
// ascii 숫자 -> 문자
console.log(String.fromCharCode(65)); // A
console.log(String.fromCharCode(97)); // a