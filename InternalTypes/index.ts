// let num: Number = new Number(5);
// let num2: number = 5;
// let num3 = Number(5)

// num = num2;

const num = 5;
const strNum: string = num.toString();
const str = '5';
const numStr: number = +str;

interface Department {
    name: string;
    budget: number 
}

const department: Department  = {
    name: 'web-dev',
    budget: 50000
}

interface Project {
    name: string,
    projectBudget: number
}


const transformDepartment = (department: Department, amount: number): Project => {
    return {
        name: department.name,
        projectBudget: amount,
    };
}

const mainProject = transformDepartment(department, 4000)