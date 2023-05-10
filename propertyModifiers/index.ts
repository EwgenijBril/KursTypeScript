interface User {
    login: string;
    password: string;
    age: number;
    // addr?: string;
    addr: string | undefined;
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

let  dbName: string;
sendUserData(user, "sdfdsfje")
console.log(dbName!)

function sendUserData ( obj: User, db?: string ): void  {
    dbName = '12345'
    console.log(obj.parents!.father?.toLowerCase(), db!.toLowerCase())
}