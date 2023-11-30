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

const employeesFromWpiro = arrayEmployees.filter( (employee) => employee.emp_company == 'Wipro')
 console.log("Wipro employee :");
console.table(employeesFromWpiro);
console.log("===========================================");

const employeesFromITORHR = arrayEmployees.filter( (employee) => employee.emp_dept == 'IT' || employee.emp_dept == 'HR')
console.table(employeesFromITORHR);

console.log("===========================================");

const employeesid = arrayEmployees.filter((employee) => employee.emp_id >= 50 )
console.table(employeesid);
console.log("===========================================");

const namesStartingWithAVM = arrayEmployees.filter(employee => {
    const firstLetter = employee.emp_name.charAt(0);
    return firstLetter === 'A' || firstLetter === 'V' || firstLetter === 'M';
}).map(employee => employee.emp_name);

console.log(namesStartingWithAVM);
console.log("===========================================");

const avgSalary = arrayEmployees.reduce ( (runningtotal,value) =>{
    return runningtotal + value.emp_salary
},0)
console.log(avgSalary/arrayEmployees.length);
console.log("===========================================");
const ITdept = arrayEmployees.filter( employee => employee.emp_dept === 'IT' )
 ITdept.forEach(employee => {
    console.log('IT Employess :');
    console.log(`${employee.emp_name} , ${employee.emp_dept}, ${employee.emp_salary}`);
 });
 console.log("===========================================");
 const avgITsalary = ITdept.reduce((runningtotal,value) =>{
    return runningtotal + value.emp_salary
 },0)
 console.log(avgITsalary/ITdept.length);

