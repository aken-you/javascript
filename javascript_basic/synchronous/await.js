function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// async : promise의 resolve를 수행한 결과
async function helloAsync() {
  return delay(3000).then(() => {
    return "Hello Async";
  });
}
helloAsync().then((res) => {
  console.log(res);
});


// 위 코드 await 이용해서 바꾸기
// await는 async 함수 안에서만 동작
// promise가 처리될 때까지 함수 실행을 기다리게 만든다. -> promise가 처리되는 동안 다른 일을 할 수 있기 때문에 cpu 리소스가 낭비되지 않음
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function helloAsync() {
  await delay(3000); // 동기로 작동 -> delay함수 실행한 다음 밑에 코드 진행
  return "Hello Async";
}

async function main() {
  console.log(await helloAsync());
}

main();
