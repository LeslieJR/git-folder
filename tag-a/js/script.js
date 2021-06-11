
//global variables
let numberOperator = 0; //to store the first number plus the operator
let operator = ''; //to store the operator
let final= 0;
function addValue(num){
    let prevNum = document.getElementById('calc-input').value;
    if(prevNum === '0'){        
        document.getElementById('calc-input').value = num;
    }else if(prevNum !== '0'){
        document.getElementById('calc-input').value = prevNum + num;
    }
        
}

function clearPrevNum(){
    let inputNum = document.getElementById('calc-input').value;
    let arrayNum = Array.from(inputNum);
    if(arrayNum.length !== 0){
        arrayNum.pop();
        let newInput = arrayNum.join('');
        document.getElementById('calc-input').value = newInput;
       
    }
    
}

function clearAll(){
    document.getElementById('calc-input').value = '';
    numberOperator = 0; 
    operator = '';
    final= 0;
}

 

 function addOperator(op){
     numberOperator = document.getElementById('calc-input').value += op;
     document.getElementById('calc-input').value = '';
     return numberOperator;
 }
 
function result(){
     let secondValue =  parseInt(document.getElementById('calc-input').value);    
     let arrayNum = Array.from(numberOperator);
     operator = arrayNum.pop();
     let intNum = parseInt(arrayNum.join(''));
     let final;
     switch(operator){
         case '+':
              final = intNum + secondValue;
             document.getElementById('calc-input').value = final;
             break;
         case '-':
              final = intNum - secondValue;
             document.getElementById('calc-input').value = final;
             break;
         case '*':
              final = intNum * secondValue;
             document.getElementById('calc-input').value = final;
             break;
         case '/':
             if(secondValue !== 0){
                 final = intNum / secondValue;
                 document.getElementById('calc-input').value = final;
             }
             else if(secondValue === 0){
                 alert('cannot be divided by 0');
                 document.getElementById('calc-input').value = '';
             }
             break;
     }
 }
