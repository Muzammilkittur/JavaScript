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

myNewFunction(20)