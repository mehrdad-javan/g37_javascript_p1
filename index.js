//document.getElementById("demo").innerHTML = "I Love JS!";


// JS Fundamenbtal
var a = 10;
var b = 2;
var result = a + b;
console.log("RESULT:", result);
console.log('RESULT  for ' + a + ' + ' + b + ' = ' + result);
// ´ back tick (to make a string template with parameters)
console.log(`RESULT for ${a} + ${b} = ${result}`);
// JavaScript Data Type
var length = 123;
var firstName = "Mehrdad";
var sentence = 'Hello JS!';
var lastName = null;
var title; // undefined
console.log("firstName:", firstName);
console.log("title:", title);
// how to define a boolean variable?
var isValid = true;

// JavaScript Object
var person = {}; // empty person
var mehrdad = { id: 1, firstName: 'Mehrdad', lastName: 'Javan' }
var simon = { id: 2, firstName: 'Simon' , lastName: 'Elbrink', title: 'Java Teacher' }
mehrdad.firstName = "Test"; // update the property value
delete mehrdad.id; // delete a property
console.log(mehrdad);

simon["city"] = "Växjö";
console.log(simon);

// JavaScript Scope
function display(msg){
    //console.log("Message:", msg);
    //console.log(firstName); // var data type uses global scope
    return "MSG:" + msg;
}

var printData = display("Hello JS!");
console.log(printData);

// ES6
// let variables are used in block scope and are mutable
let number1 = 10;
number1 = 5;
console.log(number1);

const API_URI = "http://localhost:8080/test";
//API_URI = "http://localhost:8080/person";
console.log(API_URI);

// function scoped
function OCACertificateES5(passedTest) {
    // var uses the global scope, it can be accessed anywhere in this context.
    // we can change its value or reassigne a new value
    if(passedTest){
        var fn = 'John';
        var yearOfBirth = 1990; 
    }
    //Works okay since var is function scoped
    console.log(fn + ' ' + yearOfBirth + ' is now a OCA certified Java programmer');
}
OCACertificateES5(true);

// let and const variables use block scope
/*function OCACertificateES6(passedTest) {
    // let anc const use the local scope.
    if(passedTest){
        let fn = 'John';
        const yearOfBirth = 1990; 
    }
    //Will say that firstName is not defined in the log.
    console.log(fn + ' ' + yearOfBirth + ' is now a OCA certified Java programmer');
}
OCACertificateES6(true); 
*/


let num = 21;

function chackNumber(input){
    const result = input % 2;
    if(result == 0){
        console.log("Number is EVEN");
    }else {
        console.log("Number is ODD");
    }
}

chackNumber(num);

// JavaScript String functions

var text = "Text";
console.log(text.startsWith('T')); // true
console.log(text.toLowerCase()); // text
// toUpperCase
// includes
// endsWith
// ...