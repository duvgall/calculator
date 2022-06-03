let firstNumber = 0;
let secondNumber;                        //variable to store first input after display is cleared for second input
let total = 0;  
let symbol = ' ';                                       //variable to display running and final solution
let display = document.getElementById('display'); 
let runningTotal = document.getElementById('running-total');                     



function add() {                        // add two numbers. For each function below, will need to use DOM methods to take input from calculator and amendfirstNumberand b while storing value
    total = Number(firstNumber) + Number(secondNumber);
    runningTotal.textContent = total;
    display.textContent = ' ';
    console.log(total);
    console.log(firstNumber);
    console.log(secondNumber);
}

function subtract(firstNumber, secondNumber) {
    firstNumber = total;
    secondNumber = display.textContent;
    total = Number(firstNumber) - Number(secondNumber);
    runningTotal.textContent = total;
    display.textContent = ' ';
}

function multiply(firstNumber, secondNumber) {
    firstNumber = total;
    secondNumber = display.textContent;
    total = Number(firstNumber) * Number(secondNumber);
    runningTotal.textContent = total;
    display.textContent = ' ';
}

function divide(firstNumber, secondNumber) {
    firstNumber = total;
    secondNumber = display.textContent;
    total = Number(firstNumber) / Number(secondNumber);
    runningTotal.textContent = total;
    display.textContent = ' ';
}


function operator(firstNumber, secondNumber, symbol) {           // function to call one of the four basic function depending on user input
    if(symbol == '+') {
         add();
         console.log(firstNumber);
        console.log(secondNumber);
        console.log(symbol);
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

function plusSymbol() {                                             
    if(firstNumber != 0 & total === 0) {
        total = Number(firstNumber) + Number(display.textContent);
        symbol = '+';
        runningTotal.textContent = total;
        display.textContent = ' ';
        console.log(firstNumber);
    } else if( firstNumber != 0 && total != 0) {;
        total = Number(total) + Number(display.textContent);
        symbol = '+';
        runningTotal.textContent = total
        display.textContent = ' ';
        console.log(firstNumber);
    } else {
        firstNumber = display.textContent;   
        symbol = '+';                                                  
        display.textContent = ' ';
        console.log(firstNumber);      
    }
}                                                                  
                                                                    
function subtractSymbol() {                                         
    if(firstNumber != 0 & total === 0) {
        total = Number(firstNumber) - Number(display.textContent);
        symbol = '-';
        runningTotal.textContent = total;
        display.textContent = ' ';
        console.log(firstNumber);
    } else if( firstNumber != 0 && total != 0) {;
        total = Number(total) - Number(display.textContent);
        symbol = '-';
        runningTotal.textContent = total
        display.textContent = ' ';
        console.log(firstNumber);
    } else {
        firstNumber = display.textContent;   
        symbol = '-';                                                  
        display.textContent = ' ';
        console.log(firstNumber);
    }
}

function multiplySymbol() {
    
    if(firstNumber != 0 & total === 0) {
        total = Number(firstNumber) * Number(display.textContent);
        symbol = '*';
        runningTotal.textContent = total;
        display.textContent = ' ';
        console.log(firstNumber);
    } else if( firstNumber != 0 && total != 0) {;
        total = Number(total) * Number(display.textContent);
        symbol = '*';
        runningTotal.textContent = total
        display.textContent = ' ';
        console.log(firstNumber);
    } else {
        firstNumber = display.textContent;   
        symbol = '*';                                                  
        display.textContent = ' ';
        console.log(firstNumber);     
    }
}

function divideSymbol() {
    
    if(firstNumber != 0 & total === 0) {
        total = Number(firstNumber) / Number(display.textContent);
        symbol = '/';
        runningTotal.textContent = total;
        display.textContent = ' ';
        console.log(firstNumber);
    } else if( firstNumber != 0 && total != 0) {;
        total = Number(total) / Number(display.textContent);
        symbol = '/';
        runningTotal.textContent = total
        display.textContent = ' ';
        console.log(firstNumber);
    } else {
        firstNumber = display.textContent;   
        symbol = '/';                                                  
        display.textContent = ' ';
        console.log(firstNumber);
    }
}

function equalsSymbol() {
 
    if (firstNumber != 0 && total == 0) {
        secondNumber = display.textContent;
        operator(firstNumber, secondNumber, symbol);
        console.log(firstNumber);
        console.log(secondNumber);
    } else if(firstNumber != 0 && total != 0) {
        secondNumber = total;
        operator(firstNumber, secondNumber, symbol)
        console.log(firstNumber);
        console.log(secondNumber);
    }

}

function decimalPoint() {
    
    display.textContent = ' ';
}

function clearButton() {
    
    display.textContent = ' ';
    runningTotal.textContent = ' ';
    firstNumber = 0;
    total = 0;
    symbol = ' ';
    secondNumber = 0;
}