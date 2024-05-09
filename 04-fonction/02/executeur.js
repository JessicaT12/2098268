
'use strict'

function execute(operation, a, b) {
    if (typeof operation === 'string') {
        return executeStringOperation(operation, a, b);
    } else if (typeof operation === 'function') {
        return operation(a, b);
    } else {
        return "Type d'operation inconnue";
    }
}


function executeStringOperation(operation, a, b) {
    switch (operation) {
        case 'ADD':
            return add(a, b);
        case 'SUB':
            return subtract(a, b);
        case 'MUL':
            return multiply(a, b);
        case 'DIV':
            return divide(a, b);
        default:
            return "Nom d'operation inconnue";
    }
}


function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}


function multiply(a, b) {
    return a * b;
}


function divide(a, b) {
    if (b === 0) {
        return "Division by zero error";
    }
    return a / b;
}