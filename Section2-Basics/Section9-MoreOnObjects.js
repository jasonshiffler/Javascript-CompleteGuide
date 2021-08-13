//Basic object initialization

//Object Keynames can be dynamic
let kName = "dynamic"

const person = {
    [kName]: true,
    name: "bob",
    age: 34,
    hobbies: ['fishing', 'racing'],
    greet: function() {
        console.log('hello!');
    }
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