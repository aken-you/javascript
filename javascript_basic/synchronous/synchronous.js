function taskA() {
  console.log("A 작업 끝");
}

taskA();
console.log("코드 끝");

function one() {
  return 1;
}
function two() {
  return one() + 1;
}
function three() {
  return two() + 1;
}

console.log(three());