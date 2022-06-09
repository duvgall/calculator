const display = document.querySelector('.display');
const buttons = document.querySelector('.buttons');

let firstNumber = '';
let secondNumber = '';                        
let symbol = ''; 
let temp = '';                                      


                    



function add(num1, num2) {                        
    firstNumber = Number(num1) + Number(num2);
    clearForNext();                               // need a function here to clear everything ready for the next operation (clearForNext())
    return firstNumber;
    
}

function subtract(num1, num2) {
    firstNumber = Number(num1) - Number(num2);
    clearForNext();
    return firstNumber;
    
}

function multiply(num1, num2) {
    firstNumber = Number(num1) * Number(num2);
    clearForNext();
    return firstNumber;
    
}

function divide(num1, num2) {
    if (num2 === 0) {
            clearAll();
            display.textContent = 'You cannot divide by 0. Please start again.'
    } else {
        firstNumber = Number(num1) / Number(num2);
        clearForNext()  
        return firstNumber;                                                            // clearForNext()
    }
}


function operate(num1, num2, operator) {          
    num1 = firstNumber;
    num2 = secondNumber;
    operator = symbol
    
    if(operator === '+') {

         add(num1, num2);
    }

    if(operator === '-') {

         subtract(num1, num2);
    }
    
    if(operator === '*') {

         multiply(num1, num2);
    }
    
    if(operator === '/') {

         divide(num1, num2);
    }
}    

function concatValue(event) {                                                                         // concatate numbers from eents to temp variable and display
           if(firstNumber !== '' && secondNumber === '' && temp === '' && symbol === ''){
           clearForNext()   
           temp += event.target.value;
           display.textContent = temp;                                                                        // clear everything first and then concatenate with if statement
           } else {
               temp += event.target.value;
               display.textContent = temp;
           }

}

function selectOperator(event) {                                                                      //triggered by event listener on operator buttons
        if(firstNumber === '' && temp === '' && secondNumber === '') {
            display.textContent = 'Error! Please select a number first';
            return;
        }   else if(firstNumber === '' && temp !== '' & secondNumber === '') {
            firstNumber = temp;
            temp = '';
            symbol = event.target.value;
            return;
        }   else if (firstNumber !== '' && temp === '' && secondNumber === '') {
            symbol = event.target.value;
            return;
        }   else if (firstNumber !== '' && temp !== '' && secondNumber === '') {
            secondNumber = temp;
            temp = '';
            operate(firstNumber, secondNumber, symbol);
            symbol = event.target.value;
            return;
        }
 

}


function equalsSymbol(event) {
        if (firstNumber === '' && temp === '' && secondNumber === '' && symbol === ''){
            clearForNext();
            display.textContent = 'Error. Please select your first number';
            return
        }
        if (firstNumber !== '' && temp === '' && symbol !== '' && secondNumber === '') {
            display.textContent = 'Error. Please select your second number';
            return
        }
        if (firstNumber === '' && symbol === '' && temp !== '' && secondNumber === '') {
            display.textContent = 'Error. Please select an operator and a second number'
            return
        } else {
            secondNumber = temp;
            temp = '';
            operate(firstNumber, secondNumber, symbol);
            return;
        }
}

function decimal(event) {                                                                               //if the display(i.e temp) does not include a decimal, then add
    if (!temp.includes('.')){
    temp += event.target.value;
    }
    display.textContent = temp;
    
}


function deleteValue(){                             // slice the last element from the temp display string
       temp = temp.slice(0, -1);
        display.textContent = temp;

}

function clearForNext() {                           // clear everything except firstNumber
    if(!Number.isInteger(firstNumber)) {
        firstNumber = parseFloat(firstNumber).toFixed(2);
    }
    secondNumber = ''
    symbol = ''
    temp = ''
    display.textContent = firstNumber;

}

function clearAll() {                               //clear everything
    firstNumber = '';
    symbol = '';
    secondNumber = '';
    temp = '';
    display.textContent = temp;
}

function checkEvents(event) {                            // function to collect the button press event and send it to the appropriate function

    if (event.target.classList.contains('numBtn')) {
            concatValue(event);
    }

    if(event.target.classList.contains('operator')) {
            selectOperator(event);
    }

    if(event.target.value === '=') {
        equalsSymbol(event);
    }

    if(event.target.value === '.') {
        decimal(event);
    }

    if(event.target.value === 'delete') {
        deleteValue();
    }

    if(event.target.value === 'clear') {
        clearAll();
    }

}









buttons.addEventListener('click', checkEvents)             //listen for button clicksfunction