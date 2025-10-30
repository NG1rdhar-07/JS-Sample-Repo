let myArr = [34,6,658,523,54765,5,345];
// let x = myArr.length - 1

// console.log(myArr[x]);

// let myArr2 = myArr; // reference
// myArr2.push(323)

// let y = myArr.length - 1

// console.log(myArr[y])

// myArr.unshift(0) // saari array ki value shift krni pad gyi...expensive operation !!
// myArr.shift()
// console.log(myArr)

// console.log(myArr.indexOf(523));
// console.log(myArr.includes(69))

// let arr3 = myArr.join()
// console.log(myArr)
// console.log(arr3)
// console.log(typeof myArr)
// console.log(typeof arr3)

let m1 = myArr.slice(1,4);
console.log(m1);
console.log(myArr);

let m2 = myArr.splice(1,4); // 1 se 4 wala part hat jayega !!
console.log(m2);
console.log(myArr);