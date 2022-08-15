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

// 항상 이행 상태의 프로미스로 값을 감싸 이행된 프로미스 반환
helloAsync().then((res) => {
  console.log(res);
});