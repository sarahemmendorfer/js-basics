    var myTemp = new Array(temp);
    var myNames = new Array(names);
    var newMyTemp = new Array(temp);
    var myTemp20 = new Array();
    var count = 0;
    var names = 0;
    var temp = 0;
    var key = 0;
    var carlos = 0;
    var hasEliana = 0;
    var hasCarlos = 0;
    
    function numberN(){
        document.getElementById('div1').style.visibility="visible";
        document.getElementById('button').style.visibility="hidden"; 
    }
    
    function numberM(){
        document.getElementById('div2').style.visibility="visible";
        document.getElementById('div1').style.visibility="hidden";
        temp = document.getElementById('numberN').value;
    }

    function sendM(){
        document.getElementById('div2').style.visibility="hidden";
        document.getElementById('div3').style.visibility="visible";
        names = document.getElementById('numberM').value;
        for(count = 0; count < temp; count++){
            myTemp[count] = parseInt(prompt(`Temperature ${count + 1}:`));
            }

        for(count = 0; count < names; count++){
            myNames[count] = prompt(`Name ${count + 1}:`);
        }
        test();
    }

    function test(){
        for(key in myNames){
            if(myNames[key] == "Eliana"){
                hasEliana = 1;
            }
            if(myNames[key] == "Carlos"){
                hasCarlos = 1;
                carlos = key;
            }
        }
        if(hasEliana == 1){
            document.getElementsByTagName("p")[0].innerText = "Has the name Eliana."; 
        }else{
            document.getElementsByTagName("p")[0].innerText = "The name Eliana does not exist.";
        }
        if(hasCarlos == 1){
            document.getElementsByTagName("p")[1].innerText = `Carlos's position: ${carlos}.`;
            
        }else{
            document.getElementsByTagName("p")[1].innerText = "The name Carlos does not exist.";
        }

        for(key in myTemp){
            newMyTemp[key] = myTemp[key] ** 3;
            if(myTemp[key] > 20){
                myTemp20[key] = myTemp[key];
            }
        }
        document.getElementsByTagName("p")[2].innerText = `Array ** 3 = [${newMyTemp}].`;
        document.getElementsByTagName("p")[3].innerText = `Temperatures greater than 20 = [${myTemp20}].`;
        
}

