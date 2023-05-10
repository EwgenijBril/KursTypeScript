interface User {
    readonly login: string;
    password: string;
    age: number;
    readonly addr?: string;
    // addr: string | undefined;
    parents?: {
        mother?: string;
        father?: string;
    }
}

const user: User = {
    login: 'first!',
    password: 'gwerty',
    age: 50,
    addr: 'dkdfk'
}

const userFreeze: Readonly<User> = {
    login: 'first!',
    password: 'gwerty',
    age: 50,
    addr: 'dkdfk'
}

// userFreeze.age = 67;
// userFreeze.password = "ioijojl"

let  dbName: string;
sendUserData(user, "sdfdsfje")
console.log(dbName!)

function sendUserData ( obj: User, db?: string ): void  {
    dbName = '12345'
    console.log(obj.parents!.father?.toLowerCase(), db!.toLowerCase())
}

// class Animal {
//     readonly name : string = "name"
// }

const basicPorts: ReadonlyArray<number> = [3000, 3001, 5555]
// basicPorts [0] = 5
// basicPorts.push(556)

//const basicPorts: readonly [number, ...string[]] = [3000, '3001', '5555']
// basicPorts [0] = 5
// basicPorts.push(556)