// we have 7 types of premitive data types, (Number, String, Boolean, Undefined, Null, BigInt, Symbol.)

// non-premitive, {Arrays, functions} which are basically objects.



// Arrays are basically declared by "const", and it is the set of collections, that can be written in '{}' flower brackets as below.


const student = {
    fullName : "Muzammil Kittur",
    age : 20,
    percent : 80.90,
    ispass : true,
}

// If i want to print any of the value of Object 'Student', then we have 2 options.

// Option-1,
console.log('age is with option-1', student["age"]);

// or Option-2,
console.log('age is with option-2', student.age);



// Conditional Statements.

let age = 30;
if ( age >= 18 ) {
    console.log("You can Vote");
}

if (age < 18 ) {
    console.log("You CANNOT Vote");
}


// if Else Statement
let number = 10;

if ( number < 18 ) {
    console.log("Junior");
} else {
    console.log("senior")
}



// else if Statements
let mode = "red"
let color;

if (mode ==="dark"){
    color = "dark";
} else if ( mode === "blue"){
    color = "blue";
} else if (mode === "red"){
    color = "red";
} else {
    color="white"
}
console.log(color)



// Ternary Operator....
// condition? true output : false output

result = age > 18 ? "adult" : "not adult"
console.log(result)


// Alert
alert("Hello!")  // one time alert.


// prompt is also like alert, but it will allow to enter some input for user.
prompt("Hello! prompt")

// we can print the input given by user.
let name = prompt("Enter Number");
console.log(name);


// The user input is Multiple of 5? 
if (name % 5 ===0){
    console.log("Multiple of 5")
} else {
    console.log("Not Multiple of 5")
}


// To check the Grade of Student
let grade = prompt("Enter Marks"); 
if ( grade >= 80 && grade <= 100 ) {
    console.log ("A")
} else if (grade >= 70 && grade < 80) {
    console.log("B")
} else if (grade >= 60 && grade < 70) {
    console.log("C")
} else if (grade >= 50 && grade < 60) {
    console.log("D")
} else {
    console.log("F")
}


