// callback 함수: 변수(파라미터)로 함수를 전달 받아 함수 내부에서 실행하는 함수
// 익명의 함수 사용 -> 함수 낸부에서 실행되기 때문에
// 함수의 이름만 넘기기

function checkMood(mood, goodCallback, badCallBack) {
  if (mood === "good") {
    goodCallback();
  } else {
    badCallBack();
  }
}

function cry() {
  console.log("ACTION : CRY");
}

function sing() {
  console.log("ACTION : SING");
}

function dance() {
  console.log("ACTION : DANCE");
}

checkMood("sad", sing, cry);

// 전역변수, 지역변수 콜백함수의 파라미터로 전달 가능

let fruit = 'apple'; // 전역변수

function callBackFunc(callback) {
  let vegetable = 'tomato'; // 지역변수
  callback(vegetable); // 매개변수가 vegetable 값이 들어간 callback함수 실행
}

function eat(vegetable) {
  console.log(`fruit: ${fruit} / vegetable: ${vegetable}`);
}

callBackFunc(eat);