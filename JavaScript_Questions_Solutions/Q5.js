// Q.5 What is the purpose of the array slice method

// In JavaScript, the slice method is used to return a copy of a portion of an array into a new array object selected from start to end (end not included) without modifying the original array. The purpose of the slice method is to extract a section of an array and create a new array, leaving the original array unchanged.

// Ex:
let array = [1,2,3,4,5];
let output_1 = array.slice(0, 3); 
console.log(output_1);
// [1,2,3]
let output_2 = array.slice(2, 4); 
console.log(output_2);
// [3,4]
let output_3 = array.slice(3); 
console.log(output_3);
// [4,5]