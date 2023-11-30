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


console.log("Sorted by descending Employee Id:");
const sortedArray = arrayEmployees.sort ((emp1,emp2) =>{
    return emp1.emp_id > emp2.emp_id ? 1 : -1
})
sortedArray.forEach(Employee => {
    console.log(`Employee ID : ${Employee.emp_id}      Employee Name : ${Employee.emp_name}       Employee Dept : ${Employee.emp_dept}`);
})
console.log('=========================================================');
console.log("Sorted by ascending Employee Department:");
const sort = arrayEmployees.sort ((emp1,emp2) => {
    return emp1.emp_dept > emp2.emp_dept ? 1 : -1
})
sort.forEach(Employee => {
    console.log(`Employee ID : ${Employee.emp_id}   Employee Dept : ${Employee.emp_dept}          Employee Company : ${Employee.emp_company}`);
})
console.log('=========================================================');
console.log("Sorted by descending Employee Salary:");
const sortedSalary = arrayEmployees.sort((emp1,emp2) =>{
    return emp1.emp_salary < emp2.emp_salary ? 1 : -1
})
sortedSalary.forEach(Employee => {
    console.log(`Employee Name : ${Employee.emp_name}   Employee Salary : ${Employee.emp_salary}    Employee Company : ${Employee.emp_company}`);
})
