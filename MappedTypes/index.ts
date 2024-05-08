interface Currencies {
    usa: "usd";
    china?: "cny";
    russia: "rub";
    readonly kz: "tenge";
}

type CreateCustomCurr<T> = {
   -readonly [P in keyof T]-?: string;
}

type CustomCurrencies = CreateCustomCurr<Currencies>

type ROnlyCurr = Readonly<Currencies>;

// type CustomCurrencies = {
//     usa: string;
//     china: string;
//     russia: string;
//     kz: string;
// }

type Keys = "name" | "age" | "role";

type User2 = {
    [K in Keys]: string
}

const Hanna: User2 = {
    name: "Alex",
    age: "25",
    role: "admin"
}