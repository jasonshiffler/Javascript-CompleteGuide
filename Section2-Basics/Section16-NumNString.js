//In Javascript every number is a 64 bit float.

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);

console.log(.2 + .4 === .6); //false

let bigInt = 9384881098458904n; //putting an n at the end makes a BigInt primitive type.

Number.POSITIVE_INFINITY;
Number.NEGATIVE_INFINITY;

function description(strings, name, price) {
    console.log(strings); //This is an array based on the template that was passed in.
    console.log(name);
    console.log(price);
    return "This is a product";
}

const prodName = "Course";
const prodPrice = 29.99;

//Allows a template to be passed in as an argument
const productOutput = description`This product (${prodName}) is ${prodPrice}.`;
console.log(productOutput);