const arr = [];
for(let i = 0; i < 1000000; i++) {
    arr.push(i);
}

console.time('for')
for(let i = 0; i < arr.length; i++) {
    if(i === 999999) console.timeEnd('for')
}

console.time('forEach')
arr.forEach((value, index) => {
    if(index === 999999) {
        console.timeEnd('forEach');
    }
})

/*
    for문이 속도는 빠르지만 코드의 간결성을 위해 forEach를 적절하게 사용하는 것도 나쁘지 않은 것 같다.
    다량의 데이터를 한꺼번에 처리를 하는 일이라면 for문을 쓰는게 더 적절하다는 생각이 든다.
*/