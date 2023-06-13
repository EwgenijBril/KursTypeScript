const printMsg = (msg: string[] | number | boolean): void => {
    if (Array.isArray(msg)) {
        msg.forEach((m) => console.log(m))
    } else if (isNumber(msg)) {
        console.log(msg)
    } else {
        console.log(msg)
    }
}

printMsg(4)

// const box  = document.querySelector('.box');
// box?.addEventListener("click", () => {});

// const isNumber = (n: string[] | number | boolean): n is number => {
//     return typeof n === "number";
// }

const isNumber = (n: unknown): n is number => {
    return typeof n === "number";
}

interface Car {
    engine: string;
    wheels: {
        number: number;
        type: string;
    } 
}

interface Ship {
    engine: string;
    sail: string;
}

const repairVehicle = (vehicle: Car | Ship) => {
    if ( isCar(vehicle)) {
        vehicle.wheels
    } else {
        vehicle.sail
    }
}

const isCar = (car: Car | Ship): car is Car => {
    // return "wheels" in car;
    return (car as Car).wheels.number !== undefined
}