/* dogWalkList - lesson3-challenge1 - janeneSmith */

/* 1. Create an array with at least 5 strings */
const dogWalk = ['collar', 'dog tag', 'leash', 'treats', 'dog poop bags'];

console.log(dogWalk);

// [object Array] (5)["collar","dog tag","leash","treats","dog poop bags"]

/* 2. Add an element to the end of the array */
let dogWalk = ['collar', 'dog tag', 'leash', 'treats', 'dog poop bags'];

dogWalk.push('ball');

console.log(dogWalk);

// [object Array] (6)["collar","dog tag","leash","treats","dog poop bags","ball"]

/* 3. Remove the third element */
let dogWalk = ['collar', 'dog tag', 'leash', 'treats', 'dog poop bags'];

dogWalk.splice(2, 1);

console.log(dogWalk);

// [object Array] (4)["collar","dog tag","treats","dog poop bags"]

/* 4. Create a string from the elements and comma separate them */
let dogWalk = ['collar', 'dog tag', 'leash', 'treats', 'dog poop bags'];

const dogWalkList = dogWalk.join(', ');

console.log(dogWalk);
console.log(dogWalkList);


// [object Array] (5)["collar","dog tag","leash","treats","dog poop bags"]
// "collar, dog tag, leash, treats, dog poop bags"
