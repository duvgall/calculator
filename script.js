function add(a, b) {                        // add two numbers. For each function below, will need to use DOM methods to take input from calculator and amend a and b while storing value
    
    return a + b;
}

function subtract(a, b) {
    
    return a - b;
}

function multiply(a, b) {

    return a * b;
}

function divide(a, b) {

    return a / b;
}

console.log(add(4, 5));                     // testing basic functionality
console.log(subtract(13, 5));
console.log(multiply(2, 4));
console.log(divide(24, 3));

function operator(a, b, symbol) {           // function to call one of the four basic function depending on user input
    if(symbol == '+') {
        return add(a, b);
    }else if(symbol == '-') {
        return subtract(a, b);
    } else if(symbol == '*') {
       return multiply(a, b);
    } else if(symbol == '/') {
        return divide(a, b);
    }

}
console.log(operator(4, 4, '+'));
console.log(operator(4, 4, '-'));
console.log(operator(4, 4, '*'));
console.log(operator(4, 4, '/'));

function one() {
    const display = document.getElementById('display');
    display.textContent += '1';
}

function two() {
    const display = document.getElementById('display');
    display.textContent += '2';
}

function three() {
    const display = document.getElementById('display');
    display.textContent += '3';
}

function four() {
    const display = document.getElementById('display');
    display.textContent += '4';
}

function five() {
    const display = document.getElementById('display');
    display.textContent += '5';
}

function six() {
    const display = document.getElementById('display');
    display.textContent += '6';
}

function seven() {
    const display = document.getElementById('display');
    display.textContent += '7';
}

function eight() {
    const display = document.getElementById('display');
    display.textContent += '8';
}

function nine() {
    const display = document.getElementById('display');
    display.textContent += '9';
}

function zero() {
    const display = document.getElementById('display');
    display.textContent += '0';
}

function plusSymbol() {
    const display = document.getElementById('display');
    display.textContent += '+';
}

function subtractSymbol() {
    const display = document.getElementById('display');
    display.textContent += '-';
}

function multiplySymbol() {
    const display = document.getElementById('display');
    display.textContent += 'x';
}

function divideSymbol() {
    const display = document.getElementById('display');
    display.textContent += '/';
}

function equalsSymbol() {
    const display = document.getElementById('display');
    display.textContent += '=';
}

function decimalPoint() {
    const display = document.getElementById('display');
    display.textContent += '.';
}
