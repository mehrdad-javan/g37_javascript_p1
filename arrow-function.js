// write a function that takes a list of years then calculate the age and return a list of age
const years = [1989, 1987];

// traditional solution
let ageList = [];
for(let i = 0; i< years.length; i++){
    ageList[i] = 2021 - years[i];
}
console.log(ageList);

// ES6 or modern JS
// An Arrow function expression is a compact alternative to a traditional solution
// 
// map() is used to traverse on an array and return a new array.
/*const newAgeList = years.map( (year) => {
        return 2021 - year;
    }
);*/

const newAgeList = years.map( year => 2021 - year);
console.log(newAgeList);

// ES6 calc LeapYear
const leapYear = year => year % 4 == 0;
console.log(leapYear(2020));

// filter() function is used to travere on an array and return a new array that pass a test or condition
const names = ["Mehrdad", "Simon", "Ulf", "Erik"];
const findNamesStartWithM = names.filter( name => name.startsWith('S'));
console.log(findNamesStartWithM);

const findNameStart = input => names.filter( n => n.startsWith(input));
console.log(findNameStart('M'));
console.log(findNameStart('U'));



// Operation in JS
// === compare the value and type 
// ==  compare only the value
const num1 = 10;
const num2 = "10";
const result = num1 === num2;
console.log(result);