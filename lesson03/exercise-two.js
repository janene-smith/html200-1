/* exercise-two.js - lesson3-challenge2 - janeneSmith */

/* 1. Make a string variable of a sentence with least five words and a period. */
let dinnerTime = ['Tacos', 'on', 'Tuesday', 'are', 'tasty.'];

const dinnerTimeMenu = dinnerTime.join(' ');

console.log(dinnerTime);
console.log(dinnerTimeMenu);

// [object Array] (5)["Tacos","on","Tuesday","are","tasty."]
"Tacos on Tuesday are tasty."


/* 2. Make an array from that sentence and console.log the third word. */
const dinnerTime = ['Tacos', 'on', 'Tuesday', 'are', 'tasty'];

console.log(dinnerTime);
console.log(dinnerTime[2]);

// [object Array] (5)["Tacos","on","Tuesday","are","tasty"]
"Tuesday"
