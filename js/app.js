//console.log("microphone check one two what is this")

const buttons = document.querySelectorAll('.button');

const display = document.querySelector('.display');

const calculator = document.querySelector('#calculator');

let firstValue = '';

let secondValue = '';

let operator = '';

let result = eval(firstValue + operator + secondValue)

calculator.addEventListener('click', (event) => {
    
    //console.log(event.target);

    if (event.target.classList.contains('number')) {
        if(firstValue === '' || operator === ''){
            firstValue = event.target.textContent;
            display.innerText += firstValue;   
        }else{
            secondValue = event.target.textContent;
            display.innerText += secondValue;
        }
        //console.log(firstValue);
        console.log(secondValue)
    }
    
    if (event.target.classList.contains('operator')) {
        if(firstValue !== '' && operator === ''){
            operator = event.target.textContent;
            display.innerText += operator;
        }
        if(event.target.textContent === 'C'){
            firstValue = '';
            secondValue = '';
            operator = '';
            display.innerText = '';
        }
        console.log(operator)
    }

    if (event.target.classList.contains('equals')) {
        if(operator === ''){
            alert('must select an operator')
        }
        if(operator !== '' && secondValue === ''){
            alert('must input second value')
        }
        if(operator === '/' && secondValue === '0'){
            alert('cannot divide by zero')
            return
        }
        display.innerText = eval(firstValue + operator + secondValue)
    }
});
