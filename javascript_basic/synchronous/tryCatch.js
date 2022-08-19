// try...catch
// 1. 먼저 try {...} 실행
// 2. 에러가 없다면 try 마지막 줄까지 실행, catch 블록 건너뜀
// 3. 에러가 있다면 try 안 코드 실행 중단 -> catch(err) 블록으로 제어 흐름넘어감

// 특징
// try...catch는 실행 가능한 코드(유효한 자바스크립트 코드)에만 작동
// 동기적으로 동작
// 에러가 발생하면 에러 내용이 담긴 객체 생성