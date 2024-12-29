// 1). Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

let side1 = 5;
let side2 = 6;
let side3 = 7;
let s = (side1 + side2 + side3)/2;
let area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)))
console.log(`Area of tringle is ${area}`);

// 3). Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
//[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f =
// temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

let temp_fah = 140
let temp_cel = (temp_fah - 32)*5/9;
console.log(`temp in the celsius ${temp_cel} and temp is fah. ${temp_fah}`);


// 4). Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.


let num = 15;
if(num > 13) {
    const ans = (num - 13)*2;
    console.log(`number is greater than 13 and your ans is ${ans}`) 
}

// 5). Write a JavaScript program to find the largest of three given integers.

const num1 = 5;
const num2 = 9;
const num3 = 6;

if(num1 < num2 ) {
    if(num2 < num3) {
        console.log(`largest number is ${num3}`)
    }
    else {
        console.log(`largest number is ${num2}`)
    } 
}
else {
    if(num1 < num3) {
        console.log(`largest number is ${num3}`)
    }
    else {
        console.log(`largest number is ${num1}`)
    } 
}


// 5).Write a JavaScript program to check the total marks of a student in various
// examinations. The student will get A+ grade if the total marks are in the
// range 89..100 inclusive, if the examination is "Final-exam." the student will
// get A+ grade and total marks must be greater than or equal to 90. Return
// true if the student get A+ grade or false otherwise.


const reguler_exam = 90;
const final_exam = 90;
if(reguler_exam >= 89 && reguler_exam <= 100) {
    console.log(`This student is get the A+ grade in reguler exam and marks is ${reguler_exam}`);
} 
else {
    console.log(`this student is not get A+ grade`)
}

if(final_exam >= 90 && final_exam <= 100 ) {
    console.log(`This student is get the A+ grade in final exam and marks is ${final_exam}`);
}
else {
    console.log(`this student is not get A+ grade`)
}