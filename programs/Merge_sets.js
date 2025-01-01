//Merge to sets i javascript?

let set1 = new Set([1, 2, 3, 4, 5, 6]);
let set2 = new Set([3, 4, 5, 6, 7, 8, 9, 10]);

let mergeset = new Set([...set1, ...set2]);


console.log(mergeset);



// For the Array

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7, 8];

// let mergearr = new Set([...arr1,  ...arr2]);
// let arraymerg = [...mergearr];
// console.log(mergearr);
// console.log(arraymerg);