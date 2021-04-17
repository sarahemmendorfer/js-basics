function typeNumber(){
var number2 = 2;
var numbersArray = new Array();
    var number1 = parseFloat(prompt("Enter a number (0 - 21): "));
    if(number1 < 0 || number1 > 21){
        return alert("Error! Enter a new number!");
    }else{
        for(var count = 0; count < number1; count++){
            numbersArray[count] = number2;
            number2 += 2;
        }
    return alert(numbersArray);
}
}

// var myNumber = parseFloat(prompt("Enter a number (0 - 21): "));
// var myResult = typeNumber(myNumber);
// (myResult);
