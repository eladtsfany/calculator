
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (num, divider) => divider == 0 ? "Division by 0" : num / divider;

// let firstNum = null;
// let secondNum = null;
// let operator = null;
// let lastResult = null;
// let displayInput = document.querySelector('.calc-display>div.input');

// function operate(num1, operator, num2) {
//     let result;
//     switch (operator) {
//         case '+':
//             result = add(num1, num2);
//             break;
//         case '-':
//             result = subtract(num1, num2);
//             break;
//         case 'x':
//             result = multiply(num1, num2);
//             break;
//         case '/':
//             result = divide(num1, num2);
//             if (result === "Division by 0")
//                 result = "Error: Division by 0";
//             break;
//         default:
//             result = "Error: Invalid Operation";
//     }
//     return result;
// };

// const calcButtons = Array.from(document.querySelectorAll('.calc-btn')).forEach((btn) => {
//     const parsedValue = parseFloat(btn.textContent);
//     // check if the btn is number(true) or an operation(false)
//     if (!isNaN(parsedValue)) btn.addEventListener('click', (e) =>
//         (displayInput.textContent == 0 || displayInput.textContent.indexOf('Error') !== -1) ? displayInput.textContent = e.target.textContent : displayInput.textContent += e.target.textContent);
//     else btn.addEventListener('click', handleOperator);
// });

// function handleOperator(e) {
//     operator = e.target.textContent;
//     if (operator == '=') {
//         // operate & update display
//         // secondNum = parseFloat(displayInput.textContent.slice(displayInput.textContent.indexOf(operator)));
//         const parts = displayInput.textContent.split(' ');
//         operator = parts[1];
//         secondNum = parseFloat(parts[2]);
//         lastResult = operate((lastResult === null ? firstNum : lastResult), operator, secondNum);
//         displayInput.textContent = lastResult.toString();
//     }
//     else if (operator == 'Delete') {
//         //remove the last element (operator if operator is last/digit if number is last)
//     }
//     else if (operator == 'Clear') {
//         displayInput.textContent = 0;
//         firstNum = null;
//         secondNum = null;
//         operator = null;
//         lastResult = null;
//     }
//     else {
//         if (!lastResult) {
//             firstNum = parseFloat(displayInput.textContent);
//             lastResult = firstNum;
//         }
//         else {
//             secondNum = parseFloat(displayInput.textContent.split(' ')[2]);
//             lastResult = operate(firstNum, operator, secondNum);
//         }
//         displayInput.textContent = `${lastResult} ${operator} `;
//     }
// };


const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (num, divider) => (divider === 0 ? "Division by 0" : num / divider);

let firstNum = null;
let secondNum = null;
let operator = null;
let lastResult = null;
let displayInput = document.querySelector('.calc-display>div.input');

function operate(num1, operator, num2) {
    let result;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case 'x':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            if (result === "Division by 0")
                result = "Error: Division by 0";
            break;
        default:
            result = "Error: Invalid Operation";
    }
    return result;
}

const calcButtons = Array.from(document.querySelectorAll('.calc-btn')).forEach((btn) => {
    const btnId = btn.id;
    const parsedValue = parseFloat(btn.textContent);
    // check if the btn is number(true) or an operation(false)
    if (!isNaN(parsedValue) || btnId === 'point') {
        btn.addEventListener('click', (e) => {
            if (displayInput.textContent === "0" || displayInput.textContent === "Error: Division by 0") {
                displayInput.textContent = e.target.textContent;
            } else {
                displayInput.textContent += e.target.textContent;
            }
        });
    } else {
        btn.addEventListener('click', handleOperator);
    }
});

function handleOperator(e) {
    operator = e.target.textContent;
    if (operator == '=') {
        // ... (existing code for '=' operator)
    } else if (operator == 'Delete') {
        // Handle 'Delete' button press
        let inputText = displayInput.textContent.trim();
        if (inputText.length === 1) {
            // If there's only one character, reset to '0'
            displayInput.textContent = '0';
            firstNum = null;
            secondNum = null;
            operator = null;
            lastResult = null;
        } else {
            // Check if the last character is an operator or a digit
            const lastChar = inputText[inputText.length - 1];
            if (isNaN(lastChar) && lastChar !== '.') {
                // If it's an operator, remove it with the space before it
                displayInput.textContent = inputText.slice(0, -3);
                operator = null;
            } else {
                // If it's a digit, remove only the last digit
                displayInput.textContent = inputText.slice(0, -1);
            }
        }
    } else if (operator == 'Clear') {
        // Clear all
        displayInput.textContent = "0";
        firstNum = null;
        secondNum = null;
        operator = null;
        lastResult = null;
    } else {
        if (lastResult === null) {
            firstNum = parseFloat(displayInput.textContent);
            lastResult = firstNum;
        } else {
            secondNum = parseFloat(displayInput.textContent.split(' ')[2]);
            lastResult = operate(firstNum, operator, secondNum);
            firstNum = lastResult; // Store result as the first number for potential chaining
        }
        displayInput.textContent = `${lastResult} ${operator} `;
        operator = null;
    }
}
