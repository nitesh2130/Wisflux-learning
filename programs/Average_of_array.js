// Print the fibonacci sequence?


const arr = [1,1,1,1,1,1];

const sum = arr.reduce((total, num) => total + num, 0);
const average = sum/arr.length;
console.log(`this is the average of array ${average}`);
