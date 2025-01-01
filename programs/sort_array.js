//Sort an array by both ascending and descending order?


const arr = [2,14,9,22,0,-2];

const ascending_order = arr.slice().sort((a,b) => a - b);
const decendinng_order = arr.slice().sort((a,b) => b - a );

console.log(`Accending order on array ${ascending_order}`);
console.log(`This is desending order of array ${decendinng_order}`);


