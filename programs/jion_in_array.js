//The join() method in JavaScript is used to combine all the elements of an array into a single string. It takes an optional parameter that specifies the separator between elements in the resulting string. If no separator is provided, a comma (,) is used by default.

let arr = ["Ram", "Shyam", "Ganshyam"];
console.log(arr);

const arr2 = arr.join('-');
console.log(arr2);

const arr3 = arr.join(',');
console.log(arr3);

const arr4 = arr.join('_');
console.log(arr4);

const arr5 = arr.join("");
console.log(arr5);

const arr6 = arr.join('');
console.log(arr6);

const arr7 = arr.join();
console.log(arr7);