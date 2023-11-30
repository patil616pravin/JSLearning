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

const employeesFromTCS = arrayEmployees.filter(employee => employee.emp_company === 'TCS');

employeesFromTCS.forEach(employee => {
    console.log(`All the employee from TCS :`);
    console.log(`Company: ${employee.emp_company}, Employee Name: ${employee.emp_name}`);
});

console.log(`=================================================================================`);
const employeesFromWipro = arrayEmployees.filter(employee => employee.emp_company==='Wipro')

if (employeesFromWipro.length > 0) {
    const totalSalary = employeesFromWipro.reduce((sum, employee) => sum + employee.emp_salary, 0);
    const averageSalary = totalSalary / employeesFromWipro.length;
    console.log(`Average salary of employees from Wipro: ${averageSalary}`);
} else {
    console.log('No employees from Wipro found');
}