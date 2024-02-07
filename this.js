const obj = {
    a: 1,
    method: () => {
        console.log(this)
    }
} 

obj.method();


class Person {
    constructor(name) {
        this.name = name;
    }

    method() {
        console.log(this, 'method')
    }
    method2 = () => {
        console.log(this)
    }
}

const person = new Person('John');
person.method();
person.method2();

const method = person.method;
method(); 
const method2 = person.method2;
method2();

function Person2(name) {
    this.name = name;
    this.method = () => {
        console.log(this)
    }
    this.method3 = function() {
        console.log(this)
    }
    Person2.prototype.methodInner = function() {
        console.log(this, 'inner')
    }
    Person2.prototype.methodInnerArrow = () => {
        console.log(this, 'methodInnerArrow')
    }
}
Person2.prototype.method2 = function() {
    console.log(this)
}
Person2.prototype.method4 = () => {
    console.log(this)
}


const person2 = new Person2('zz');
person2.method();
person2.method2();
person2.method3();
person2.method4();
person2.methodInner();
person2.methodInnerArrow();
const method3 = person2.method;
method3();
const method4 = person2.method4;
method4();
const method5 = person2.method3;
method5();
const method6 = person2.method2;
method6();
const methodInner = person2.methodInner;
methodInner();
const methodInnerArrow = person2.methodInnerArrow;
methodInnerArrow();