class Employee{
    constructor (emp_id,emp_name,emp_dept,emp_salary,emp_cpmpany){
        this.emp_id=emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_cpmpany = emp_cpmpany;
    }

}
const emp_anil = new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha = new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny = new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi = new Employee(99,"Mahesh","HR",85000,"Infy");

const arrayEmployess = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("===============================Assignment 2=======================================");
console.log("===================================Q1===================================");
for (const employee of arrayEmployess) {
    if (employee.emp_cpmpany === 'TCS') {
        console.log('Employee Name:-', employee.emp_name ,'Company Name:-', employee.emp_cpmpany);
    }
}
console.log("====================================Q2==================================");
for (const employee of arrayEmployess) {
    if (employee.emp_dept === 'Finance') {
        console.log('Employee Name:-', employee.emp_dept ,'Company Name:-', employee.emp_name);
    }
}
console.log("======================================Q3================================");
for (const employee of arrayEmployess) {
    if (employee.emp_name.startsWith('R')) {
        console.log(`ID:- ${employee.emp_id}, Name:- ${employee.emp_name}, Department:- ${employee.emp_dept}, Salary:- ${employee.emp_salary}, Company:- ${employee.emp_cpmpany}`);
    }
}

console.log("========================================Q4==============================");
for (const employee of arrayEmployess) {
    if (employee.emp_salary > 75000) {
        console.log(`Name:- ${employee.emp_name},Salary:- ${employee.emp_salary}, Company:- ${employee.emp_cpmpany}`);
    }
}


console.log("=========================================Q5=============================");
for (const employee of arrayEmployess) {
    if (employee.emp_salary >=50000 && employee.emp_dept === 'IT' ) {
        console.log(`ID:- ${employee.emp_id}, Name:- ${employee.emp_name}, Department:- ${employee.emp_dept}, Salary:- ${employee.emp_salary}, Company:- ${employee.emp_cpmpany}`);
    }
}

console.log("===========================================Q6===========================");
for (const employee of arrayEmployess) {
    if (employee.emp_cpmpany ===  "Infy") {
        console.log(`ID:- ${employee.emp_id}, Name:- ${employee.emp_name}, Department:- ${employee.emp_dept}, Salary:- ${employee.emp_salary}, Company:- ${employee.emp_cpmpany}`);    }
}