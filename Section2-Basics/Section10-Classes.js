const { ENOMEM } = require('constants');
const events = require('events');
const em = new events.EventEmitter();

class Product {
    //title = "DEFAULT"; //Fields are defined by the constructor if they are used there.
    //imageURL;
    //description;
    //price;
    #PrivateProductInfo; //# sets the property to be private           

    //If a constructor is not defined then a default constructor is supplied automatically(just like Java)
    constructor(title, imageURL, description, price) {
        this.title = title; //property
        this.imageURL = imageURL;
        this.description = description;
        this.price = price;
    }

    get discount() {
        return this._discount;
    }

    set discount(disc) {
        this._discount = disc;
    } 

    //Methods can be set to be private as well
    #PrivateMethod = () => {

    }
    
    //Class has a default constructor with no args.

    addListenerMethod() {
        console.log(`Add listener method for ${this.title} product`);
        em.addListener('TestEvent', this.onTestEvent.bind(this)); //defines what "this" is when the method is called so the properties can be displayed                                       
                                                                  //by default this is defined by what called the method.
        
        em.addListener('TestEvent', this.onArrowTestEvent); //Arrow functions ignore this from the caller and pull from the surrounding
    }                                                       //scope which in this case is the object. Bind isn't needed here.    
    
    onArrowTestEvent = () => {
        console.log(`Arrow Test event method for ${this.title}`);
    }

    onTestEvent() {
        console.log(`Test event method for ${this.title}`);
    }

    static staticSample() {
        console.log("Static methods work on the class level not an object instance based on the class just like Java");
    }

    myClassIs() {
        console.log("I'm a Product");
    }

}

//Creating a child class of Product. A class in Javascript can only inherit from a single parent class.
class FurnitureProduct extends Product {

    //most efficient since each Furniture product instance will reference the same function. 
    //function is added to constructor function
    myClassIs() {
        console.log("I'm a Furniture Product");
    }
    
    //A unique function object is created for each FurnitureProduct Instance. Arrow functions are the same.
    lessEfficientMyClassIs = function() {
        console.log("I'm a less efficient Furniture Product");
    }

    constructor(title, imageURL, description, price) {
        super(title, imageURL, description, price); //Super calls the parent constructor(Just like Java)
                                                    //Since the constructor is defined super() must be called explicitly
    }
}

let testProduct = new Product('Pillow', 'http://www.blah.com/848094590349','A Pillow', 34.34);
testProduct.addListenerMethod();

setTimeout(() => em.emit('TestEvent'), Math.floor(Math.random() * 3000) + 1);

testProduct.discount = .5; // Note that getters/setters are not treated as a method.
console.log(testProduct.discount);

Product.staticSample();

console.log(testProduct instanceof Product); //instanceof operator determines if object is from a particular class.

const descriptorEx = { name: 'Max', greet(){console.log('hello')}};

//Retrive info about the fields in the object
console.log(Object.getOwnPropertyDescriptors(descriptorEx));

//Change the property definitions.
Object.defineProperties(descriptorEx, 'name', {
    configurable: true,
    enumerable: true, //exclude from for ... in loop
    value: person.name,
    writable: false
});