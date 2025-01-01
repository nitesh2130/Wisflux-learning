// Swap two numbers by reference?


let num1 = 12;
let num2 = 13;
console.log(`This is the value of num1 ${num1} and num2 is ${num2}.`);

num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;

console.log(`This is the value of num1 ${num1} and num2 is ${num2}.`);
