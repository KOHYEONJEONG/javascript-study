/**
 * Variable 선언하기
 * 
 * 1) var - 더이상 쓰지 않는다.
 * 2) let
 * 3) const
 */
var name = '코드팩토리';
console.log(name);

var age = 32;
console.log(age);

let ive = '아이브';
console.log(ive);

/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 */
ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// newJeans = '코드팩토리'; (에러)Assignment to constant variable.

/**
 * 선언과 할당
 * 
 * 1) 변수의 선언
 * 2) 값의 할당
 */
var name = '코드팩토리';

let girlFriend;
console.log(girlFriend);

const girlFriends; //(에러)const는 무조건 값이 초기화되어야 함. :어차피 값을 못바꾸기 때문이다.