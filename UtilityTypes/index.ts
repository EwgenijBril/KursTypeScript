interface Currencies {
    usa: "usd";
    china2: "cny";
    russia: "rub";
    kz2: "tenge";
}

type CurrWithoutUSA = Omit<Currencies, "usa">;
type CurrUSAAndRassia = Pick<Currencies, "usa" | "russia">;
type CountriesWithoutUSA = Exclude<keyof Currencies, "usa">;

type FadeType = Exclude<MyAnimation1, "swipe">;
type SwipeType = Extract<MyAnimation1 | Direction1, "swipe">;

type CreateCustomCurr2<T> = {
    [P in keyof T as `custom${Capitalize<string & P>}`]: string;
}

type PlayersNames = "alex" | "john";
type CustomCurrencies2 = CreateCustomCurr2<Currencies>
type GameDataCurr = Record<PlayersNames, CustomCurrencies2>

const gameData: GameDataCurr = {
    alex: {
        customChina2: "sdfdkf",
        customKz2: "sdfdkf",
        customRussia: "sdfdkf",
        customUsa: "sdfdkf",

    },
    john: {
        customChina2: "sdfdkf",
        customKz2: "sdfdkf",
        customRussia: "sdfdkf",
        customUsa: "sdfdkf",

    }
}



type MyAnimation1 = "fade" | "swipe";
type Direction1 = "in" | "out";
type MyNewAnimation1 = `${MyAnimation}${Capitalize<Direction>}`