let btnMinus = document.getElementsByClassName("btnMinus");
let btnPlus = document.getElementsByClassName("btnPlus");
let btnMultiply = document.getElementsByClassName("btnMultiply");
let btnDivide = document.getElementsByClassName("btnDivide");
let display = document.getElementsByClassName("display");
let btns = document.getElementsByTagName("button")
let btnArray = Array.from(btns)
let equation = [];
let firstNum = "";
let operator = "";
let secondNum = "";
let firstOpIndex = 0;
let result = 0;
const operators = ["+", "-", "*", "/"];






const add = (a, b) => a + b;

const subtract = (a, b) => a - b; 

const multiply = (a, b) => a * b; 

const divide = (a, b) => a / b; 




function operate (a, op, b) {
    if ( op == "+" ) {
        return add(a, b)
    }

    else if ( op == "-" ) {
        return subtract(a, b)
    }

    else if ( op == "*" ) {
        return multiply(a, b)
    }

    else if ( op == '/' ) {
        return divide(a, b)
    }  
}




btnArray.forEach( function (button) {

        button.addEventListener("click", function () {
            if (display[0].textContent == parseFloat(result.toFixed(11))) {
                display[0].textContent = '';
                equation = [];
                firstNum = "";
                secondNum = "";
                result = 0;
                displayValue(button.textContent)
            }

            else {
                displayValue(button.textContent);
            }
        });

        if (button.textContent == "AC") {
            button.addEventListener("click", function (){
                display[0].textContent = '';
                equation = [];
                firstNum = "";
                secondNum = "";
            })
        }

        else if (button.textContent == "=") {
            button.addEventListener("click", function () {
                let processed = process(equation);
                let replaced = replaceDivideMultiply(processed);
                calculate(replaced);
                console.log(replaced);
                display[0].textContent = parseFloat(result.toFixed(11));
                
            })
            // equation.splice(equation.indexOf("="), 1)  
        } 
})





function displayValue (textContOfButton) {
    let maxitems = 100;
          // console.log(Array.isArray(equation)) works but typeof equation gives 'undefined'

    
   //Checks if the length of array is within the limit
    if (display[0].textContent.length < maxitems)  {
            //Erases the ERROR messange and clears display
            if (display[0].textContent.includes("ERROR") ) {
                display[0].textContent = "";
                display[0].style.color = "black";
            }
             

            //Renders the textContent of the buttons
            else {
                display[0].textContent += textContOfButton;
                display[0].style.color = "black";
                store(textContOfButton);
               
            }          
        }

        else  {
            display[0].textContent = "ERROR";
            display[0].style.color = "red";
        }
}      




function store (input) {
    equation.push(input);
}
    



function process (equa) {
    let processed = [];
    let currentItem = '';
    let currentOperator = '';

    for (let j = 0; j < equa.length; j++ ) {
        if (isNaN(equation[j])) {
            processed.push(currentItem);
            currentItem = "";
            currentOperator = equa[j];
            processed.push(currentOperator)
            currentOperator = "";
            console.log(processed)
            }

        else if ( equa[j] !== NaN ) {
            currentItem += equa[j];
            console.log(currentItem)
        }  
    }

    console.log(processed)
    return processed;

}   



function replaceDivideMultiply (finalEquation) {
    var replaced = finalEquation.map(function (item) {
        // Replace '÷' with '/' and '×' with '*'
        item = item.replace('÷', '/');
        item = item.replace('×', '*');
        return item;
      });

console.log(replaced)
return replaced;
}




function calculate (finalEquation) {

    firstOpIndex = finalEquation.findIndex( item => operators.includes(item)); 
    

    for (let i = 0; i < finalEquation.length; i++ ) {

        if (isNaN(finalEquation[i])) {
            operator = finalEquation[i];
            console.log(operator)
            if ( i > firstOpIndex) {
                // firstNum = operate(firstNum, operator, secondNum);
                operator = finalEquation[i];
                firstOpIndex = i;
                secondNum = "";
                console.log(operator);
            }                  
        }

        else if ( finalEquation[i] !== NaN && i > firstOpIndex  ) {
                secondNum += finalEquation[i];
                console.log(secondNum);
                result = operate(Number(firstNum), operator, Number(secondNum));
                firstNum = result;                  
        }

        else if (finalEquation[i] !== NaN) {    // if input is a number
                firstNum += finalEquation[i];
                console.log(firstNum);
       }       
    }
}




  
