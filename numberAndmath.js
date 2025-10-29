let val1 = 54545.564234
let val2 = 45343.43432

let val3 = val1 + val2
console.log(val3.toFixed(2));
console.log(val3.toPrecision(1));

let hundreds = 143454
console.log(hundreds.toLocaleString('en-IN'));

let mx = 10;
let mn = 3;

// values b/w 3 and 10
console.log(Math.floor(Math.random()*(mx-mn+1)) + mn);