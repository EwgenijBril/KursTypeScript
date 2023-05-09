const  salaty: number = 500;


interface UserData {
    isBrirthdayData: boolean;
    ageData: number;
    userNameData: string;
    smt: string;
}

const userData = 
    '{"isBrirthdayData": true, "ageData": 40, "userNameData": "John"}';

const arr = ['ssss', 5, true ]

const  userObj: UserData = JSON.parse(userData)
console.log(userObj.smt)

const isOkay = true;
let movement: boolean | string = 'false';

if (isOkay) {
    movement = "moving"
}