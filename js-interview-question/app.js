// console.log(0o15);


// InterView question part 4
// const str = "JavaScript Interview question part four";

// const obj = {};

// for (let x of str){
//     if(obj[x]) {
//         obj[x] += 1;
//     }else {
//         obj[x] = 1;
//     }
// }

// console.log(obj);



// Inter view question part 5

/*  Write a function called `reverseString` 
that takes a string as input and returns the 
reverse of that string. */

function reverseString (str) {
    if(typeof str !== "string"){
        return str;
    }else {
        return str.split('').reverse().join('');
    }
}

// console.log(reverseString("54321"));


// js question part 6
/*
Write a function `mergeArrays` that takes in two 
arrays of integers and returns a new array that 
contains all the elements from both arrays, 
sorted in ascending order.
For example, if the two input arrays are:
[1, 3, 5, 7, 9]
[2, 4, 6, 8, 10]
The function should return the following array:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Example Input/Output:
- mergeArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
- mergeArrays([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
- mergeArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]  
*/

function mergeArrays (arr1, arr2) {
    let result = [...arr1, ...arr2].sort((a, b) => a - b);
    return result;
}

// console.log(mergeArrays([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));
// console.log(mergeArrays([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]));
// console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// js question part 7 

/* Write a function isPalindrome that takes in 
a string and returns true if the string is a palindrome 
(reads the same forwards and backwards) and false otherwise.
Example Input/Output:
isPalindrome("mam") should return true
isPalindrome("hello") should return false */

function isPalindrome (strings) {
    strings = strings.toLowerCase();

    let reserved = "";
    for (let i = strings.length - 1; i>= 0; i--){
        reserved = reserved + strings[i];
    }

    return strings === reserved;
}

// console.log(isPalindrome("mam"));
// console.log(isPalindrome("hello"));


// // js question part 8
var y = 1;

if (function f() {}) {
  y += typeof f;
}

// console.log(y);


// js question part 9
// function show () {
//     {
//        (function(){
//         var x = 9;
//         var y =10;
//        })();
//     }
//     console.log(x, y);
// }
// show ();



// js question part 10
// console.log(false == []); 
// console.log(false == false);




// js question part 11
// var test = function() {
//     console.log('This is a anonyms function');
// }

// test();




// js question part 12
let n = "50";

// console.log(n + 1);
// console.log(++n);
// console.log(++n);


// js question part 13
let str = "JS";
str = "Q";

// console.log(str);


// js question part 14
function fetch(){
    A = 7;
    console.log(A);
}
let A;
// fetch();




// js question part 15 
// let a = 11;
// let b = a++;// 10 + 1 = 11

// console.log(a + b); // 10 +11 






// js question part 16

myName = 2;
// console.log(myName);












// js question part 17

let a;
let b;

a = 1; // 2 // 3 // 4
b = (a++, a++, a => a + 1)(a);
// console.log(b);








// js question part 18
const characters = [
    {
        name: 'Luke Skywalk',
        skill: 'javaScript',
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        skill: 'python',
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Elia Organa',
        skill: 'c++',
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anacin Skywalk',
        skill: 'c',
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];


// Get array of objects with just name and skill properties


let result = characters.map(function(crr) {
    return {
        name: crr.name,
        skill: crr.skill
    }
});

// console.log(result);









// js question part 23

function check() {
    throw new Error("This is a error");
}

function show(name = check()) {
    console.log(name);  
}

// show('djksfg');










// js question part 24

//write a function to print below pattern 
// based on the number of rows given

// *
// **
// ***
// ****
// *****

function printofPatterrn (rows) {
    for(let i = 1; i <= rows; i ++) {
        let pattern = "";
        for(let j = 1; j <= i; j++) {
            pattern += "*";
        }
        console.log(pattern);
        
    }
}

// printofPatterrn(6);






// js question part 26
const number = [1, 2, 3];
number[10] = 11;
// console.log(number);








// js question part 27

// write a function in JS to count 
// vowel in a given string

const myString = "Subscribe ehasun_dev channel";

function countVowel(str) {
    const vowel = "aeiouAeiou";
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        if(vowel.includes(str[i])){
            count++;
        }
    }

    return count;
}

const vowelCounter = countVowel(myString);
console.log(vowelCounter);

