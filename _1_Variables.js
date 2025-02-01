console.log("Hello");
console.log('JS');

// above is the console to print in console page of browser.


// Variables can be Declared in JS using "var", "let", "const"
// after 2015 we got ES6 from JS, Where we can use var, let & const?

// Ans :- "var" : we shouldnot use var bcz this will allow to declare same variables multiple times, which may lead to errors in code.
// have practice to use always "let" & "const".
// bcz "let" variable will not allow to declare same variables multiple times, and it allows to change the values.
// "const" will not allow to change value of a variable.


// let....
// Below are the 2 blocks of same variable as "age" using "let". which is correct.
{let age = 24}
{let age = 30}

// But if we are using in same Block, then this will not allow to keep same variable in a single block
//  {let age = 24
//   let age = 30}


// var....
// in below example we can see that "var" allows to declare same variable with same values or different values multiple times.
var name = "Muzammil"
var name = "Muzammil"
var name = "khan"


// const....
// the below example using const is will give error, and cannot change the values multiple times.

// const lastName = "kittur"
// const lastName = "kittur"




