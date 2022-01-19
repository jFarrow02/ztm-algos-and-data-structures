/**
 * Given two sorted arrays:
 * [1, 3, 5, 7, 9]
 * startIndex = 2   []
 * [2, 4, 5, 8, 10, 12]
 * 
 * Return a single, merged and sorted array:
 * [1, 2, 3, 4, 5, 5, 7, 8, 9, 10, 12]
 * 
 * [1, ]
 */

const arr = [2, 4, 5, 8, 10, 12];

const shiftRight = (arr, startIndex) => {
    let endIndex = arr.length - 1;
    let prevValue;
    if(endIndex > arr.length) {
        return arr;
    }

    for(let i = endIndex; i >= startIndex; i--) {
        prevValue = arr[i];
        if(i === startIndex) {
            arr[i] = null;
            arr[i + 1] = prevValue;
        } else {
            arr[i + 1] = arr[i];
            arr[i] = prevValue;
        }
    }
}

shiftRight(arr, arr.length - 1);
console.log(arr);

const mergeSortedArrays3 = (arr1, arr2) => {
  const mergedArray = [];

  return mergedArray;
}
const mergeSortedArrays2 = (arr1, arr2) => {
    const map1 = {};
    const map2 = {};
    let count = 0;

    for(let i = 0; i < arr1.length; i++) {
        map1[`${arr1[i]}`] = arr1[i];
        count++;
    }
    for(let j = 0; j < arr2.length; j++) {
        map2[`${arr2[j]}`] = arr2[j];
        count++;
    }
    
    const mergedSorted = [];
    const mergedUnsorted = [ ...arr1, ...arr2 ];

    console.log({ ...map1, ...map2 });

    // return mergedSorted;
    return mergedUnsorted;
};


const mergeSortedArrays = (arr1, arr2) => {
    // Merge arrays into (unsorted) array
    const mergedUnsorted = [ ...arr1, ...arr2 ];

    // Create a map to hold unique array values
    const map = {};
    // Create map to hold duplicate values
    const duplicates = {};

    // Create array to hold sorted return results
    const mergedSorted = [];

    for(let i = 0; i < mergedUnsorted.length; i++) {
        // Create new property on map with (stringified) name of mergedUnsorted[i]
        if(!map[mergedUnsorted[i].toString()]) {
            map[mergedUnsorted[i].toString()] = mergedUnsorted[i];
        } else {
            // Create new property on duplicates map with (stringified) name of mergedUnsorted[i]
            duplicates[mergedUnsorted[i].toString()] = mergedUnsorted[i]
        }
    }

    const keys = Object.keys(map); // Keys will be sorted in order by JS

    for(let j = 0; j < keys.length; j++) {
        if(map[keys[j.toString()]]) {
            mergedSorted.push(map[keys[j]]);
        } 
        if(duplicates[keys[j.toString()]]) {
            mergedSorted.push(duplicates[keys[j]]);
        }
    }

    return mergedSorted;
}

const arr1 = [1, 3, 5, 7, 9, 11, 13];
const arr2 = [2, 4, 5, 8, 10];

// console.log(mergeSortedArrays(arr1, arr2));
// console.log(mergeSortedArrays2(arr1, arr2))
// console.log(mergeSortedArrays3(arr1, arr2))
