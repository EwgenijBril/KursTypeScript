interface ICompany {
    name: string;
    debts: number;
}

type CompanyKeys = keyof ICompany;
const keys: CompanyKeys = "name";

function printDebs<T, K extends keyof T, S extends keyof T>(
    company: T,
    name: K,
    debts: S
) {
    console.log(`Company ${company[name]}, debts: ${company[debts]}`)
}

const hh: ICompany = {
    name: 'HH',
    debts: 50000
}

printDebs(hh, "name", "debts");

const google = {
    name: "Google",
    open: "true"
}

printDebs(google, "name", "open");

type GoogleKeys = keyof typeof google
const keys2: GoogleKeys = "name";