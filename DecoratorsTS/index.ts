interface ICar {
    fuel: string;
    open: boolean;
    freeSeats: number;
}

@closeCar1
class myCar1 implements ICar {
    fuel: string = "50%";
    open: boolean = true;
    freeSeats: number;
    isOpen() {
        console.log(this.fuel)
        return this.open ? "open" : "close";
    }
}

function closeCar1<T extends {new (...args:any[]): {}}>(constructor: T) {
    return class extends constructor {
        open = false;
    }
   
}

// function addFuel1(car: myCar1) {
//     car.fuel = "100%";
//     console.log('add fuel')
//     return car
// }

const car = new myCar1();
console.log(car.isOpen());