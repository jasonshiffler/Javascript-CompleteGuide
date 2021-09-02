//Symbols are primitive values that are always unique

//Library Land
const uid = Symbol('uid'); // 'uid' id is optional

const person = {
    [uid]: 343489,
    id: 'p1',
    name: 'Bob',
    age: 41,
    [Symbol.toStringTag]: "Hello" //Well know Symbol
};

person[uid] = 48892389;

//App Land - App can't access the symbol, contained to the library.

console.log(person[Symbol('uid')]);
console.log(Symbol('uid') === uid);
console.log(person.toString());

const company = {
    curEmployee: 0,
    employees: ['Max', 'Bob', 'Bill'],    
    [Symbol.iterator]: function* employeeGenerator() { //* creates a generator function
        let currentEmployee = 0;
        while (currentEmployee < this.employees.length) {
            yield this.employees[currentEmployee];       //yield returns a generator with a next method that pauses after each execution.                
            currentEmployee++;            
        }
    }
}

//Iterator symbol with generator function allows use of for of loop.
for (const employee of company) {
    console.log(employee);
}

const course = {
    title: 'Whole Wheat Bread'
}