// Promise

function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === 'number') {
      resolve(number >= 0 ? '양수' : '음수');
    } else {
      reject('주어진 값이 숫자형 값이 아닙니다.');
    }
  }, 2000);
}

// executor(실행 함수)
// new Promise에 전달되는 함수
// executor의 인수 resolve와 reject는 자바스크립트에서 자체적으로 제공하는 콜백
// 인수로 넘겨준 콜백 중 하나를 반드시 호출 -> 객체의 상태가 변화(처리된 프로미스)
// 보통 시간이 걸리는 일을 수행

function isPositiveP(number) {
  const executor = (resolve, reject) => {
    setTimeout(() => {
      if (typeof number === 'number') {
        resolve(number >= 0 ? '양수' : '음수');
      } else {
        reject('주어진 값이 숫자형 값이 아닙니다.');
      }
    }, 2000);
  };
  const asyncTask = new Promise(executor);
  return asyncTask;
}

const res = isPositiveP([]);

// .then의 첫 번째 인수는 프라미스가 이행되었을 때 실행되는 함수, 실행 결과를 받음
// .then의 두 번째 인수는 프라미스가 거부되었을 때 실행되는 함수, 에러를 받음
res.then(
  (result) => console.log('작업 성공: ', result),
  (error) => console.log('작업 실패: ', error)
);
// 작업이 성공적으로 처리된 경우만 다루고 싶으면 인수 하나만 전달
// .catch(f)는 .then(null, f)과 같다.
res
  .then((res) => {
    console.log('작업 성공 : ', res);
  })
  .catch((err) => {
    console.log('작업 실패 : ', res);
  });

// isPositive(
//   [5],
//   (res) => {
//     console.log("성공적으로 수행됨 : ", res);
//   },
//   (err) => {
//     console.log("실패 하였음 : ", err);
//   }
// );

function taskA(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}

function taskB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000);
  });
}
function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 2000);
  });
}

taskA(3, 4)
  .then((a_res) => {
    console.log('A Result : ', a_res);
    return taskB(a_res);
  })
  .then((b_res) => {
    console.log('B result : ', b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log('C Result : ', c_res);
  });

taskA(3, 4).then((a_res) => {
  console.log('A result : ', a_res);
  taskB(a_res).then((b_res) => {
    console.log('B result : ', b_res);
    taskC(b_res).then((c_res) => {
      console.log('C result : ', c_res);
    });
  });
});

// 콜백 지옥
// taskA(3, 4, (a_res) => {
//   console.log("task A : ", a_res);
//   taskB(a_res, (b_res) => {
//     console.log("task B : ", b_res);
//     taskC(b_res, (c_res) => {
//       console.log("task C : ", c_res);
//     });
//   });
// });
