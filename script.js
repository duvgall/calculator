const display = document.querySelector('.display');
const buttons = document.querySelector('.button');

let firstNumber = '';
let secondNumber = '';                        
let symbol = '';                                       


                    



function add(num1, num2) {                        
    firstNumber = Number(num1) + Number(num2);
                                        // need a function here to clear everything ready for the next operation (clearForNext())
    return firstNumber;
    
}

function subtract(num1, num2) {
    firstNumber = Number(num1) - Number(num2);

    return firstNumber;
    
}

function multiply(num1, num2) {
    firstNumber = Number(num1) * Number(num2);

    return firstNumber;
    
}

function divide() {
    if (num2 === 0) {
            clearAll();
            display.textContent = 'You cannot divide by 0. Please start again.'
    } else {
    firstNumber = Number(num1) / Number(num2);
                                                                      // clearForNext()
    }
    
    return firstNumber;
}


function operator(symbol) {          // function to call one of the four basic function depending on user input
    if(symbol === '+') {

         add();
    }

    if(symbol === '-') {

         subtract();
    }
    
    if(symbol === '*') {

         multiply();
    }
    
    if(symbol == '/') {

         divide();
    }
}    



function equalsSymbol() {
 
    if (firstNumber != 0 && total == 0) {
        secondNumber = display.textContent;
        operator(symbol);
    } else if(total != 0) {
        secondNumber = display.textContent;
        firstNumber = total;
        operator(symbol)
    }else if(firstNumber == 0 && total == 0){

    }
}

function decimal() {
    
    
}

function clearAll() {
    
    display.textContent = ' ';
    firstNumber = 0;
    total = 0;
    symbol = ' ';
    secondNumber = 0;
}










button.addEventListner('click', checkEvents);