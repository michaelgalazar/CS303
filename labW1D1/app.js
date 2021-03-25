/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

exports.pow = pow;
exports.add2 = add2;
exports.add = add;
exports.computeGrade = computeGrade;

function pow(x, n) {
	let power = 1;
	for ( let i = 0; i < n; i++ ) {
		power *= x;
	}
	return power;
}

function add2(n1, n2, n3) {
	return n1 + n2 + n3;
}

function add(...args) {
	let count = arguments.length;
	let sum = 0;
	for (let i=0; i<count; i++) {
		sum += arguments[i];		
	}
	
	return sum;
}

/*
	Input: grades is an array of integers
	Output: compute average of grades and report letter grade as follows:
	90 - 100 A
	80 - 89  B
	70 - 79  C
	60 - 69  D
	0 - 59   NC
*/
function computeGrade(grades) {

	let sum = 0;
	let average = 0;
	for ( let i = 0; i < grades.length; i++) {
		sum += grades[i];
	}
	average = sum / grades.length;

	if ( average >=90 && average <= 100 ) {
		return "A";
	}
	if ( average >=80 && average <= 89 ) {
		return "B";
	}
	if ( average >=70 && average <= 79 ) {
		return "C";
	}
	if ( average >=60 && average <= 69 ) {
		return "D";
	}
	if ( average >=0 && average <= 59 ) {
		return "NC";
	}
	
}

