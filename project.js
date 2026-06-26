let buttons=document.querySelectorAll('#button');
let screen=document.querySelector('#screen');
let symbols=document.querySelectorAll('.symbol');
let string="";
let number1;
let number2;
let lastval=0;

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e) => {
        screen.innerText=string+=e.target.innerText;
number1=screen.innerText;
number2=screen.innerText;
console.log(number1);

   } )
});
symbols.forEach((symbol)=>{
    symbol.addEventListener('click', (e) => {
        if(e.target.innerText==='AC'){
            string="";
            screen.innerText=0;
        }
        if(e.target.innerText==='='){
            string=eval(string);
            screen.innerText=string;
    
        }
        if(e.target.innerText==='C'){
            string=string.slice(0,-1);
            screen.innerText=string;
            screen.innerText=string.length>0?string:lastval;
        ;
        }
        if(e.target.innerText==='X'){
            string=string.replace(/X/g, '*');
            screen.innerText=string;
        }
function calculate(num1, num2, symbol) {
    switch (symbol) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;

        case '/':
            return num1 / num2;
            case '%':
            return num1 % num2;
            case '.':
            return num1 + '.' + num2;
    }
}

  })})