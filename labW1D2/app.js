/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

exports.nameString = nameString;

// See tests.js for behavior
function nameString(obj) {

    if (Object.keys(obj).length === 0) {
        return "object has no properties";
    }

    if (obj === undefined) {
        return "no object passed";
    }
    if (obj === null) {
        return "null argument";
    }
    if (arguments.length == 1) {
        for (let key in obj) {
            return key;
        }
    }
    else {
        let array = [];
        for (let key in obj) {
            array.push(key);
        }

        return array.sort().join(".");    //array[0] + "." + array[array.length - 1] + "." + array[1];
    }

}