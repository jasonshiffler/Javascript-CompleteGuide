function Person() { //Capitalization is a convention for constructor functions.
    this.age = 30;
    this.name = 'Max';
    this.greet = function() {
        console.log(`Hello my name is ${this.name}`);
    }
}

//By defining the function like this all Person objects can use the same function object. A new one
//doesn't need to get created for each person.
Person.prototype.efficientGreet = function() {
    console.log(`Efficient Greet Method for ${this.name}`);
}

const person = new Person(); //new keyword turns Person into constructor function

console.log(Person.prototype); //prototype is the object used by a constructor for the value of __proto__ when new objects are created.

//Modification of the constructor function
Person.prototype.thing = "hello";

console.log(person.__proto__); //__proto__ is the fallback object used by the person object.
console.log(person.__proto__ === Person.prototype); //__proto__ references the constructor function prototype

person.greet();
person.efficientGreet(); //Since person's __proto__ points to Person.prototype it can use it's functionality

console.log(Person.toString());
console.log(Person.prototype);

//Since person's __proto__ was changed it no longer has access to the prototype functionality.
person.__proto__ = function() {console.log("hello!")};
console.log(person.efficientGreet);
console.log(person.greet); //greet is still available to person


