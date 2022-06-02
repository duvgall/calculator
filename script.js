let firstNumber = 0;                        //variable to store first input after display is cleared for second input
let total = 0;  
let symbol;                                       //variable to display running and final solution
const display = document.getElementById('display');                       



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

function one() {
    
    display.textContent += '1';
    firstNumber = display.textContent;
}

function two() {
    
    display.textContent += '2';
}

function three() {
    
    display.textContent += '3';
}

function four() {
    
    display.textContent += '4';
}

function five() {
    
    display.textContent += '5';
}

function six() {
    
    display.textContent += '6';
}

function seven() {
    
    display.textContent += '7';
}

function eight() {
    
    display.textContent += '8';
}

function nine() {
    
    display.textContent += '9';
}

function zero() {
    
    display.textContent += '0';
}

function plusSymbol() {                                             //get current number from display and store it in a variable.
    if(firstNumber != 0) {
        total = Number(firstNumber) + Number(display.textContent);
        display.textContent = total;
    } else {
        firstNumber = display.textContent;   
        symbol = '+';                                                  
        display.textContent = ' ';      
    }
}                                                                   // if variable one is not empty run equals and display total
                                                                    //then assign value of total to variable one
function subtractSymbol() {                                         //no need for any textContent to be added. remove this later.
    if(firstNumber != 0) {
        total = Number(firstNumber) - Number(display.textContent);
        display.textContent = total;
    } else {
        firstNumber = display.textContent;   
        symbol = '-';                                                  
        display.textContent = ' ';      
    }
    console.log(firstNumber);
}

function multiplySymbol() {
    
    if(firstNumber != 0) {
        total = Number(firstNumber) * Number(display.textContent);
        display.textContent = total;
    } else {
        firstNumber = display.textContent;   
        symbol = 'x';                                                  
        display.textContent = ' ';      
    }
}

function divideSymbol() {
    
    if(firstNumber != 0 & total === 0) {
        total = Number(firstNumber) / Number(display.textContent);
        display.textContent = total;
    } else if( firstNumber != 0 && total != 0) {
        total = Number(total) / Number(display.textContent);
        display.textContent = total;
    } else {
        firstNumber = display.textContent;   
        symbol = '/';                                                  
        display.textContent = ' ';      
    }
}

function equalsSymbol() {
    
    display.textContent = total
}

function decimalPoint() {
    
    display.textContent = ' ';
}

function clearButton() {
    
    display.textContent = ' ';
    firstNumber = 0;
    total = 0;
}