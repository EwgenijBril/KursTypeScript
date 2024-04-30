type voidFunc = () => void;

const retString: voidFunc = () => {
    return "string";

};

const s = retString();
console.log(s)

const retNum: voidFunc = () => {
    return 5;
};

const n = retNum();
console.log(n);

const names = ["Anna", "John"];
const newArr = names.slice();

names.forEach((name, i, arr) => arr.push("Hey!"));