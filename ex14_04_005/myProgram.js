var count = 0;
var sum = 0;

for(count = 3; count<=500; count+=3){
    if(count % 2 != 0){
        sum += count;
    }      
}
document.write(sum);