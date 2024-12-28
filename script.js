// const num1 = +prompt("Enter First Number")
// const operators = prompt("Add Operator")
// const num2 = +prompt("Enter Second Number")

// let result;

// // addtion
// if (operators === "+") {
//     result = num1 + num2;

// // subtraction
// } else if (operators === "-") {
//     result = num1 - num2;

// // multiplication
// } else if (operators === "*") {
//     result = num1 * num2;

// // division
// } else if (operators === "/") {
//     result = num1 / num2;

// } else if (operators === "%") {
//     result = num1 % num2 ;
// } else {
//     result = "you have entered Invalid Operator"
// }

// alert (result);

const num1 = +prompt("Enter First Number"); 
const operators = prompt("Add Operator");
const num2 = +prompt("Enter Second Number"); 

let result;


if (operators === "+") {
    result = num1 + num2;

} else if (operators === "-") {
    result = num1 - num2;


} else if (operators === "*") {
    result = num1 * num2;

} else if (operators === "/") {
    result = num1 / num2;


} else if (operators === "%") {
    result = num1 % num2;

} else {
    result = "You have entered an invalid operator";
}

alert(result);




git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/sadiqkhan7777/simple-calculator-js.git
git push -u origin main