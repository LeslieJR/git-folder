
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
    
}

 
 var numberOperator; //to store the first number plus the operator
 function addOperator(operator){
     numberOperator = document.getElementById('calc-input').value += operator;
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
             result = intNum + secondValue;
             document.getElementById('calc-input').value = result;
             console.log(result);
             break;
         case '-':
             result = intNum - secondValue;
             document.getElementById('calc-input').value = result;
             console.log(result);
             break;
         case '*':
             result = intNum * secondValue;
             document.getElementById('calc-input').value = result;
             console.log(result); 
             break;
         case '/':
             result = intNum / secondValue;
             document.getElementById('calc-input').value = result;
             console.log(result);   
             break;
     }
 }
