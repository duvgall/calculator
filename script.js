let firstNumber = 0;                        //variable to store first input after display is cleared for second input
let total = 0;                              //variable to display running and final solution



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

function plusSymbol() {                                             //get current number from display and store it in a variable.
    const display = document.getElementById('display');             //store + in symbol to be used in operator function
    display.textContent += '+';                                     //clear the display
}                                                                   // if variable one is not empty run equals and display total
                                                                    //then assign value of total to variable one
function subtractSymbol() {                                         //no need for any textContent to be added. remove this later.
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

function clear() {
    const display = document.getElementById('display');
    display.textContent += '';
    firstNumber = 0;
    total = 0;
}
