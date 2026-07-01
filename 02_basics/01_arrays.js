//arrays
const myArr = [0,1,2,3,4,5] // type 1
console.log(myArr[0]);
const myhero =["a","b"]
const myArr2 = new Array(1,2,3)

// methods'
// MyArr.push(6)
// console.log(MyArr);
// MyArr.pop()
// console.log(MyArr);
// MyArr.unshift(9)
// console.log(MyArr);
// MyArr.shift(9)
// console.log(myArr);
// console.log(MyArr.includes(9));
// console.log(MyArr.indexOf(3));

// const newArr = myArr2.join()
// console.log(newArr);

//slice,splice
console.log("A", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B, myArr");

const myn2 = myArr.splice(1,3)
console.log("c",myArr);
console.log(myn2);