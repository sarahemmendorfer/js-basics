var number = parseInt(prompt('Enter a number'));
var sequence = 1;
var factorial = "";
var firstNumber = number;

for(number; number != 0 ; number--){
    sequence *= number;
    if(number != 1){
        factorial += number+" x ";
    }
    else{
        factorial += number;
    }
}
    document.write(`${firstNumber}! = ${factorial} = ${sequence}`);
