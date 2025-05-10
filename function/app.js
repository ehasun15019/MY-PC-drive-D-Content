// // problem 1 solve 
// function margeArr(arr1, arr2) {
//     const margeArr = arr1.concat(arr2);
//     return margeArr.sort ((a, b) => a - b);
// }

// console.log(margeArr([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));


// function findShortestWord(str) {
//     const words = str.split(' ');
//     let shortest = words[0];

//     for(let i = 1; i < words.length; i++) {
//         if(words[i].length < shortest.length) {
//             shortest = words[i];
//         }
//     }

//     return shortest;
// }

// // Example usage
// console.log(findShortestWord("The quick brown fox jumps over the lazy dog")); 
// console.log(findShortestWord("Hello world"));
// console.log(findShortestWord("Today is Monday")); 



// function removeDetails(names) {
//     return [...new Set(names)];
// }

// console.log(removeDetails(['Zara', 'Sadia', 'Mahin', 'Adnan', 'Maisha', 'Adnan', 'Faiyaz']));



function NUmberString(...all) {
    const allNumberString = all.every(all => !isNaN(all));


    if (allNumberString) {
        return all.reduce((sum, num) =>  sum + Number(num), 0);
    }else {
        return all.join(' ');
    }
}

console.log(NUmberString(21, 24, 40)); 
console.log(NUmberString("Hello","Alpha")); 

