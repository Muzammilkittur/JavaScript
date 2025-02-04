// Array is also a kind of Objects, where i objects we use key:value, which is not a good habit in coding to store very big data.
// so we prefer Arrays, in arrays instead of keys, it will use index, & the values are as it is.

// Arrays are used to store linear data. 
// in Arrays we can store values of multiple data type.

// Example for array :
let heros = ["ironman", "spiderman", "Superman", "antman", "Thor", "Hulk"];

let marks = [77, 35, 58, 78, 98, 48, 95];

let info = ["hello", 87, 98, true, "red"]; 
console.log(heros)
console.log(heros.length)


// Arrays are Mutable, it means the arrays can be modified and the modified data is stored the the same array,
// Where as "Strings" are Immutable, it means if any modification done in a string, and try to print it, it will print the initial string only,
// we have to keep the modified string into another string and print it. then only the modified string can be printed in console.

// for Example for Array modification

heros[0]= "Batman"
console.log(heros)

// looping over an array
console.log(heros[2])
i = heros
for( let i=0; i<heros.length; i++) {
    console.log("i is", heros[i])
}


// 'for of' looping 
let cities = ["mumbai", "delhi", "agra", "kolkata"]
for (let city of cities) {
    console.log(city.toUpperCase())
}


// Practice -1
// I have an array with Marks of Student, find the average of marks.

let mark = [78, 38, 98, 65, 78, 34, 14];
let sum = 0;

for (let value of mark) {
    sum += value
}
console.log("average of mark is", sum/mark.length)


// Methods in Array.

// Push(): Add to end
// Pop(): Delet from End & return
// toString(): Converts array to string

mark.push(100); // adds to end
console.log(mark)

mark.pop(); // removes from end
console.log(mark) 

mark.shift(); // removes from start
console.log('shifted', mark) 

mark.unshift("001"); // adds from first
console.log('unshifted', mark)

let markString = mark.toString();
console.log(markString)

let sliceMethode = mark.slice(2, 4)
console.log(sliceMethode)


// splice method, Splice(): it changes original array (add, remove, replace)
// splice(startIndex, delCount, newElement1....)

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('num array is', num)
let spliceMethode = num.splice(2, 3);   // start index is 2 and from start index it is deleting upto index 3. 
console.log(spliceMethode)  // ans is [3, 4, 5]


let num1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
console.log('num1 array is', num1)
let spliceMethode1 = num1.splice(2, 3, 101, 102);   // array added 101, 102 from index 2
console.log(num1)  // Modified array will be stored in num1, not in spliceMethode1