function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === "number") {
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      reject("주어진 값이 숫자형 값이 아닙니다.");
    }
  }, 2000);
}

function isPositiveP(number) {
  const executor = (resolve, reject) => {
    setTimeout(() => {
      if (typeof number === "number") {
        resolve(number >= 0 ? "양수" : "음수");
      } else {
        reject("주어진 값이 숫자형 값이 아닙니다.");
      }
    }, 2000);
  };
  const asyncTask = new Promise(executor);
  return asyncTask;
}

const res = isPositiveP([]);

res
  .then((res) =>{
  console.log("작업 성공 : ", res);
})
  .catch((err) => {
  console.log("작업 실패 : ", res);
})
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
  })
}

taskA(3, 4)
  .then((a_res) => {
    console.log("A Result : ", a_res);
    return taskB(a_res);
  })
  .then((b_res) => {
    console.log("B result : ", b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log("C Result : ", c_res);
  });




taskA(3, 4).then((a_res) => {
  console.log("A result : ", a_res);
  taskB(a_res).then((b_res) => {
    console.log("B result : ", b_res);
    taskC(b_res).then((c_res) => {
      console.log("C result : ", c_res);
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