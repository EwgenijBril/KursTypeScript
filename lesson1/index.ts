// const str = 'str'
// console.log(str) 

const isBirthdayData: boolean = true;
let ageData: number = 40;
const useNameData: string = "John";

// const logBrtMsg = (isBirthday: boolean, useName: string, age: number ): void => {
//     if (isBirthday ) {
//     console.log(`Congrats ${useName.toUpperCase()}, age: ${age + 1}`); 
//     }
// }

let salaty: number;
salaty = 5000;

// const userData = '{ "isBirthdayData": true, "ageData": 40, "useNameData": "John" }';

// const userObj: {
//     isBirthdayData: boolean, useNameData: string, ageData: number
// } = JSON.parse( userData )
// console.log(userObj.smt());

const logBrtMsg = (isBirthday: boolean, useName: string, age: number ): string => {
    if (isBirthday ) {
        return `Congrats ${useName.toUpperCase()}, age: ${age + 1}`; 
    } else {
        return 'Error'
    }
}

logBrtMsg( isBirthdayData, useNameData, ageData )

