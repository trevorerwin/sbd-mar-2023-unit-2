/*
Functions:

- Functions provide a block of code that will will only be ran once it is `called` upon.
- It starts with a keyword  `function` followed by the name you give your function.
- Functions do NOT need to have arguements/parameters
- Functions do NOT need to return a value however they often do
- Functions get hoisted  meaning you can call on them prior to the function defination
*/

/*
1. keyword "function"
2. Function Name
3. inside the ()'s  you have arguements
*/
example1();
// (1)      (2)   (3)
function example1() {
  // any code inside here will be executed when the function is `called`
  console.log('Example1 Function Was Executed');
}

// You must call the function for it to be executed
example1();

/*
Function with Paramenters or Arguements
1. keyword "function"
2. Function Name
3. inside the ()'s we can have unlimited parameter all seperated by a comma

*/

function example2(param1, param2) {
  console.log('Example 2 function was executed');
  console.log('Param1:', param1);
  console.log('Param2:', param2);
}

example2(10, 5);
example2('Rob', 'Vanarsdall');
example2(); // still runs but comes back undefined

function sumTwoNumbers(number1, number2) {
  let total = number1 + number2;
  return total;
}

let sum1 = sumTwoNumbers(10, 5);
let sum2 = sumTwoNumbers(20, 45);

console.log(sum1, sum2);

function calculateTax(cost, taxPercentage) {
  let totalTax = cost * taxPercentage;
  return Math.round(totalTax * 100) / 100;
}

let shoppingCartTotal = 21.99;
let checkoutTax = calculateTax(shoppingCartTotal, 0.08);
let totalCheckout = sumTwoNumbers(shoppingCartTotal, checkoutTax);

console.log(checkoutTax);
console.log(totalCheckout);

// ? Write a function that will take 3 arguements (length, width, height)
// ? Function should return the volume of the Cubiod;

function cuboidVolume(l, w, h) {
  return l * w * h;
}

console.log(cuboidVolume(3, 10, 4));

// ? Write function that accept's a dogs age and returns a humans age
// ? human = (dog-2)*4 + 21

function dogToHuman(age) {
  return (age - 2) * 4 + 21;
}

console.log(dogToHuman(3));
console.log(dogToHuman(8));
console.log(dogToHuman(13));

//? Arrow functions
// let dogToHuman = (age) => {
//   return (age - 2) * 4 + 21;
// };

//? Create a function called 'divisible'
//? takes in a firstNum and secondNum
//? Return true if it divides evenly, otherwise return false
//? Refactor the code to return a ternary

function divisible(firstNum, secondNum) {
  return firstNum % secondNum === 0;
}

console.log(divisible(3, 6));
console.log(divisible(12, 2));
console.log(divisible(12, 5));
console.log(divisible(66, 8));

// When you're using arrow functions that are one line
// - omit the return because it is assumed
const divisible2 = (firstNum, secondNum) => firstNum % secondNum === 0;

console.log(divisible2(25, 5));

// ? Create a function called difference using arrow notation
//? function will return difference between two numbers

const difference = (firstNum, secondNum) => Math.abs(firstNum - secondNum);

console.log(difference(6, 10));

//! Arrow functions do NOT get hoisted. They need to be initialized first (place them above your code before you call it)

function userInputCleaner(word) {
  return word.toLowerCase().trim();
}

console.log(userInputCleaner('RaZZLE DAZzlE'));
