// 부동 소수점
console.log(0.1 + 0.2); // 0.30000000000000004

// 숫자를 저장할 수 있는 칸은 최대 32칸
// 맨 앞 칸은 부호

// 순환 소수의 문제
// 0.1을 2진수로 저장하면 저장하고 있는 칸의 수가 32칸 넘어감
// 해결방법은 정수로 바꿔서 계산한 뒤 마지막에 실수로 바꿔주기
console.log((0.3 * 10 - 0.1 * 10) / 10);