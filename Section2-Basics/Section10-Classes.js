const { ENOMEM } = require('constants');
const events = require('events');
const em = new events.EventEmitter();

class Product {
    //title = "DEFAULT"; //Fields are defined by the constructor if they are used there.
    //imageURL;
    //description;
    //price;            

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
    
    //Class has a default constructor with no args.

    addListenerMethod() {
        console.log(`Add listener method for ${this.title} product`);
        em.addListener('TestEvent', this.onTestEvent.bind(this)); //defines what "this" is when the method is called so the properties can be displayed                                       
    }                                                                 //by default this is defined by what called the method.
    
    onTestEvent() {
        console.log(`Test event method for ${this.title}`)
    }

    static staticSample() {
        console.log("Static methods work on the class level not an object instance based on the class just like Java");
    }
}

let testProduct = new Product('Pillow', 'http://www.blah.com/848094590349','A Pillow', 34.34);
testProduct.addListenerMethod();

setTimeout(() => em.emit('TestEvent'), Math.floor(Math.random() * 3000) + 1);

testProduct.discount = .5; // Note that getters/setters are not treated as a method.
console.log(testProduct.discount);

Product.staticSample();