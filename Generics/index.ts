function processignData<T>(data: T): T {
    return data
}

const res1 = processignData(1);
const res2 = processignData("1");


const num = 10;
const res3 = processignData<number>(num);

interface PrintUK {
    desing: number;
}

interface PrintES {
    desing: string;
}

interface Print<T> {
    design: T;
}

const somePrint: Print<string> = {
    design: "ten"
}

const someOtherPrint: Print<number> = {
    design: 10
}