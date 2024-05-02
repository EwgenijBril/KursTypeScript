function processignData1<T, S>(data: T[], options: S): string {
    data.length;
    switch (typeof data) {
        case "string":
            return `${data}, speed: ${options}`;
            break
        case "number":
            return `${data}, speed: ${options}`;
            break
        default:
            return "Not valid"

    }
}

let res_1 = processignData1([1], "fast");
let res_2 = processignData1(["1"], "slow");
const res_3 = processignData1<number, string>([10], "slow");

function processing<T>(data: T): T {
    return data;
}

interface ProcessingFn {
    <T>(data: T): T
}

let newFunc: ProcessingFn  = processing;

interface DataSaver {
    processing: ProcessingFn
    // processing: <T>(data: T) => T
}

const saver: DataSaver = {
    // processing(data) {
    //     console.log(data);
    //     return data;
    // }

    // processing(data) {
    //     return data;
    // }

    processing: processing
   
}