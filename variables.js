// 3 ways to declare variables - [var, let, const]

/**
 * Don't use var - use let instead
 *  1 - var is scoped to immediate function body, let is scoped to immediate enclosing block denoted by {}
 *  2 - Hoisting not a concern for let. var can be referenced before declaration, let cannot
 *  3 - Global object binding: At the top level, let does NOT create a property on the global object, whereas var does
 *  4 - var will let you re-declare the same variable in same scope, let raises a SyntaxError
 */

var firstName = 'Rob';
//(1) (2)    (3) (4)

/**
 * 1 - JS keyword denotes creation of variable
 * 2 - Name of variable that developer will reference
 * 3 - Assignment operator
 * 4 - Initial value it gets set to
 */
console.log('firstName', firstName);

// ! JS variables are CASE sensitive

// ? Reassignment
// No need for a [var, let, or const]
firstName = 'Jordan';
console.log('firstName', firstName);

// ? Can you declare a variable without assigning it

var lastName;
console.log('lastName', lastName);
lastName = 'Smith';
console.log('lastName', lastName);

// ! using var and let, you can reassign. using const you CANNOT

// Naming your variables is important - stay away from single letters/numbers

// ? Create variable used to store a current temp, console.log

let currentTemp = 38;
console.log('currentTemp', currentTemp);
