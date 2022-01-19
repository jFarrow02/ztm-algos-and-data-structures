/**
 * Reverse a string
 */

const reverseString = (str) => {
    // If str is not a String, return false
    if(typeof str !== 'string'){
        return false;
    }

    // If string length < 2, return string
    if(str.length < 2) {
        return str;
    }

    const strAsArray = str.split('');
    let reversed = '';
    for(let i = strAsArray.length -1; i >= 0; i--) {
        reversed+= strAsArray[i];
    }
    return reversed;
}

const quote = 'The quick brown fox jumped over the lazy dog.';

console.log(reverseString(quote));
console.log(reverseString('a'));
console.log(reverseString({ foo: 'bar' }));