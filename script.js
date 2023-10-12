let btn1 = document.getElementsByClassName("btn1");
let btn2 = document.getElementsByClassName("btn2");
let btn3 = document.getElementsByClassName("btn3");
let btn4 = document.getElementsByClassName("btn4");
let btn5 = document.getElementsByClassName("btn5");
let btn6 = document.getElementsByClassName("btn6");
let btn7 = document.getElementsByClassName("btn7");
let btn8 = document.getElementsByClassName("btn8");
let btn9 = document.getElementsByClassName("btn9");
let btn0 = document.getElementsByClassName("btn0");
let btnMinus = document.getElementsByClassName("btnMinus");
let btnPlus = document.getElementsByClassName("btnPlus");
let btnMultiply = document.getElementsByClassName("btnMultiply");
let btnDivide = document.getElementsByClassName("btnDivide");
let display = document.getElementsByClassName("display");
let btns = document.getElementsByTagName("button")

const add = (a, b) => a + b;
console.log(add(3, 7))



const subtract = (a, b) => a - b; 
console.log(subtract(3, 7))



const multiply = (a, b) => a * b; 
console.log(multiply(3, 7))



const divide = (a, b) => a / b; 
console.log(divide(3, 7))




let firstNum = 1;
let operator = "+";
let secondNum = 2;

function operate (a, op, b) {
    if ( op == "+" ) {
        add(a, b)
    }


    else if ( op == "-" ) {
        subtract(a, op, b)
    }

    else if ( op == "*" ) {
        multiply(a, op, b)
    }

    else if ( op == "/" ) {
        divide(a, op, b)
    }
}





function displayValue (textContOfButton) {
   
    let maxitems = 8;
    let equation = [];      // console.log(Array.isArray(equation)) works but typeof equation gives 'undefined'
    let 
    
    
    if (display[0].textContent.length < maxitems)  {
        equation.push(textContOfButton)
        display[0].textContent += equation;
        console.log(Array.isArray(equation))
    }

    else { 
        display[0].textContent = "ERROR";
        display[0].style.color = "red"
    }
       
       
        }   
    
        
   
     


let buttonArray = Array.from(btns);
buttonArray.forEach( function (button) {
    button.addEventListener("click", function () {
        displayValue(button.textContent)
    })
})



