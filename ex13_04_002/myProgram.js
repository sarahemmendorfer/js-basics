var n1 = 25;
var n2 = 3;
var n3 = 105;
var lineBreak = '<br/>'

if(n1 > n2 && n1 > n3){
    document.write('The largest number is: '+n1);
    document.write(lineBreak);
}

else if(n2 > n1 && n2 > n3){
    document.write('The largest number is: '+n2);
    document.write(lineBreak);
}

else{
    document.write('The largest number is: '+n3);
    document.write(lineBreak);
}

if(n1 < n2 && n1 < n3){
    document.write('The smallest number is: '+n1);
    document.write(lineBreak);
}

else if(n2 < n1 && n2 < n3){
    document.write('The smallest number is: '+n2);
    document.write(lineBreak);
}

else{
    document.write('The smallest number is: '+n3);
}