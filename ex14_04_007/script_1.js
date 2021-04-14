var tallest = 0, shortest = 0;
for(var count = 0; count < 15; count++){
    var height = parseFloat(prompt('Type your height (cm)'));
    if(count==0){
        shortest = height;
        tallest = height;
        continue;
    }
    if(height > tallest){
        tallest = height;
        continue;
    }
    if(height < shortest){
        shortest = height;
        continue;
    }
}
document.write("Tallest: "+tallest+"cm"+"<br/>Shortest: "+shortest+"cm");