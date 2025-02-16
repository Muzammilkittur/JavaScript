// Functions in JS.

// myFunction is a function we created, and a function is written as 'console.log("print function");'
function myFunction() {
    console.log("print function");  // but this will not execute till the function is called.
}
myFunction()    // here myFunction is called, so result will print in console.
myFunction()    // Again we can recall the myFunction, if wanted to execute again
//...


function sum (x, y) {
    console.log("sum of x+y is :", x+y);
}

sum(3, 2)


function myNewFunction () {

    for (i=0; i<10; i++){
        console.log("loop i is ", i)
    }
    console.log(i)
}

myNewFunction()



function myNewFunction () {
    let i =10;
    if (i==0) {
console.log("helo", i)
    } else {
        console.log("None")
    }
}

myNewFunction()



// Arrow Function

// arrow function are the part of Modern JS.
// arrow functions are the functions, need to be stored in a variable. arrow function is denoted by (=>)
// arrow function is used for small work purpose.

const arrowMul = (a, b) => {
    console.log(a * b )
}

arrowMul(3, 3)


const arrowMul2 = (a, b) => {
    return a*b;
};
// if we call the arrowMul2 function in console page, and gives some input like arrowMul2(2, 2) then this above code will return the value as 4.





// Make a function which counts the vowels in a string.


function countVowels (str) {
    let count = 0;
    for (const char of str) {    // here for of loop is used.
        if (char ==="a" || char === "e" || char === "i" || char === "o" || char==="u") {
            count++;
        }
    }
    console.log(count)
}

// using the above function, if we call this function in console page and give input a string as countVowels("helloworld")
// this will give the total count of vowels.