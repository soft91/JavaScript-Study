const obj = {}

// TypeError
const result = obj.test.test1 ? true : false;

// AND 조건을 이용한 object TypeError 방지 코드
const result1 = obj && obj.test && obj.test1 ? true : false;

// Optional Chaning 문법을 활용한 object TypeError 방지 코드
const result2 = obj.test?.test1 ? true : false;

console.log(result1)
console.log(result2)