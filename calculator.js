function appendToDisplay(char){
    const display=document.getElementById("display");
    display.value+=char;
}

function calculate(){
    const display=document.getElementById("display");
    const expression=display.value;

    const numbers = expression.split(/[+\-*/]/);
    const operator = expression.match(/[+\-*/]/);

    const num1=parseFloat(numbers[0]);
    const num2=parseFloat(numbers[1]);

    let result;
    switch(operator[0]){
        case '+':
            result=num1+num2;
            break;
            case '-':
                result=num1-num2;
                break;
                case '*':
                    result=num1*num2;
                    break;
                    case '/':
                        if(num2 !==0){
                        result=num1/num2;
                        }
                        else{
                            result="error division by zero";
                        }
                        break;
    }
    display.value=result;
}
function clearDisplay(){
    const display=document.getElementById("display");
    display.value="";
}