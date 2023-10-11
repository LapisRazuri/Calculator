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



