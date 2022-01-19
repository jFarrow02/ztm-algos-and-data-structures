/**
 * Exercise: First recurring character
 * 
 * Given an array = [ 2, 5, 1, 2, 3, 5, 1, 2, 4 ]:
 * It should return 2
 * 
 * Given an array = [ 2, 1, 1, 2, 3, 5, 1, 2, 4 ]:
 * It should return 1
 * 
 * Give an array = [ 2, 3, 4, 5 ]
 * it should return undefined  
 */

const firstRecurringNaive = (arr) => {

    for(let i = 0; i < arr.length; i++) {
        for(let j = (i + 1); j < arr.length; j++) {
            if(arr[j] === arr[j + 1]) {
                return arr[j];
            }

            if(arr[i] === arr[j]) {
                return arr[j];
            }
        }
    }
    return undefined;
}

const firstRecurringBetter = (arr) => {

    const obj = {};

    // Loop through arr and add property to obj for each index
    for(let i = 0; i < arr.length; i++) {
        if(obj[`${arr[i]}`]){
            return arr[i];
        }
        obj[`${arr[i]}`] = arr[i];
    }
    return undefined;
};

const arr1 = [ 2, 5, 1, 2, 3, 5, 1, 2, 4 ];
const arr2 = [ 2, 1, 1, 2, 3, 5, 1, 2, 4 ];
const arr3 = [ 2, 3, 4, 5 ];
const arr4 = [ 2, 3, 4, 5, 6, 7, 8, 9, 2 ];
const arr5 = [ 2, 3, 4, 5, 6, 6, 8, 9, 2 ];
const arr6 = [ 2, 3, 4, 5, 4, 6, 7 ];

console.log(firstRecurringNaive(arr1)); // 2
console.log(firstRecurringNaive(arr2)); // 1
console.log(firstRecurringNaive(arr3)); // undefined
console.log(firstRecurringNaive(arr4)); // 2
console.log(firstRecurringNaive(arr5)); // 6
console.log(firstRecurringNaive(arr6));

console.log('--------------------------');

console.log(firstRecurringBetter(arr1));
console.log(firstRecurringBetter(arr2));
console.log(firstRecurringBetter(arr3));
console.log(firstRecurringBetter(arr4));
console.log(firstRecurringBetter(arr5));