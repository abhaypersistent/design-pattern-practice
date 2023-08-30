// singleton Pattern
// singletons are classes which can be initailized once and can be used globally
// counter example

let counter = 0;

class Counter {
    getInstance(){
        return this;
    }

    getCount(){
        return counter;
    }

    increment(){
        return ++counter;
    }

    decrement(){
        return --counter;
    }
}

const c1 = new Counter();
const c2 = new Counter();

// above code cannot be called as SingleTon design pattern because it can
// be initialized multiple time by using New Parameter.

let counterSing = 0;
let instance;

class CounterSingle {

    constructor(){
        if(instance){
            throw new Error('you have already intialized the class');
        }

        instance = this;
    }

    getInstance(){
        return this;
    }

    getCount(){
        return counter;
    }

    increment(){
        return ++counter;
    }

    decrement(){
        return --counter;
    }
}

const singleTonCounter = Object.freeze(new CounterSingle());
export default singleTonCounter;
// let cs1 = new CounterSingle();
// let cs2 = new CounterSingle(); example we cannot initialize the counter 2 times



