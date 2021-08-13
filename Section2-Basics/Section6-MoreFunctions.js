
//Objects can have functions called methods.
const person = {
    greet: function hello() {
        console.log("Hello");        
    }
}

person.greet();

//functions are objects
console.log(typeof(person.greet));

//start(); Function expressions are not hoisted to the top like function declarations are.          

const start = function () {
    console.log("Game is starting");
};
start();

startTheGame(); //This works for a function delcaration but not a function expression.

function startTheGame() {
    console.log("Game is starting");
}

function run(a, b){
    a(b);
}

//Use of an anonymous function. Error messages won't include the function name since it doesn't have one
run(function(num) {
    console.log(num)
}, 4);

//Can do this as well so that error messages include the function name.
run(function thing(num) {
    console.log(num)
}, 4);

const arrowFunction = () => {
    console.log("I'm an arrow function");
}

//Can define a default value for function arguments.
const myNameIs = (name = "Bob") => {
    console.log(`My name is ${name}`);
}
myNameIs();
myNameIs(undefined); //passing undefined has the same effect.


//Rest operator allows an undefined number of arguments to be passed in and tranformed into an array.
//Must be the last argument, can only have one rest parameter.
const sumUp = (...numbers) => {

    //functions can be defined in functions
    const validate = (number) => {
        if (typeof(number) === "number"){
            return true
        } else {
            return false;
        }
    }
    numbers.filter(num => validate(num)).forEach(num => console.log(num));
};
sumUp(1,4,5,3,45,5,3,'a');

//Bind example
const passedFunct = (message, name) => {
    console.log(`the message is ${message} ${name}`);
}

const bindExample = (fun) => {
    fun("Steve");
}

bindExample(passedFunct.bind(this, "Happy Birthday!")); //Bind allows prepopulated data to be passed into a function reference.

