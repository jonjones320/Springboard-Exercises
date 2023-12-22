class Vehicle {
    constructor (a,b,c) {
        this.make = a;
        this.model = b;
        this.year = c;
    }
    honk() {
        console.log('beep');
    }
    toString() {
        console.log(`This bad boy is a ${this.year} ${this.make} ${this.model}`);        
    }
}

class Car extends Vehicle {
    constructor(a,b,c) {
        super(a,b,c)
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(a,b,c) {
        super(a,b,c);
        this.numWheels = 2;
    }
    revEngine() {
        console.log("VROOM!!!")
    }
}

class Garage {
    constructor(a) {
        this.vehicles = [];
        this.capacity = a;
    }
    add(a) {
        if (!(a instanceof Vehicle)) {
            throw new Error ('Only vehicles are allowed in here!');
        }
        if (this.vehicles.length >= this.capacity) {
            throw new Error ('Sorry, the garage is full.');
        }
        this.vehicles.push(a);
        console.log('Vehicle added to the garage!');
    }
}