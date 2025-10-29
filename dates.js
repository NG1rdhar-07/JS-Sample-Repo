let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());

// let myNewDate = new Date("01-11-2025");
// console.log(myNewDate);

// let myTimeStamp = Date.now();

// console.log(myNewDate.getTime());

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long" 
})