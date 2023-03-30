/*
CONDITIONALS:
- We use conditionals when a decision needs to be made.
- The conditions need to either be truthy or falsey
- Tools we have available for decision making are the following
    - if statements
    - if else statements
    - if else if - statements
    - turnary
*/

// ? Create an if statement for the condition using a 24hr clock if it's before 12pm console.log ("good morning")

let currentHour = 18;

// console.log(currentHour < 12);
/*
1. keyword - if to start the if statement
2. conditional - must result in a truth
*/
// (1)  (2)
if (currentHour < 12) {
  // inbetween the brackets is considered a block of code
  // this block of code will be executed if the conditional is true.
  console.log('Good Morning');
}

// ! Example of if - else statement

if (currentHour < 12) {
  console.log('Good Morning');
} else {
  console.log('Good Afternoon');
}

// ! Example of if -else if - else statements
// ? If the hours are between 12-5pm  the greeting should be "Good Afternoon" and if it's between 5-12am the greeting should be "Good Evening"

if (currentHour < 12) {
  console.log('Good Morning');
} else if (currentHour < 17) {
  console.log('Good Afternoon (if-else-if)');
} else {
  console.log('Good Evening');
}

// ? Write a conditional based on age will store in a variable the price of the movie ticket;
// Child Price = 5 (age 10) 10 or younger
// Adult Price = 10
// Senior Price = 8  age(age 55) 55 and older
// Addon Challenge:
// Add a military discount to seniors and adult tickets discount of 1 dollar off
let age = 18;
let priceOfTicket = 0;
let isMilitaryMember = true;

// If statements...
if (age <= 10) {
  priceOfTicket = 5;
} else if (age >= 55) {
  priceOfTicket = 8;
  isMilitaryMember === true ? (priceOfTicket = priceOfTicket - 1) : (priceOfTicket = priceOfTicket);
} else {
  priceOfTicket = 10;
  isMilitaryMember === true ? (priceOfTicket = priceOfTicket - 1) : (priceOfTicket = priceOfTicket);
}
console.log('Price of the ticket is: $' + priceOfTicket);

// ! Turnaries

/*
1. Conditional that will result in a true or false
2. Add a (?) and what is on the right side of the questionmark up to the colin is what will happen if it is true
3. Code for the truth
4: Truth and False divider
5: Code for the false

       (1)                 (2)         (3)                       (4) (5)
 isMilitaryMember === true ? (priceOfTicket = priceOfTicket - 1) :(priceOfTicket = priceOfTicket);
*/

// ? Write an if/else statement to determine if the current seconds are odd or even.
// ? If even, console.log "The current second is 22 and it is even".
// ? If odd, console.log "The current second is 23 and it is odd"

// ! Bonus: Create a ternary to solve this

let currentTime = new Date();
let currentTimeInSeconds = currentTime.getTime() / 1000;

if (currentTime % 2 === 0) {
  console.log(`The current second is ${currentTimeInSeconds} and it is even`);
} else {
  console.log(`The current second is ${currentTimeInSeconds} and it is odd`);
}

let randomNumber = 7;
let color = '';
switch (randomNumber) {
  case 1:
    color = 'red';
    break;
  case 2:
    color = 'blue';
    break;
  case 3:
    color = 'pink';
    break;
  case 4:
    color = 'purple';
    break;
  case 5:
    color = 'white';
    break;
  case 6:
  case 7:
    color = 'green';
    break;
  default:
    color = 'unknown';
}
