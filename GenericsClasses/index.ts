class User_1<T, S> {
    name: T;
    age: S;

    constructor(name: T,  age: S) {
        this.name = name;
        this.age = age;
    }

    sayMyFullName<T>(surname: T): string {
        if(typeof surname !== "string") {
            return `I have only name: ${this.name}`;
        } else {
            return `${this.name} ${surname}`;
        }
    }
}

class AdminUser<T> extends User_1<string, number> {
    rules: T;
}

const ewgenij = new User_1("Ewgenij", 36);
console.log(ewgenij.sayMyFullName("Smith"));

const nameData = "Alex";
const ageData = 24;

const alex = new User_1<string, number>(nameData, ageData);
console.log(alex);
