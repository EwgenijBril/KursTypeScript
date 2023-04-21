const message: string | number = 5;
const messages: string[] | number[] = ['a', 'b'];


// const printMsg = (msg: string | number | boolean ): void => {
//     if (typeof msg  === 'string' || typeof msg === 'number') {
//         console.log(msg.toString());
//     } else {
//         console.log(msg)
//     }
//     console.log(msg);
// } 

const printMsg = (msg: string[] | number | boolean ): void => {
    if ( Array.isArray(msg) ) {
        msg.forEach(m => console.log(m))
    } else if (typeof msg === 'number') {
        console.log(msg.toFixed())
    } else {
        console.log(msg)
    }
} 

printMsg(4)
// printMsg('hallo')

const printReadings = (a: number | string, b: number | boolean ) => {
    if (a === b ) {
        console.log(a, b);
    }
}

const printReadings2 = (a: number[] | string ) => {
    console.log(a.slice(0, 3)); 
}

const checkReadings = (reading: {system: number } | {user: number}): void => {
    if ("system" in reading) {
        console.log(reading.system)
    } else {
        console.log (reading.user)
    }
}

const logValue = (x: string | Date) => {
    if (x instanceof Date) {
        console.log(x.getDate())
    } else {
        console.log(x.trim())
    }
}