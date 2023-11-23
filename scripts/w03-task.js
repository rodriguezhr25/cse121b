/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function (number1, number2) {
    return number1 - number2;
}
const subtractNumbers = function () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    number1 = Number(document.querySelector('#factor1').value);
    number2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(number1, number2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = function () {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);
/* Decision Structure */

const getTotalDue = function () {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let memberCheck = document.getElementById('member').checked;
    if(memberCheck){
        subtotal = subtotal - (subtotal * 0.15);
    }
    document.querySelector('#total').innerHTML  = `$${subtotal.toFixed(2)}`;
}

document.querySelector('#getTotal').addEventListener('click', getTotalDue);
/* ARRAY METHODS - Functional Programming */

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
document.getElementById("array").innerHTML = array;
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = array.filter(number => number % 2 == 1);
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = array.filter(number => number % 2 == 0);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = array.reduce((sum, currentNumber)=> sum + currentNumber,0);
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = array.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = array.map(number => number * 2).reduce((sum, currentNumber)=> sum + currentNumber,0);
