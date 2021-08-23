//Basic object initialization

//Object Keynames can be dynamic
let kName = "dynamic"

const person = {
    [kName]: true,
    name: "bob",
    age: 34,
    hobbies: ['fishing', 'racing'],
    greet() {
        console.log(`Hello, my name is ${this.name}`); //this refers to whatever calls the function (in this case person), which in this case is the object
    }                                                  //without this, name will be incorrect
};

//Determine if a property is part of an object
if ('age' in person) {

}

//Another way to determine if a property is part of an object
if (person.age !== undefined) {

}


//iterate through the keys in an object
for (let key in person) {
    console.log(key);
}

//new properties can be add to an object on the fly
person.weight = 180;
console.log(person);

//properties can be removed
delete person.weight;

//can access property by name.
console.log(person["age"]);

//Can use a variable for the key as well.
let keyName = "age";
console.log(person[keyName]);

console.log(person[kName]);

//Object shallow copy.
const person2 = { ...person };

//Dealing with reference values in the copy.
const person3 = { ...person, hobbies: [...person.hobbies] }

//Merges properties of a new object with an existing object.
const person4 = Object.assign({}, person);

//Object destructuring. OtherProps is an object with the other properties
const { personAge, ...otherProps } = person;

const name = 'bill'; //Remove this from the the greet function to see what happens.
person2.greet();


//Here bind is used to change what "this" refers to. By default
//this refers to what ever called the function
const thing = function(text ="All about this") {
    console.log(text);
    console.log(this);
}

//By default this refers to the global object
thing();


let thisSample = thing.bind(person2, "Using bind to prepopulate what gets passed in.");
thisSample();

//Allows you to execute a function when you want to override what this is.
let thisSample1 = thing;
thisSample1.call(person4, "using Call");

//apply is like call though the arguments are passed in as an array instead.
let thisSample2 = thing;
thisSample2.apply(person4, ["using apply"]);


//Arrow Functions don't understand the this keyword. this inside the function 
//refers to the same this outside of the arrow function.
const arrowFunction  = () => {
    console.log("Arrow function");
    console.log(this);
}

arrowFunction();

//The Arrow function
const teamArrowExample = {
    team: "Tigers",
    members: ['Jack', 'Jill'],
    logMembers() {
        this.members.forEach(name => {console.log(this.team + "-" + name);console.log(this)}); //using an Arrow function within a foreach in a method is good.
     },                                                                                        //arrow function being called here so it refers to the enclosing object 
     testArrow: () => {
         console.log("Testing an arrow function as a method " + this.team); //using arrow functions as a method not a good idea
         console.log(this);
     }
}
teamArrowExample.logMembers();

//The method is being called here so this will refer outside of here
teamArrowExample.testArrow(); 

//Anonymous function binds this to what calls it which is 
const teamFunctionExample = {
    team: "Bears",
    members: ['Jack', 'Jill'],
    logMembers() {
        this.members.forEach(function(name){console.log(this.team + "-" + name)});
     }
}

teamFunctionExample.logMembers();

//Example using getters and setters with objects
//JS allows for objects to be accessed with the method name.
movie = {
    get title() {
        return this._title;

    },
    set title(val) {
        this._title = val.toUpperCase();
    }
}

movie.title = "War and Peace";
console.log(movie.title) ;