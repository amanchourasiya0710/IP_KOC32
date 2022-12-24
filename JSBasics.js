// alert("Message for Alert Box");
let name = "Aman";
let age = 25;
let percentage = 72.6;

let income; // No initial value
income = 1; // Later value assignment is possible

// constant variable cannot be changed. Otherwise error will be thrown in the Console tab.
const college = "LPU";

// Printing to console
console.log("My first JS Program");
console.log(10);
console.log(percentage);

// Function definition
function printName(name, age) {
    console.log("Name is", name);
    console.log("Age is", age);
}

printName("Ajeet", 17); // Function call

// Local and Global Difference
function sum(a, b) {
    let s = a + b;
    return s;
}

let s = sum(3, 5);
console.log(s);

// // while loop
// let i = 1;
// // 1 2 3 4 5 .. 10
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// for loop in JavaScript
// for (let i = 0; i < 10; i += 2) {
//     console.log("for loop in JavaScript", i);
//     console.log("hello world");
// }

let arr = ["Hello", 2, "koc32", 2.5]
console.log(arr);

let len = arr.length;
console.log("Length of array", len);
let st = "";
for (let i = 0; i < len; i++) {
    st = st + " " + arr[i];
}
console.log(st);


let a = 10;

function demo() {
    a = 15;
}

console.log(a);