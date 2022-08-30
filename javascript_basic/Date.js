// new Date(year, month, date, hours, minutes, seconds, ms)
// 현재 날짜 및 시간을 나타내는 Date 오브젝트
let now = new Date();
console.log(now);

// new Date(milliseconds): utc 기준 1970년 1월 1일 0시 0분 0초에서 milliseconds 밀리초 후의 시점 저장
let Jan01_1970 = new Date(0);
console.log(Jan01_1970);

let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log(Jan02_1970);

// new Date(string): 인수 하나가 문자열이면 해당 문자열은 자동으로 parsed
let date = new Date('2020-12-12');
console.log(date);

// Date(): 현재 날짜 및 시간을 문자열로 바꿔줌(인수 무시)
console.log(Date());
console.log(typeof Date());

// Date: 생성자 함수가 존재하는 내장 객체
