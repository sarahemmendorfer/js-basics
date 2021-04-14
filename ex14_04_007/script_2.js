var number = parseInt(prompt("How many values do you want?"));
var sum = 0, value = 0, positive = 0, negative = 0;

for(var count = 0; count < number; count++){
    value = parseFloat(prompt("Enter the values: "));
    sum += value;
    if(value > 0){
        positive++;
    }else if(value < 0){
        negative++;
    }else{
        continue;
    }
}
document.write(`The mean is: ${sum/number} <br/> Positives: ${positive} <br/> Negatives: ${negative}`);