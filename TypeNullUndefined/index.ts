const test: null = null;
const test2: any = null;
// const text3: string = null;
// const test4: number = null;

const test5: undefined = undefined;
const text6:any = undefined;
// const test7: string =undefined;

let smth;

const getRndData = () => {
    if ( Math.random() < 0.5) {
        return null;
    } else {
        return " Some data ";
    }
}

const data = getRndData()
const trimmedData = data ? data.trim() : null;

console.log(trimmedData)