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
let operators = ["*", "/", "+", "-"];
let transformed = "";
let replaced = "";
let calculated = "";
let limitedDigits = "";
let divideIndex = "";
let multiplyIndex = "";
let addIndex = "";
let subtractIndex = "";
let divideResult = "";
let dividedMultiplied = "";
let addedSubtracted = "";




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
        if (display[0].textContent == limitedDigits) {
            // if ((button.textContent !== "CE" && button.textContent !== "AC")) {
            display[0].textContent = '';
            equation = [];
            console.log(button.textContent)
            console.log(equation)
            if ((button.textContent !== "CE" && button.textContent !== "AC")){
                displayValue(button.textContent)
            }
        }

        else if ((button.textContent !== "CE" && button.textContent !== "AC" && button.textContent !== "=")){
            displayValue(button.textContent);
            console.log(button.textContent)
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

    else if (button.textContent == "CE") {
        button.addEventListener("click", function (){
            
            display[0].textContent = display[0].textContent.slice(0, -1)
            equation.pop();
            console.log(equation)
        })
    }

    else if (button.textContent == "=") {
        button.addEventListener("click", function () {
            displayValue(button.textContent);
            console.log(equation)
            transformed = process(equation);
            replaced = replaceDivideMultiply(transformed);
            dividedMultiplied = divideMultiply(replaced);
            addedSubtracted = addSubtract(dividedMultiplied);
            limitedDigits = limitDigits(addedSubtracted);

            console.log(replaced);
            console.log(dividedMultiplied)
            console.log(addedSubtracted)
            console.log(limitedDigits);
           
            display[0].textContent = limitedDigits;                
        })
           // equation.splice(equation.indexOf("="), 1)  
    }        
});




function limitDigits (finalEquation) {
    let x = Math.abs(finalEquation).toString();
    console.log(x)

    if ( x.length > 9) {
        console.log(finalEquation)
        let y = parseFloat(finalEquation.toFixed(3)).toExponential();
        console.log(y)
        return y;
    }

    else {
        console.log(finalEquation)
        return finalEquation;
    }
}






function displayValue (textContOfButton) {
    display[0].textContent += textContOfButton;
    equation.push(textContOfButton);

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




function divideMultiply (finalEquation) {

    for (let i = 0; i < finalEquation.length; i++ ) {
        if (finalEquation[i] == "*" || finalEquation[i] =="/"){

            opIndex = finalEquation.indexOf(finalEquation[i]);

            firstNum = finalEquation[ opIndex - 1 ]
            operator = finalEquation[ opIndex ] 
            secondNum = finalEquation[ opIndex + 1 ]

            console.log(firstNum)
            console.log(secondNum)
            console.log(operator)

            let opResult = operate(Number(firstNum), operator, Number(secondNum));
            
            finalEquation.splice( opIndex - 1, 3, opResult);
            console.log(finalEquation)
            i -= 2;

        }
        else if (finalEquation[i] == "=") {
            finalEquation.splice(i, 1)
        }
    }
    console.log(finalEquation)
    return finalEquation;
}



function addSubtract (finalEquation) {
    for (let i = 0; i < finalEquation.length; i++ ) {
        if (finalEquation[i] == "+" || finalEquation[i] == "-"){

            opIndex = finalEquation.indexOf(finalEquation[i]);

            firstNum = finalEquation[ opIndex - 1 ]
            operator = finalEquation[ opIndex ] 
            secondNum = finalEquation[ opIndex + 1 ]

            console.log(firstNum)
            console.log(secondNum)
            console.log(operator)

            let opResult = operate(Number(firstNum), operator, Number(secondNum));
            console.log(opResult)
            finalEquation.splice( opIndex - 1, 3, opResult);
            console.log(finalEquation)
            i -= 2;

        }
    }
    console.log(finalEquation)
    return Number(finalEquation);
};


