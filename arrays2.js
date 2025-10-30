let a1 = [1, 2, 3, "Noor", 5, "Ravi"]
let a2 = [4, 7, 786, "Sneha", "Aarti"]

// let allPeople = a1.concat(a2);
// console.log(a1);
// console.log(allPeople);

// let allPeople2 = [...a1, ...a2] //spread operator
// console.log(allPeople2);

const realArr = [1,2,[3,4, [5,6,7]]]
const flatArr = realArr.flat(Infinity) //Infinity is depth !!
console.log(flatArr)

let string1 = "Noor is badass boy !!"

console.log(Array.from(string1))
console.log(Array.from({name : "Noor"})) // key se array bnaye ya fir value se....it got confused, hence prints empty array !!

