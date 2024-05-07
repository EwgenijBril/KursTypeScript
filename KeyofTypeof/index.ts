interface ICompany {
    name: string;
    debts: number;
    departments: Department[];
    management: {
        owner: string;
    }
}

interface Department {
    [key: string]: string;
}
let debts: "debts" = "debts";
type CompanyDebtsType = ICompany[typeof debts];
// type CompanyDebtsType = ICompany["debts"];
type CompanyOwnerType = ICompany["management"]["owner"];
type CompanyDepartmentsType = ICompany["departments"][number];
type CompanyDepartmentsTypes = ICompany["departments"];
type Test = ICompany[keyof ICompany];

type CompanyKeys = keyof ICompany;
const keys: CompanyKeys = "name";

function printDebs<T, K extends keyof T, S extends keyof T>(
    company: T,
    name: K,
    debts: S
) {
    console.log(`Company ${company[name]}, debts: ${company[debts]}`)
}

// const hh: ICompany = {
//     name: 'HH',
//     debts: 50000
// }

// printDebs(hh, "name", "debts");

// const google: ICompany = {
//     name: 'Google',
//     debts: 50000,
//     departments: {
//         sales: "sales",
//         developer: "dev"
//     },
//     management: {
//         owner: "John",
//     }

// }

// printDebs(google, "name", "debts");


// const google = {
//     name: "Google",
//     open: "true"
// }

// printDebs(google, "name", "open");

// type GoogleKeys = keyof typeof google
// const keys2: GoogleKeys = "name";