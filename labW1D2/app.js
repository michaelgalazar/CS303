/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// See tests.js for behavior
function nameString(obj) {

    if ( Object.keys(obj).length === 0 ) {
        return "object has no properties";
    }

    else if ( obj === undefined ) {
        return "no object passed";
    }
    else if ( obj === null ) {
        return "null argument";
    }
    else if ( arguments.length == 1 ) {
        for (let key in obj) {
            return key;
        }
    }
    else {
        let array = [];
        for (let key in obj) {
            array.push(key);
        }
        return array[0] + "." + array[array.length - 1] + "." + array[1];
    }
}
