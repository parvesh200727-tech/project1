let buttons=document.querySelectorAll('.button');
let screen=document.querySelector('#screen');
let symbols=document.querySelectorAll('.symbol');
let string="";
let lastval=0;
let total=19;
let midVal=9;
let count=0;
let Nums=document.querySelectorAll('.num');

Array.from(Nums).forEach((num)=>{
    num.addEventListener('click', (e) => {
    if(count<8 &&string.length>midVal|| string.length<total){
        string+=e.target.innerText;
        count++;
        screen.innerText=string;
    }
   } )
       
});

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e) => {
        if(string.length<midVal){
screen.innerText=string+=e.target.innerText;
        }
      
     if(e.target.innerText==='X'){
            string=string.replace(/X/g, '*');
            screen.innerText=string;
        }
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
      
          
function calculate(num1, num2, symbol) {
    switch (symbol) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case 'X':
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
 