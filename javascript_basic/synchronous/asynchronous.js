// 비동기 방식

function taskA(a, b, cb) {
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}
function taskB(a,  cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000);
}
function taskC(a, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000);
}
taskA(3, 4, (res) => {
  console.log("A task result: ", res);
});
taskB(2, (res) => {
  console.log("B task result: ", res);
});
taskC(7, (res) => {
  console.log("C task result: ", res);
});

console.log("코드 끝");

