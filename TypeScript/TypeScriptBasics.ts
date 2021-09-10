let points: number;
let text: string;
let isTrue: boolean; //Core primitive types in Typescript are lowercase.
let hobbies: string[]; //String Array
let role: [number, string] //Tuple type, here a special array with exactly two values of the defined types.
enum Age{NEW, OLD};
let chaos: any; //Can be assigned any type, avoid at all cost.
let literalType: 'firstOption' | 'secondOption'; //This is a literaltype combined with a union type, similar to an enum

let union: string|number; //union type
union = 5; //yes
union = "Hello"; //yes
union = false; //nope

let literal = 2.8;

//Using Types with Functions
function add(n1: number, n2: number): number {
    return n1 + n2;
}

//Void is option for a return type
function logNums(n1: number, n2: number): void {
    console.log(n1 + n2);
}

const person = {name: 'Bob', experience: Age.NEW} 
const person1: {name: string} = {name: 'Bob'} //Could do something like this as well, better to let TS infer
person.experience = Age.OLD;

console.log(person.nickname); //Typescript infers the type of person and knows there isn't a nickname in the object.

type Combinable = number | string; //Type alias
let aliasExample: Combinable;

type User = {name: string; age: number}; //Using Type aliases for objects.
const u1: User = {name:'Bob', age: 30};

type numberConsumer = (num: number) => void; //Can define a function type for callbacks.
type numberSupplier = () => number;

let unknownType: unknown;
let anyType: any;
let sampleString: string;

unknownType = 5;
sampleString = 'Hello!';

sampleString = unknownType; //Anything is assignable to unknown but unknown isn't assignable to anything but itself or any
sampleString = anyType;

