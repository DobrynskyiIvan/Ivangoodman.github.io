let calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
}
$(document).ready(function () {
    $(".td").click(function () {
        let button = $(this).text();
        if ($(this).hasClass("digit") == true) {
            inputDigit(button)
            updateDisplay();
            return;
        }
        if ($(this).hasClass("dot") == true) {
            inputDot(button)
            updateDisplay();
            return;
        }
        if ($(this).hasClass("operator") == true) {
            inputOperator(button);
            updateDisplay();
            return;
        }
        if ($(this).hasClass("equal") == true) {
            inputEqual();
            updateDisplay();
            return;
        }
        if ($(this).hasClass("clear") == true) {
            resetCalculator();
            updateDisplay();

        }


    })

});

function inputOperator(value) {
    const {
        displayValue,
        firstOperand,
        waitingForSecondOperand,
        operator
    } = calculator;
    if (displayValue == 0) {
        return;

    } else if (waitingForSecondOperand == false) {
        calculator.operator = value;
        calculator.waitingForSecondOperand = true;
        calculator.firstOperand = displayValue;
        console.log(calculator.operator)
        return;
    }
    if (waitingForSecondOperand == true) {
        calculator.operator = value;
        console.log("New operator", calculator.operator)
        return;
    }

};

function inputEqual() {
    const {
        displayValue,
        firstOperand,
        waitingForSecondOperand,
        operator
    } = calculator;
    let result = null;
    if (waitingForSecondOperand == true) {
        return;
    }
    if (operator == "-") {
        result = firstOperand - displayValue;
        calculator.displayValue = result;
        return;
    }
    if (operator == "+") {
        result = +firstOperand + (+displayValue);
        calculator.displayValue = result;
        return;
    }
    if (operator == "/") {
        result = firstOperand / displayValue;
        calculator.displayValue = result;
        return;
    }
    if (operator == "*") {
        result = firstOperand * displayValue;
        calculator.displayValue = result;
        return;
    }


};

function inputDot(dot) {
    if (calculator.waitingForSecondOperand == true) return;


    if (!calculator.displayValue.includes(dot)) {

        calculator.displayValue += dot;
    }

};

function inputDigit(digit) {
    const {
        displayValue,
        waitingForSecondOperand
    } = calculator;
    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }

}

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = calculator.displayValue;

};

function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    console.log(calculator);
}