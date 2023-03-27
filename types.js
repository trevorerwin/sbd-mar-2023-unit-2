/*
  Types - Data Types

  - Strings
  - Numbers
  - Booleans
*/

/*
  Strings:
    - Datatypes used to represent text and they are wrapped in single or double quotes, or backticks

*/

// Combining strings (Concatenation)
let greeting = 'Good Morning';
let firstName = 'Trevor';
console.log(greeting + firstName);
// ! output: Good MorningRob
// add a space in between --> + " " +

// Template Literal - allows string interpolation
let fullGreeting = `${greeting} ${firstName}`;
console.log(fullGreeting);

// ! If you want to know what TYPE the variable is, you can use the keyword 'typeof'

console.log(typeof firstName);

// To determine the size of the string, you use the .length method
let animal = 'horse';
console.log(animal.length);

/*
  Numbers:

*/

let currentTemp = 38;
console.log(typeof currentTemp);

let funkyNumber = 0.2 + 0.1;
console.log(funkyNumber);

// ! Be careful of mismatching Strings and Numbers
let myAge = '42';
let friendAge = 34;
console.log(myAge + friendAge);

// parseInt(myAge)

// ! Number Operators
/*
  Addition (+)
  Subtraction (-)
  Multiplication (*)
  Division (/)

  Exponents (**)
  Modulus (%) - Remainder
*/

// ? Even vs. Odd Numbers
console.log('odd', 33 % 2); // remainder is 1 --> odd
console.log('even', 32 % 2); // remainder is 0 --> even

// ? How do I take what I had before and add to it
let totalPrice = 0;
let item1 = 5;
totalPrice = totalPrice + item1;
console.log(totalPrice);
let item2 = 10;
totalPrice += item2;
console.log(totalPrice);

// ! Booleans
// Booleans only have two possible values (true or false)

let isOver21 = true;
let isCloudy = false;

console.log(typeof isCloudy);
