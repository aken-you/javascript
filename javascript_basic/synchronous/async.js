function hello() {
  return "hello";
}

// async : promise의 resolve 결과값을 반환
// 항상 promise 반환
async function helloAsync() {
  return "hello async";
}

console.log(hello()); // hello
console.log(helloAsync()); // pending 상태

helloAsync().then((res) => {
  console.log(res);
});