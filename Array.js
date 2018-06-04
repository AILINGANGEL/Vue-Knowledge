//1) filter 是否操作原数组（不），返回结果（过滤后的新数组）回调函数返回结果（如果返回true表示这一项放到新数组）
// (删除某些项的时候使用)
let newArr = [1, 2, 3, 4, 5].filter(function (item) {
    return item < 5 && item >2;
})

console.log(newArr);

// 1===1===1 false 1===1 返回true true不等于1

//2)map 映射， 将原有的数组映射成一个新数组, 不操作原数组，返回新数组，回调函数返回什么这一项就是什么
// [1 , 2, 3] <li>1</li><li>2</li><li>3</li>
// (更新某项的时候使用)

let newArr1 = [1, 2, 3].map((item)=>{
    return `<li>${item}</li>`;
})
console.log(newArr1.join(''));

//3)includes 返回的是boolean
let arr = [1,2,3,4,55]
var r = arr.includes(5); 
console.log(r); //false boolean

//4)find 返回找到的那一项,不会改变数组,回调函数中返回true表示找到了,找到后就停止,找不到返回的是undefined
var r = arr.find((item, index)=>{ //找到具体的某一项
	return String(item).indexOf('6') > -1;
})
console.log(r);

//5)some找到true后停止,返回true,找不到返回false
//6)every找false,找到false后停止，返回false

var r = arr.some((item, index)=>{
	return item.toString().indexOf('5');
});
console.log(r);

//7)reduce 收敛 有4个参数,返回的是叠加后的结果,原数组不变,回调函数
//prev代表的是数组的第一项, next代表的是数组的第二项
//prev是undefined, next是数组的第三项
var sum = [1,2,3,4,5].reduce((prev, next, index, arr)=>{
	// console.log(arguments)//类数组,其实是一个对象，key是'0','1','2','3'等字符串
	return prev + next;//本次的返回值会作为下一次的prev
})
console.log(sum);
var sum2 = [{price: 30, count:2},{price: 30, count:3},{price: 30, count:4}].reduce((prev, next, index, arr)=>{
	return {
		price: prev.price * prev.count + next.price * next.count,
		count: 1
	}
});
console.log(sum2);

var sum2 = [0, {price: 30, count:2},{price: 30, count:3},{price: 30, count:4}].reduce((prev, next, index, arr)=>{
	return prev + next.price * next.count;
});
console.log(sum2);

var sum3 = [{price: 30, count:2},{price: 30, count:3},{price: 30, count:4}].reduce((prev, next, index, arr)=>{
	return prev + next.price * next.count;
}, 0);//默认制定第一次的prev
console.log(sum3);

//二维数组转换成一维数组
var flatArr = [[1,2,3],[4,5,6],[7,8]].reduce((prev, next, index, arr)=>{
	return prev.concat(next);
})
console.log(flatArr);



