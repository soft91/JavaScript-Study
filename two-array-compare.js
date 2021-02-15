// 배열 선언
const arr1 = ['1','2','3','4','5'];
const arr2 = ['1','2'];

// 차집합(Difference)
console.log(arr1.filter(x => !arr2.includes(x)));

// 교집합(Intersection)
console.log(arr1.filter(x => arr2.includes(x)));

// 비교(Compare)
console.log(JSON.stringify(arr1) === JSON.stringify(arr2));