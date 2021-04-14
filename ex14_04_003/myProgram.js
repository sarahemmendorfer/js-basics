var counter = 0, overEighteen = 0, underEighteen = 0;
while(counter < 10){
    var age = parseInt(prompt(`Type de age ${counter+1}: `));
    if (age < 18){
        underEighteen++;
    }else{
        overEighteen++;
    }   
    counter++;
}
document.write(`Under Eighteen: ${underEighteen} people <br/> Over Eighteen: ${overEighteen} people`);
