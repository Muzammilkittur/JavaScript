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

