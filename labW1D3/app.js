/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
"use strict";

exports.Person = Person;
exports.analyzer = analyzer;

/*
Function analyzer
Has an unbound this
Creates an object that contains the following information from the "this" object.
{
	numProperties  	// number of properties
	cntShortName	// count of property names shorter than 3 characters
	cntReferences	// count of reference properties (use the typeof operator to compute this)
}	
*/
function analyzer() {
	
	let numOfPro = Object.keys(this).length;

	let countShortN = 0;
	for ( let key in this ) {
		if ( key.length < 3 ) {
			countShortN++;
		}
	}

	let countRef = 0;

	for ( let key in this ) {
		if ( typeof this[key] === "object" ) {
			countRef++;
		}
	}

	return {numProperties: numOfPro, cntShortName: countShortN, cntReference: countRef};
}

/* Constructor for a person object
	Person(name, country, grades) creates object
	{
		name: name,  // person's name
		county: country, // person's country
		grades: grades,  // integer array of grades
		computeGrade     // function that computes the grade from grades
	}
*/
function Person(name, country, grades) {
	this.name = name;
	this.country = country;
	this.grades = grades;
	this.computeGrade = function () {
		let sum = 0;
		for ( let grade of grades) {
			sum += grade;
		}
		return sum / grades.length;
	};
}
