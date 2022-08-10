// 배열
const noTopingCookies = ['촉촉한 쿠키', '안촉촉한쿠키'];
const topingCookies = ['바나나쿠키','딸기쿠키','초코칩쿠키'];

const allCookies = [...noTopingCookies, ...topingCookies, '함정쿠키'];
console.log(allCookies);




// 객체
const cookie = {
  base: "cookie",
  madeIn: "korea"
};
const chocochipCookie = {
  ...cookie,
  toping: "choco"
};
const blueberryCookie = {
  ...cookie,
  toping: "blueberry"
};
const cheezeCookie = {
  ...cookie,
  toping: "cheeze"
};

console.log(chocochipCookie);
console.log(blueberryCookie);
console.log(cheezeCookie);

