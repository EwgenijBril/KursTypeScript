interface Currencies {
    usa: "usd";
    china2: "cny";
    russia: "rub";
    kz2: "tenge";
}

type CreateCustomCurr1<T> = {
    [P in keyof T as `custom${Capitalize<string & P>}`]: string;
}

type CustomCurrencies1 = CreateCustomCurr1<Currencies>

type MyAnimation = "fade" | "swipe";
type Direction = "in" | "out";
type MyNewAnimation = `${MyAnimation}${Capitalize<Direction>}`