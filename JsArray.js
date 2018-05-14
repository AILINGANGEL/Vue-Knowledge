//是否操作原数组（不），返回结果（过滤后的新数组）回调函数返回结果（如果返回true表示这一项放到新数组）
// (删除某些项的时候使用)
let newArr = [1, 2, 3, 4, 5].filter(function (item) {
    return item < 5 && item >2;
})

console.log(newArr);

// 1===1===1 false 1===1 返回true true不等于1

//map 映射， 将原有的数组映射成一个新数组, 不操作原数组，返回新数组，回调函数返回什么这一项就是什么
// [1 , 2, 3] <li>1</li><li>2</li><li>3</li>
// (更新某项的时候使用)

let newArr1 = [1, 2, 3].map((item)=>{
    return `<li>${item}</li>`;
})
console.log(newArr1.join(''));
