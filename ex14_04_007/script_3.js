var sum = 0;
for(var count = 0; count < 10; count++){
    var value = parseFloat(prompt("Enter the numbers:"));
    if(value < 0){
        alert("Negative number");
    }
    if(value <= 25 && value >= 0){
        sum++;
    }   
    if(value <= 50 && value >= 26){
        sum++;
    }   
    if(value <= 75 && value >= 51){
        sum++;
    }   
    if(value <= 100 && value >= 76){
        sum++;
    }   

}
document.write(`Quantity in range: ${sum}`);
