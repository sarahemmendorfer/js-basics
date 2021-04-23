var number = new Array(6);
var myArray = new Array(6);
var count = 0;

if(count == 0){
    myArray = [1, 1, 1, 1, 1, 1];
}
function mega(){
    
    myArray = [1, 1, 1, 1, 1, 1];
    if((myArray.length === number.length && myArray.every((item, index) => item === number[index])) === false){
        for (var i = 0; i < 6; i++){
            var myRandom = Math.random() * (60 - 1) + 1;
            number[i] = Math.round(myRandom);    
        }
        count++;
    }
    myArray = number;

    myArray.sort((a, b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });

    // Create a <p> element
    var myElement = document.createElement("P");   
    // Insert text        
    myElement.innerHTML = `Game ${count}: [${myArray}]`; 
    // Append <p> to <div> with id="myDIV"  
    document.getElementById("myDIV").appendChild(myElement);   
}


