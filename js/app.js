//console.log("microphone check one two what is this")

const buttons = document.querySelectorAll('.button');

const display = document.querySelector('.display');

const calculator = document.querySelector('#calculator');

let firstValue = '';

let secondValue = '';

let operator = '';

calculator.addEventListener('click', (event) =>{

    //console.log(event.target);

    if(event.target.classList.contains('number')){
        if(firstValue === '' || operator === ''){
            firstValue += event.target.textContent;
            display.innerText = firstValue;
        }if(firstValue !== '' && operator !== ''){
            secondValue += event.target.textContent;
            display.innerText = secondValue;
        }if(event.target.textContent === '.' && !firstValue.includes('.')){
            firstValue += '.'; 
            display.innerText = firstValue;
        }if(event.target.textContent === '.' && secondValue !== '' && !secondValue.includes('.')){
            secondValue += '.';
            display.innerText = secondValue
        }
        //console.log(firstValue);
        console.log(secondValue)
    }

    if (event.target.classList.contains('operator')) {
        if (firstValue !== '' && operator === '') {
            operator = event.target.textContent;
            display.innerText += operator;
        }
    }

    if (event.target.classList.contains('equals')) {
        if (operator === '') {
            alert('must select an operator')
        }
        if (operator !== '' && secondValue === '') {
            alert('must input second value')
        }
        if (operator === '/' && secondValue === '0') {
            alert('cannot divide by zero')
            return
        }
        let result;
        if (operator === '+')
            result = Number(firstValue) + Number(secondValue);
        if (operator === '-')
            result = Number(firstValue) - Number(secondValue);
        if (operator === '*')
            result = Number(firstValue) * Number(secondValue);
        if (operator === '/')
            result = Number(firstValue) / Number(secondValue);
        display.innerText = result;
    }

    if (event.target.textContent === 'C') {
        firstValue = '';
        secondValue = '';
        operator = '';
        display.innerText = '';
        return;
    }
    console.log(operator)
});