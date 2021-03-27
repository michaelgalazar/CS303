/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

exports.nameString = nameString;

// See tests.js for behavior
function nameString(obj) {

    if (obj === undefined) {
        return "no object passed";
    }
    else if (obj === null) {
        return "null argument";
    }
    else {
        if (Object.keys(obj).length === 0) {
            return "object has no properties";
        }
        else {
            let array = [];
            let output;
            for (let key in obj) {
                array.push(key);
            }

             return array.sort().join(".");  //array[0] + "." + array[array.length - 1] + "." + array[1];
        }

    }
}