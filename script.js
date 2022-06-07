const display = document.querySelector('.display');
const buttons = document.querySelector('.button');

let firstNumber = '';
let secondNumber = '';                        
let symbol = ''; 
let temp = '';                                      


                    



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
        clearForNext()                                                              // clearForNext()
    }
    
    return firstNumber;
}


function operator(symbol) {          
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

function concatValue(e) {                                        // concatate numbers from events to temp variable and display
                                                                // clear everything first and then concatenate with if statement

}

function selectOperator(e) {                                     //triggered by event listener on operator buttons
                                                                // if FN and SN are 0 it is error. If display is not blank, FN = temp. If FN and Temp !== 0, SN = temp and operate


}


function equalsSymbol(e) {
 
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

function decimal(e) {                                //if the display(i.e temp) does not include a decimal, then add
    
    
}


function deleteValue(){                             // slice the last element from the temp display string


}

function clearForNext() {                           // clear everything except firstNumber


}

function clearAll() {                               //clear everything
    
    display.textContent = '';
    firstNumber = 0;
    symbol = '';
    secondNumber = 0;
}

function checkEvents(e) {                            // if statements related to classes and use values


}









button.addEventListner('click', checkEvents);               //listen for button clicks