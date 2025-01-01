// Print the fibonacci sequence?

let num1 = 0;
let num2 = 1;
let temp;
console.log("fibonacci sequence");

for(let i = 0; i<10; i++) {
    if(num1 == 0) {
        console.log(num1);
        console.log(num2);
    }
    temp = num2;
    num2 = num1 + num2;
    num1 = temp;
    console.log(num2);
}
