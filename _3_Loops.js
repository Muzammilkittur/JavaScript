// we have 3 types of Loops in JS,
// For Loops,
// While Loops,
// do while Loops.

// 1- For Loops

for (let i=1; i<= 5; i++) {
    console.log("Muzammil")
}

// sum of loop.
let sum = 0;
for (let i=1; i<=5; i++){
    sum = sum+ i;
}
console.log("sum of i is,", sum)



for (i=0; i<10; i++) {
    console.log("print value of i =", i)
}


// Template Strings.
// Template Strings are the special Strings, created by the `Back tick`.. and these are used for "String Interpolation"

//"String Interpolation" means in a Template String we can add an Expression or variable using "${variable}"


let specialString = `the result of Sum is ${sum}`;
console.log(specialString)

// or Expression
let specialString1 = `the result of Sum is ${sum+sum}`;
console.log(specialString1)


// Escape Characters.
// ------------    1). \n  (next Line)
// ------------    2). \t  (Tab between string)

// Examples.
let specialString2 = `      the result in next line\nresult is ${sum+sum}           `;
console.log(specialString2)

// Examples.
let specialString3 = `there is a tab<\t>before me ${sum+sum}`;
console.log(specialString3)

console.log(specialString3.length)  // it is 29 not 30. 



// String Methods
console.log(specialString3.toUpperCase())
console.log(specialString3.toLowerCase())
console.log(specialString3.trim())    // trims the inital and last spaces of a string
console.log(specialString.charAt(1))   // gives a value at the index mentioned.



// Practice Example-1, 
// Create a prompt, user will enter his full name, and Generate a username for him using @ before the name, and total lengh after the name.
let user = prompt("Enter Full Name");
result = `@${user}${user.length}`
console.log(result)



// 'for of' looping 
let cities = ["mumbai", "delhi", "agra", "kolkata"]
for (let city of cities) {
    console.log(city)
}