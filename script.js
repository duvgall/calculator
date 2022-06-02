let firstNumber = 0;
let secondNumber;                        //variable to store first input after display is cleared for second input
let total = 0;  
let symbol;                                       //variable to display running and final solution
const display = document.getElementById('display'); 
const runningTotal = document.getElementById('running-total');                     



function add() {                        // add two numbers. For each function below, will need to use DOM methods to take input from calculator and amendfirstNumberand b while storing value
    firstNumber = total;
    secondNumber = display.textContent;
    total = Number(firstNumber) + Number(secondNumber);
    runningTotal.textContent = total;
    display.textContent = ' ';
    console.log(firstNumber);
    console.log(secondNumber);
    console.log(total);
    console.log(display.textContent);
}

function subtract(firstNumber, secondNumber) {
    total = Number(firstNumber) - Number(secondNumber);
    runningTotal.textContent = total;
    display.textContent = ' ';
}

function multiply(firstNumber, secondNumber) {
    total = Number(firstNumber) * Number(secondNumber);
    runningTotal.textContent = total;
    display.textContent = ' ';
}

function divide(firstNumber, secondNumber) {
    total =Number(firstNumber) / Number(secondNumber);
    runningTotal.textContent = total;
    display.textContent = ' ';
}


function operator(firstNumber, secondNumber, symbol) {           // function to call one of the four basic function depending on user input
    if(symbol == '+') {
         add();
    }else if(symbol == '-') {
         subtract(firstNumber, secondNumber);
    } else if(symbol == '*') {
         multiply(firstNumber, secondNumber);
    } else if(symbol == '/') {
         divide(firstNumber, secondNumber);
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

function plusSymbol() {                                             //get current number from display and store it infirstNumbervariable.
    if(firstNumber != 0 & total === 0) {
        total = Number(firstNumber) + Number(display.textContent);
        runningTotal.textContent = total;
        display.textContent = ' ';
    } else if( firstNumber != 0 && total != 0) {;
        total = Number(total) + Number(display.textContent);
        runningTotal.textContent = total
        display.textContent = ' ';
    } else {
        firstNumber = display.textContent; 
        total = firstNumber;  
        symbol = '+';                                                  
        display.textContent = ' ';
        console.log(firstNumber)      
    }
}                                                                   // if variable one is not empty run equals and display total
                                                                    //then assign value of total to variable one
function subtractSymbol() {                                         //no need for any textContent to be added. remove this later.
    if(firstNumber != 0 & total === 0) {
        total = Number(firstNumber) - Number(display.textContent);
        runningTotal.textContent = total;
        display.textContent = ' ';
    } else if( firstNumber != 0 && total != 0) {;
        total = Number(total) - Number(display.textContent);
        runningTotal.textContent = total
        display.textContent = ' ';
    } else {
        firstNumber = display.textContent;   
        symbol = '-';                                                  
        display.textContent = ' ';      
    }
}

function multiplySymbol() {
    
    if(firstNumber != 0 & total === 0) {
        total = Number(firstNumber) * Number(display.textContent);
        runningTotal.textContent = total;
        display.textContent = ' ';
    } else if( firstNumber != 0 && total != 0) {;
        total = Number(total) * Number(display.textContent);
        runningTotal.textContent = total
        display.textContent = ' ';
    } else {
        firstNumber = display.textContent;   
        symbol = 'x';                                                  
        display.textContent = ' ';      
    }      
}

function divideSymbol() {
    
    if(firstNumber != 0 & total === 0) {
        total = Number(firstNumber) / Number(display.textContent);
        runningTotal.textContent = total;
        display.textContent = ' ';
    } else if( firstNumber != 0 && total != 0) {;
        total = Number(total) / Number(display.textContent);
        runningTotal.textContent = total
        display.textContent = ' ';
    } else {
        firstNumber = display.textContent;   
        symbol = '/';                                                  
        display.textContent = ' ';      
    }
}

function equalsSymbol() {
 

    operator(firstNumber, secondNumber, symbol);

}

function decimalPoint() {
    
    display.textContent = ' ';
}

function clearButton() {
    
    display.textContent = ' ';
    runningTotal.textContent = ' ';
    firstNumber = 0;
    total = 0;
}