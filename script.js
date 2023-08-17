
import{calculate}from "./calculator.js"

// TODO: Faire la manipulation du DOM dans ce fichier
// add var global

const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');
const history = document.querySelector('p');
let expression = '';
// select and add event to form
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
});

input.disabled = true;

function handleNumberInput(buttonValue) {
    input.value = input.value === '0' ? buttonValue : input.value + buttonValue;
    expression += buttonValue;
    history.textContent += buttonValue;
}

function handleOperatorInput(buttonValue) {
    input.value = '';
    expression += buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
    history.textContent = !history.textContent.includes('=') ? `${history.textContent} ${buttonValue} ` : ` ${expression.replace(/\*/g, '×').replace(/\//g, ' ÷')} `;
}

function handlePercentInput() {
    input.value = eval(expression) / 100;
    history.textContent = `${eval(expression) / 100}% `;
}

function handleEqualInput() {
    if (!history.textContent.includes('=')) {
        expression = eval(expression);
        input.value = expression === Infinity ? 'Error' : expression;
        history.textContent += " = ";
    } else {
        expression = eval(`${expression} (${input.value})`);
    }
}

function handleAcInput() {
    input.value = "";
    history.textContent = "";
    expression = "";
}

function handleCInput() {
    input.value = input.value.slice(0, -1);
    expression = input.value;
    history.textContent = "";
}

function handleNegationInput() {
    input.value = -input.value;
    expression = -expression;
}

function handleDecimalInput() {
    if (!input.value.includes('.')) {
        input.value += '.';
        expression += '.';
        if (!history.textContent.includes("=")||!history.textContent.includes("+")||!history.textContent.includes("-")||!history.textContent.includes("x")){
            history.textContent += '.';
        }
    }
}

buttons.forEach(button => {
    button.addEventListener('click', event => {
        const buttonValue = button.textContent;

        if (input.value.length < 15 && history.textContent.length < 25) {
            if (buttonValue >= '0' && buttonValue <= '9') {
                if(!history.textContent.includes("=")){
                    handleNumberInput(buttonValue);
                }else{
                    handleAcInput();
                    handleNumberInput(buttonValue);
                }
                
            } else {
                if (input.value !== '') {
                    switch (buttonValue) {
                        case '+':
                        case '-':
                        case '×':
                        case '÷':
                            handleOperatorInput(buttonValue);
                            break;
                        case '%':
                            handlePercentInput();
                            break;
                        case '=':
                            handleEqualInput();
                            break;
                        case 'AC':
                            handleAcInput();
                            break;
                        case 'C':
                            handleCInput();
                            break;
                        case '+/-':
                            handleNegationInput();
                            break;
                        case '.':
                            handleDecimalInput();
                            break;
                    }
                }
            }
        }
    });
});


document.addEventListener('keydown', event => {
    const key = event.key;

    if (/[0-9]/.test(key)) {
        handleNumberInput(key);
    } else if (/[\+\-\*\/]/.test(key)) {
        handleOperatorInput(key === '*' ? '×' : key === '/' ? '÷' : key);
    } else if (key === '%') {
        handlePercentInput();
    } else if (key === '=' || key === 'Enter') {
        handleEqualInput();
    } else if (key === 'Escape') {
        handleAcInput();
    } else if (key === 'Backspace') {
        handleCInput();
    } else if (key === '.') {
        handleDecimalInput();
    }
});



























