/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

exports.nameString = nameString;

// See tests.js for behavior
function nameString(obj) {

    if ( Object.keys(obj).length === 0 ) {
        return "object has no properties";
    }

    if ( obj === undefined ) {
        return "no object passed";
    }
    if ( obj === null ) {
        return "null argument";
    }
    // else if ( arguments.length == 1 ) {
    //     for (let key in obj) {
    //         return key;
    //     }
    // }
    else {
        let array = [];
        let output;
        for (let key in obj) {
            array.push(key);
        }

        output = array.sort().join(".");
        return output;  //array[0] + "." + array[array.length - 1] + "." + array[1];
    }
}