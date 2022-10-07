function first() {
  console.log('first');
}
function second() {
  console.log('second');
  setTimeout(() => {
    console.log('second setTimeout');
  }, 0);
  new Promise((resolve) => {
    resolve('resolve');
  }).then(console.log);
  first();
}

setTimeout(second, 5000);

// 1. call stack에 anonymous 쌓임
// 2. call stack에 setTimeout(second, 5000) 쌓임 web api에 이동했다가 5초 지나면 테스크 큐에 second 함수 이동
// 3. call stack에 비어있을 때 second 함수가 call stack으로 이동
// 4. call stack에 console.log('second'), setTimeout 호출
// 5. setTimeout은 web api -> 테스트 큐로 이동
// 6. call stack에 new Promise의 call back 함수(resolve) 호출
// 7. resolve 함수와 new Promise가 call stack에 빠져 나가면 then(비동기)은 web api로 이동
// 8. call stack에 first 함수 실행되고 빠져 나감, second도 빠져나감
// 9. 테스크 큐에 있는 setTimeout함수와 then이 call stack에 이동(단, then이 먼저 이동 promise가 더 우선순위 이기때문)

function hi() {
  console.log('hi');
}
hi``;