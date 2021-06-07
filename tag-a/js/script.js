
//global variables
var numberOperator = 0; //to store the first number plus the operator
var operator = '';
var final= 0;
function addValue(num){
    prevNum = document.getElementById('calc-input').value;
    if(prevNum === '0'){       
        console.log(prevNum)     
        document.getElementById('calc-input').value = num;
    }else if(prevNum !== '0'){
        document.getElementById('calc-input').value = prevNum + num;
    }
        
}

function clearPrevNum(){
    inputNum = document.getElementById('calc-input').value;
    arrayNum = Array.from(inputNum);
    if(arrayNum.length !== 0){
        arrayNum.pop();
        newInput = arrayNum.join('');
        document.getElementById('calc-input').value = newInput;
        console.log(typeof(newInput) + newInput);
    }
    
}

function clearAll(){
    document.getElementById('calc-input').value = '';
    numberOperator = 0; //to store the first number plus the operator
    operator = '';
    final= 0;
}

 

 function addOperator(op){
     numberOperator = document.getElementById('calc-input').value += op;
     console.log(numberOperator);
     document.getElementById('calc-input').value = '';
     return numberOperator;
 }
 
function result(){
     secondValue =  parseInt(document.getElementById('calc-input').value);    
     arrayNum = Array.from(numberOperator);
     operator = arrayNum.pop();
     intNum = parseInt(arrayNum.join(''));

     console.log(intNum);
     console.log(operator);
     console.log(secondValue);

     switch(operator){
         case '+':
             final = intNum + secondValue;
             document.getElementById('calc-input').value = final;
             console.log(final);
             break;
         case '-':
             final = intNum - secondValue;
             document.getElementById('calc-input').value = final;
             console.log(final);
             break;
         case '*':
             final = intNum * secondValue;
             document.getElementById('calc-input').value = final;
             console.log(final); 
             break;
         case '/':
             final = intNum / secondValue;
             document.getElementById('calc-input').value = final;
             console.log(final);   
             break;
     }
 }
