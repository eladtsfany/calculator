// for unknown amount of arguments
// const add = (...args) => {
// let total = 0;
// for (const arg of args) total += arg;
// return total;
// };


// Calculator operators
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (num, divider) => divider == 0 ? "Divsion by 0 is not allowed" : num / divider;

// check the functions
// console.log(`add(3,3) => ${add(3, 3)}`);
// console.log(`subtract(3,3) => ${subtract(3, 3)}`);
// console.log(`multiply(3,3) => ${multiply(3, 3)}`);
// console.log(`divide(3,3) => ${divide(3, 3)}`);
// console.log(`divide(3,0) => ${divide(3, 0)}`);

let firstNum = 0;
let operator = undefined;
let secondNum = 0;

function operate(num1, operator, num2) {
    switch (operator) {
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
        default:
            console.log('Invalid operator');
    }
};

