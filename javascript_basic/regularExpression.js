//  /패턴/플래그

const text = `대나무 빨대 구입 문의 : http://dogumaster.com http://google.com 010-1111-2222 02-333-7777 curryyou@aaa.com`;
// 웹사이트 주소
console.log(text.match(/http?:\/\/[\w\-\.]+/g));
// 전화번호
console.log(text.match(/\d{2,3}-\d{3,4}-\d{4}/g));
// 이메일 주소
console.log(text.match(/[\w\-\.]+\@{1}[\w\-\.]+/g));