// function question part 1

/* 
Have the function `CountPairs` take in a string of 
lowercase letters and digits. The function should return 
the count of all pairs of characters in the string that 
add up to an even number.

Examples:
CountPairs("a1b2c3d4e5f6") should => return 3
CountPairs("x1y2z3") should => return 1
CountPairs("a2b2c2d2") should => return 4
 */


function CountPairs(S) {
    let count = 0;
    for(let i = 0; i < S.length - 1; i+= 2) {
        if(parseInt(S[i + 1]) % 2 == 0){
            count++;
        }
    }

    return count;
}

// console.log(CountPairs("a1b2c3d4e5f6"));
// console.log(CountPairs("x1y2z3"));
// console.log(CountPairs("a2b2c2d2"));






// function question part 2

 /* 
Write a function called `reverseString` that takes a 
string as input and returns the reverse of that string. 
Your function should not use the built-in `reverse()` method.

Example Input/Output:
- reverseString('hello') should return 'olleh'
- reverseString('racecar') should return 'racecar'
- reverseString('12345') should return '54321'
*/

function reverseString(str) {
    let reverse = " ";
    for(let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }

    return reverse;
}

// console.log(reverseString("hello"));
// console.log(reverseString('54321'));














// function question part 3
const students = [
    "Zara", "Era", "Marina", "Martin", "Adman", "Marina",
    "Adman", "David", "Zara", "Era", "David", "Martin"
];


function DuplicateNames (names) {
    const nameCount = {};
    const duplicate = [];

    for (const name of names) {
        nameCount[name]  = (nameCount[name] || 0) + 1;
    };

    for (const name in nameCount) {
        if (nameCount[name] > 1) {
            duplicate.push(name);
        }
    }

    return duplicate;
}

console.log(DuplicateNames(students));

