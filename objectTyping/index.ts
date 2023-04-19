const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = "John";

const userData = {
    isBirthdayData: true,
    ageData: 40,
    userNameData: "John",
    massages: {
        error: "Error" 
    }
}

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

// array typing 

const departments: string[] = ["dev", "desing", "marketing"];

const department = departments[0];

//departments.push(5);
const report = departments
                        .filter((d) => d !== "dev")
                        .map((d: string) => `${d} - done`)


const nums: number[][] = [
    [3, 5, 6],
    [3, 5, 6],
];

const [ first ] = report;
console.log(first)
