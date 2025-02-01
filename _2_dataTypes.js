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