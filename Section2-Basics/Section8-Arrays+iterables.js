
const sampleArray = [1, 2, 3]; //Arrays are Iterable and implement the @@iterator method. Allows use of for-of loop
                               //Array like objects have a length property and use indexes to access items.
                               //recommended way to create an array.

const moreArrays = new Array(); //same thing as [], new keyword is optional
const strangeArray = new Array(5); //Creates an empty array of length 5, new keyword is optional.

const yetAnotherWay = Array.of(1,2); //Not as common

const instArray = Array.from('Hello!'); //Converts an iterable object to an array
console.log(instArray);

const arrayOfArray = [ [1,2,3], [4,5] , [6,7,8] ] //Can have arrays of arrays.

console.log(arrayOfArray[1]); //Arrays are accessed by index

const hobbies = ['sports', 'cooking'];
console.log(hobbies);
hobbies.push('reading'); //add item to the end of the list.
console.log(hobbies);
hobbies.unshift('fishing'); //add item to the beginning of the list.
console.log(hobbies);
hobbies.pop(); //remove last item from the array.
console.log(hobbies);
hobbies.shift(); //remotes the first element of array.
console.log(hobbies);

hobbies[6] = "stuff" //can target indexes that haven't been initialized. creates empty spots in between.
console.log(hobbies);

const removedElements = hobbies.splice(1, 0,'Good Food',"Wine"); //Can insert elements into an array at a specific index, can delete items as well.
console.log(hobbies);

const testResults = [1,6,7,8,5,5,4,6,8,4,4];
console.log(testResults.slice()); //Slice creates a brand new array.
console.log(testResults.slice(3, 5)); //Can select the ranges of an array
const concatArray = testResults.concat([6.6, 7.8, 56]); //Combines two arrays and creates a new one.
console.log(testResults.indexOf(5)); //returns the index of the value in the array.

const arrayCopy = [...testResults]; //Copies the values of the old array into the new array.

const people = [{name:"Bob", age:32}, {name:"Steve", age:27}];
const updatedPeople = [...people]; //A new array has been created, but the reference values are the same so the new array is still using the old objects.

const actuallyUpdatedPeople = people.map(person => ({name:person.name, age: person.age})); //This creates new objects.

const [firstName, lastName] = ['Bob', 'Smith'] //Example of array destructuring.


let ids = new Set(); //This is how to create a set.
ids = new Set(["Hello",2,[1,2,3]]); //Multiple ways to initialize a set. Values in a set are unique
console.log(ids.has(1));

for (let entry of ids.values()) { //Sets are iterable
    console.log(entry);
}

let personMap = new Map();
personMap.set('key1',{name:"bill"});
console.log(personMap);