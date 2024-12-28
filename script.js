const num1 = +prompt("Enter First Number")
const operators = prompt("Add Operator")
const num2 = +prompt("Enter Second Number")

let result;

// addtion
if (operators === "+") {
    result = num1 + num2;

// subtraction
} else if (operators === "-") {
    result = num1 - num2;

// multiplication
} else if (operators === "*") {
    result = num1 * num2;

// division
} else if (operators === "/") {
    result = num1 / num2;

} else if (operators === "%") {
    result = num1 % num2 ;
} else {
    result = "you have entered Invalid Operator"
}

alert (result);
