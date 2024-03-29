//
// Comparison Operators
/*
Equal
double equal (==)
triple equal (===) - equal value and equal type

Not Equal
(!=)
(!==) - not equal value not equal in type

For Numbers (Greater than , less than)
 (>) - greater than
 (<) - less than
 (>=) - greater than or equal to
 (<=) - less than or equal to

 Logical Operators
  && - and
  || - or

*/

let helicopter1 = 'blackHawk';
let helicopter2 = 'Blackhawk';

console.log(helicopter1.toUpperCase() == helicopter2.toUpperCase()); //returns a boolean

let myAge = 42;
let friendAge = '42';

console.log('my age double', myAge == friendAge);
console.log('my age triple', myAge === friendAge);

let name1 = 'Robin';
let name2 = 'Batman';

console.log(name1 != name2);

console.log('not age', myAge !== friendAge);

let num1 = 10;
let num2 = 5;

console.log(num1 > num2);

let joiningMilitaryAge = 18;
let maxJoiningMilitaryAge = 34;

let bethAge = 17;
let hankAge = 38;

console.log(bethAge >= joiningMilitaryAge);

console.log('hank', hankAge >= joiningMilitaryAge && hankAge <= maxJoiningMilitaryAge);

let person1Permissions = 'admin';
let person2Permissions = 'user';
let person3Permissions = 'guest';

let isViewableAdmin = person1Permissions === 'admin' || person2Permissions === 'user';

console.log('isViewableAdmin', isViewableAdmin);

// ? Mini Challenge:
// Create a variable called isEven1 and isEven2
// the variable will be true if the value is even, else false if odd
// Test values: 33, 122

let isEven1 = 33;
let isEven2 = 122;
console.log('Mini Challenge: ');
console.log(isEven1 % 2 === 1); //true
console.log(isEven2 % 2 === 1); //false
console.log(isEven1 % 2 === 0); //false
console.log(isEven2 % 2 === 0); //true
