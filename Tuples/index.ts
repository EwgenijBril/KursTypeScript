const userData = {
    isBirthdayData: true,
    ageData: 40,
    userNameData: "John",
    massages: {
        error: "Error" 
    }
};

const userDataTuple: [ ...boolean[], number, string ] = [ true, false, 40, 'John' ];
// userDataTuple[3];
// userDataTuple.push(50);
// userDataTuple[3]

const res = userDataTuple.map((t) => `${t} - data`);
const [bthd, age , userName] = userDataTuple


const createError = (msg: string ) => {
    throw new Error(msg);
}

const logBrtMsg = ({ isBirthdayData, userNameData, ageData, massages: { error } }: {
    isBirthdayData: boolean,
    userNameData: string, 
    ageData: number,
    massages: { error: string }
}): string => {
    if ( isBirthdayData ) {
        return `Congrats ${userNameData.toUpperCase()}, age: ${ageData + 1}`;
    } else {
        return createError(error);
    }
    
    
}

console.log(logBrtMsg(userData))