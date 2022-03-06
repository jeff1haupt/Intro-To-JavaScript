class Employee {
    constructor(employeeId, firstName, lastName, SSN, email, salary) {
        this.employeeId = employeeId; // references the specific instance you are creating or accessing - 'this' keyword
        this.employeeFirstName = firstName;
        this.employeeLastName = lastName;
        this.employeeSSN = SSN;
        this.employeeEmail = email;
        this.annualSalary = salary;
    }
    calculateVacationTime(years) {
        if ( years <= 2) {
            return '2 weeks vacation time'
        } else if ( years <= 5) {
            return '3 weeks vacation time'
        } else {
            return '4 weeks vacation time'
        }
    }
    calculateBonus() {
        return `$${this.annualSalary * .10} is ${this.employeeFirstName}'s bonus`
    }
}

const employee1 = new Employee('0012', 'Joe', 'Smith', '111-111-1111', 'joesmith@example.com', 55000);
// employee1 is an instance of the Employee class 
const employee2 = new Employee('0013', 'Jane', 'Doe', '222-22-2222', 'janedoe@example.com', 70000);

// const employee3 = new Employee(
//     prompt("Enter employee id: "),
//     prompt("Enter employee first name: "),
//     prompt("Enter employee last name: "),
//     prompt("Enter employee SSN: ")
// )

employee2.employeeLastName = "Stevens"
// console.log(employee2.calculateVacationTime(3));

console.log(employee1);
console.log(employee2);
console.log(typeof employee1);
employee1.annualSalary = 60000;

console.log(employee1.calculateBonus());
console.log(employee2.calculateBonus());
// console.log(employee3);
