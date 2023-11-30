class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monica = new Employee(77, "Monica", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monica, emp_viny, emp_mahi];

const arrayNum = arrayEmployees.map((currentValue) =>{
    const array = (currentValue.emp_salary)
    return array
}
)
console.log(`List of all employee salary :`);
console.log(arrayNum);

console.log(`====================================================================`);

const arrayDept = arrayEmployees.map ((currentValue) => {
    const arraydept = (currentValue.emp_dept)
    return arraydept

}
)
console.log(`List of all departments :`);
console.log(arrayDept);

console.log(`====================================================================`);

const arrayId = arrayEmployees.map((currentValue)=>{
    const arrayid = (currentValue.emp_id)
    return arrayid

}
)
console.log(`List of all employee id :`);
console.log(arrayId);