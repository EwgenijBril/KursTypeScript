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

const  dbName = '12345';

const sendUserData = ( obj: User, db?: string ): void => {
    console.log(obj.parents?.father?.toLowerCase(), db?.toLowerCase())
}