// let btn1 = document.getElementsByClassName("btn1");
// let btn2 = document.getElementsByClassName("btn2");
// let btn3 = document.getElementsByClassName("btn3");
// let btn4 = document.getElementsByClassName("btn4");
// let btn5 = document.getElementsByClassName("btn5");
// let btn6 = document.getElementsByClassName("btn6");
// let btn7 = document.getElementsByClassName("btn7");
// let btn8 = document.getElementsByClassName("btn8");
// let btn9 = document.getElementsByClassName("btn9");
// let btn0 = document.getElementsByClassName("btn0");
let btnMinus = document.getElementsByClassName("btnMinus");
let btnPlus = document.getElementsByClassName("btnPlus");
let btnMultiply = document.getElementsByClassName("btnMultiply");
let btnDivide = document.getElementsByClassName("btnDivide");
let display = document.getElementsByClassName("display");
let btns = document.getElementsByTagName("button")
let btnArray = Array.from(btns)
let equation = [];
let firstNum = [];
let operator = "";
let secondNum = [];
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

    else if ( op == "/" ) {
        return divide(a, b)
    }  
}




btnArray.forEach( function (button) {
    if (button.textContent == "AC") {
        button.addEventListener("click", function (){
            display[0].textContent = '';
            equation = [];
        })
    }

    else if (button.textContent == "=") {
        button.addEventListener("click", function () {
            displayValue(button.textContent)
            sendGetResult(equation)
            display[0].textContent = result


        })
        // equation.splice(equation.indexOf("="), 1)
        
        
        
    } 

    else {
        button.addEventListener("click", function () {
            displayValue(button.textContent)
        })
        
    }
})




function displayValue (textContOfButton) {
    let maxitems = 8;
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
                storeEquation(textContOfButton);
               
            }          
        }

        
        else  {
            display[0].textContent = "ERROR";
            display[0].style.color = "red";
        }
}      




function storeEquation (input) {
    equation.push(input);

}
    



function sendGetResult (finalEquation) {

    for (let i = 0; i < finalEquation.length; i++ ) {


    firstOpIndex = finalEquation.findIndex( item => operators.includes(item)); 
    console.log(firstOpIndex)


        if (isNaN(finalEquation[i])) {
            operator = finalEquation[i];
            console.log(operator)
            if (finalEquation.indexOf(finalEquation[i]) > firstOpIndex) {
                // firstNum = operate(firstNum, operator, secondNum);
                operator = finalEquation[i];
                firstOpIndex = i;
                secondNum = [];
                console.log(operator)
                

            }           
                
        }

        else if ( finalEquation[i] !== NaN && finalEquation.indexOf(finalEquation[i]) > firstOpIndex  ) {
                secondNum.push(finalEquation[i])

                console.log(firstNum, operator, secondNum)
                result = operate(Number(firstNum), operator, Number(secondNum));
                firstNum = result;
                console.log(firstNum, operator, secondNum)

                

                
        }

        else if (finalEquation[i] !== NaN) {    // if input is a number
                firstNum.push(finalEquation[i]);
                console.log(firstNum)

        }

            
    }
}




//you sort the equation as it is pressed 
//not after every thing is input