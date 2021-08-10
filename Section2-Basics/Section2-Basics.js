
//let uses block scope, value can be changed. = is called the assignment operator
{
    let aboutLet = 'let uses block scope';
    console.log(aboutLet);

    let ABOUTLET =  'Variable names are case sensitive';
    console.log(ABOUTLET);

    //let 21Let = "Variables can contain with numbers but not start with them";
    let letter21 = " Variables can container numbers, just not start with them";
    let $hollar$ = "Variables start with and contain $";
    let _underscore_ ="Variables can start with and contain_";
    //let special-char = "Other special characters not allowed";
    //let let = 'Can't use certain keywords';
    let semiColon = 'Semi colons are optional in javascript'
}

//console.log(`Can't access a variable declared within a scope from the outside ${ABOUTLET}`);

//const uses block scope, value can't be changed.
{
    const username = 'const uses block scope ';
    //username = "changed"; -> this will cause a TypeError to be thrown
    console.log(username);    
}

{
    var globalScope = "Var doesn't use block scope, only Global/Function scope";
}
console.log(globalScope); //This is a global variable

var reDeclared = "This is legal with var, a good reason to use let";
var reDeclared = "This is legal with var, a good reason to use let";

//Javascript primative types, and are copied by value
let num = 10;  //number
console.log(typeof(num));

let str = "string"; //string
console.log(typeof(str));

let bool = true; //boolean
console.log(typeof(bool));

console.log(`${undefined} is a primative type`);

//Objects are not primatives.
let obj  = {
    name: 'Garrett',
    age: 12
}
console.log(` Accessing object values with dot notation ${obj.name}`);
console.log(`Accessing object values with the key name ${obj["name"]}`);

//Arrays are objects with keys equal to the index.
let array = [1, 2, 3];
console.log(`Arrays are ${typeof(array)}s`); 


//Strings can use either single or double quotes.
let singleQuote = 'Single Quote String';
let doubleQuote = "Double Quote String";

//Strings with back ticks allow for interpolation(Template Literal)
const backTickStringNum = 10;
let backTickString = `Backtick String ${backTickStringNum}`;


sayHelloTo('Bob');

//function declarations are hoisted to the top of the program flow.
function sayHelloTo(name) {
    console.log(`Var doesnt cause an error ${x}`);
    //console.log(`Let does cause an error ${y}`);    
    
    var x = 5; //variable declartion(not the assignment) is hoisted to the top of the function.
    let y = 5; //let does not hoist the declaration. must be declared before use.
    z = 5; //Javascript automatically adds the var keyword for you. Can turn on strict mode to prevent this behavior. 'use strict';
    var undefined = 5; // strict mode also prevents this.
    console.log(`This is crazy **** ${undefined}`);

    console.log(`Hello ${name}`);
    return name.toUpperCase();        
}

const scopeTest = 'No';
function scopeSample() {
    const scopeTest = "Yes";
    console.log(`Variable names can be reused in different scopes
                 the inner scope shadows the outer scope.
                  ${scopeTest} `);
}

//Functions can be passed as function arguments.
setTimeout(() => scopeSample(), 1000); //-.passes a function that calls the function
setTimeout(scopeSample, 1500); //Tells JS which function to execute.

//Special function to convert types.
console.log(`parseInt Converts "10" to 10. ${typeof(parseInt("10"))}`);

/*
Multiline comment
*/

//Single line comment

//Shorthand Operators
incrementer = 7;
incrementer += 12;
incrementer -= 8;
incrementer++;
incrementer--;


//undefined is its own type
let undefinedVariable;
console.log(`${undefinedVariable} is the default value of an unassigned variable and is of type ${undefined}`);

//null is of type object
let nullVariable = null;
console.log(`${nullVariable} is a special value and is of type ${typeof(null)}`);

//NaN is a number
let notANumber= NaN;
console.log(`${notANumber} is a special value and is of type ${typeof(notANumber)}`);

