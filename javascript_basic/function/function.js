function getArea(width, height) {
  let area = width * height;
  return area;
} // 함수 선언식

let area1 = getArea(100,200);
console.log(area1);

console.log(area); // let은 blockscope이기 때문에 참조오류 발생