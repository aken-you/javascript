console.log(helloB()) // 안녕
console.log(hello()) // 참조오류

let hello = function() {
  return "안녕";
}; // 함수 표현식: 함수를 값으로 받는 것 -> 호이스팅 대상 아님


function helloB() {
  return "안녕";
} // 함수 선언식 -> 호이스팅 발생