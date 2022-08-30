// 옵셔널 체이닝 ?.
// ?. 앞의 평가 대상이 undefined나 null이면 평가를 멈추고 undefined를 반환
// ?. 앞의 변수는 꼭 선언되어 있어야 한다
let user = {}; // 객체의 키 값 자체가 존재하지 않으므로 undefined
console.log(user?.address?.street); // undefined

// ?.은 함수나 대괄호와 함께 동작
let user1 = {
  admin() {
    console.log('관리자 계정입니다.');
  },
};

let user2 = {};

user1.admin?.();
user2.admin?.();

user1 = {
  firstName: 'violet',
};

let key = 'firstName';

console.log(user1?.[key]); // violet
console.log(user2?.[key]); // undefined

delete user1?.firstName;
console.log(user1) // {}

// ?.은 읽기나 삭제하기에는 사용할 수 있지만 쓰기에는 사용할 수 없다