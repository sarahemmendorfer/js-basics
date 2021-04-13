var n1 =5;
var n2 = 2;
// var newN1 = 0;
// var newN2 = 0;
// newN1 = (n2 + n1) - n1;
// newN2 = (n2 + n1) - n2;
document.write('Before=>' + '<br/>' + 'n1:'+n1+'<br/>'+'n2:'+n2+ '<br/>')
aux = n1;
n1 = n2;
n2 = aux;
document.write('After=>' + '<br/>' +'n1: '+n1 + '<br/>');
document.write('n2: '+n2);
//Display an alert box after 300 milliseconds
setTimeout(function(){ alert('After=> n1: '+n1 + '///' + 'n2: '+n2); }, 300);