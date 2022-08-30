// <문자>.padStart(자리수, <채워야 할 문자>)
// <문자>의 길이가 자리수보다 부족하면 앞에 <채워야할 문자> 추가함
console.log("1".padStart(4,"0"))
console.log("hi".padStart(6,"Hi"))
console.log("hi".padStart(7,"Hi"))

// <문자>.padEnd(자리수, <채워야 할 문자>)
console.log("1".padEnd(4,"0"))
console.log("hi".padEnd(6,"Hi"))
console.log("hi".padEnd(7,"Hi"))
