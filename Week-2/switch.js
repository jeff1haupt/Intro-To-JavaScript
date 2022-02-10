// let employeeId = 1111;

// switch (employeeId) {
//     case 104: // does 106 == 104 // false
//         console.log("Employee: Joe Smith");
//         break;
//     case 105: // does 106 == 105 // false
//         console.log("Employee: Nicole Thompson");
//         break;
//     case 106:
//         console.log("Employee: Juan Gonzalez");
//         break;
//     case 107:
//         console.log("Employee: Abby Thomas");
//         break;
//     default:
//         console.log("Invalid employee id entered");
// }

var state = "Indiana";

switch (state) {
    case "Rhode Island":
    case "Indiana":
        var salesTax = .07;
        break;
    case "Florida":
    case "Maryland":
    case "Michigan":
        var salesTax = .06;
        break;
    case "Wisconsin":
    case "North Dakota":
        var salesTax = .05;
        break;
    default:
        var salesTax = .04;
}

console.log(`${state}'s base sales tax rate is ${(salesTax * 100).toFixed(2)}%`);