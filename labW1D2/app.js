/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

// See tests.js for behavior
function nameString(obj) {
    
    for ( let property of obj) {
        if (property == undefined) {
            return "object has no properties";
        }
    }
    
    if (obj === undefined) {
        return "no object passed";
    }
    if () {
        return "null argument";
    }
    if (arguments.length == 1) {
        for (let key in obj) {
            return key;
        }
    }
    else {
        let array = [];
        for ( let key in obj ) {
            array.push(key);
        }
        return array[0] + "." + array[array.length-1] + "." + array[1];
    }
}
