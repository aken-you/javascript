function getArea(width, height) {
  let area = width * height;
  return area;
} // 함수 선언식

let area1 = getArea(100, 200);
console.log(area1);

console.log(area); // let은 blockscope이기 때문에 참조오류 발생

// 매개변수(parameter)와 인수(argument)
// 매개변수 - 선언 / 인수 - 호출
function a(parameter) {
  console.log(parameter);
}

a('argument');

function b(x, y, z) {
  console.log(x, y, z);
  console.log(arguments);
}

b('hello', 'parameter', 'arguments'); // [Arguments] { '0': 'hello', '1': 'parameter', '2': 'arguments' }
