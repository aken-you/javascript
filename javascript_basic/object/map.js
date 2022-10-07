// Map(): key-value 페어로 이루어짐
// 객체와는 다르게 메소드만을 이용해 값을 넣고 뺀다.
// key를 사용해서 value를 get, set할 수 있음
// key들은 중복 x -> 하나의 key에 하나의 value만

let me = new Map();
me.set('name', 'sooa');
me.set('age', 21);
console.log(me);
console.log(me.get('name')); // sooa
console.log(me.get('age')); // 21

// has(): 주어진 key가 존재하는지 확인
console.log(me.has('name')); // true
console.log(me.has('height')); // false

console.log(me.keys());

// size: map에 담겨있는 엔트리의 개수 조회
console.log(me.size); // 2

// delete(): 엔트리 삭제
me.delete('age');
console.log(me.has('age')); // false

// clear(): 모든 엔트리 삭제
me.clear();
console.log(me.size); // 0

// map 장점
// 객체에서는 문자열 또는 심볼만 프로퍼티의 키로 사용 가능(문자열이나 symbol 값 이외의 값을 지정하면 암묵적으로 타입 변환되어 문자열이 된다)
// map에서 문자열이 아닌 값도 키로 가능
const errorObj = {
  404: '페이지 없다',
  500: '서버 오류',
  401: '권한 없다',
};
const errorMap = new Map([
  [404, '페이지 없다'],
  [500, '서버 오류'],
  [401, '권한 없다'],
]);
console.log(errorMap); // { 404 => '페이지 없다', 500 => '서버 오류', 401 => '권한 없다' }
console.log(errorMap.entries()); // { [ 404, '페이지 없다' ], [ 500, '서버 오류' ], [ 401, '권한 없다' ] }

console.log(errorObj['404']);
console.log(errorMap.get(404));

// 순회
// 객체는 for ... in문이나 object.keys를 사용하여 키만을 순회
// map 객체는 for...of문을 통해 순회 가능

for (const [key, value] of errorMap) {
  console.log(key, value);
}
