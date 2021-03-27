/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// Remove the even characters from string, e.g removeEvenCharacters("abcd") === "bd"
function removeEvenCharacters(string) {

    let newString = "";

    if ( string === undefined ) {
        return "missing argument";
    }
    else if ( typeof string !== "string" ) {
        return "argument not string";
    } 
    for ( let i = 1; i < string.length; i += 2 ) {
        
        newString = newString + string[i];
    }
    return newString;
}
console.log(removeEvenCharacters("abcdef"));

// Sum the numbers that are greater than zero of array, e.g. sumPositiveNumbers([-1,4,5,-2,-3,10]) === 19
// Must use the reduce method of the Array object to do this!!!
function sumPositiveNumbers(array) {
   
    let newArray = [];

    for ( let item of array ) {
        if ( item > 0 ) {
            newArray.push(item);
        }
    }

    return newArray.reduce(function(sum, current) {return sum + current;}, 0);
}
console.log(sumPositiveNumbers([-1,4,5,-2,-3,10]));

// Write a construction function
// Input an array containing numbers and string, e.g. [1, "a", "c", 2, 4]
// Creates an object with two array properties numbers and strings, e.g.
// new ArrayDemo([1, "a", "c", 2, 4]) returns {numbers:[1, 2, 4]; strings:["a", "c"}
function ArrayDemo(array) {
    
    this.array = array;
    let newObject = new ArrayDemo();
     let numbers = newObject.keys();
     let strings = newObject.keys();

    for ( let items of array ) {
        if (typeof items === "number" ) {
            newObject.numbers.push(items);
        }
        if (typeof items === "string" ) {
            newObject.strings.push(items);
        }
    }
    return newObject;
}

// Makes all negative numbers of the input array positive
function makePositive(array) {
}

// Replaces sequences of 0s with an "*", e.g.
// removeZeros([3, 0, 0, 0, 5, 6, 0, 0, 7, 0]) returns [3, "*", 5, "*", 7, "*"];
function removeZeros(array) {
}


