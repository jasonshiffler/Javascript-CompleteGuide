
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

console.log(globalScope);

let notDefined;
console.log(" notDefined has a value of undefined since it hasn't been initialized with a value " + notDefined);

//Javascript primative types
let num = 10;  //number
console.log(typeof(num));

let str = "string"; //string
console.log(typeof(str));

let bool = true; //boolean
console.log(typeof(bool));

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