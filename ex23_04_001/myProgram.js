//1. Encontre a posição do caractere h na string txt.

var txt1 = "abcdefghijklm";
var pos = txt1.indexOf("h");
document.write(`1: [${pos}] <br />`);

//2. Use o método slice para retornar a palavra "bananas".

var txt2 = "Posso comer bananas o dia todo";
var x1 = txt2.slice(12, 19);
document.write(`2: "${x1}" <br />`);

//3. Use o método String correto para substituir a palabra "Hello" pela palavra "Welcome".

var txt3 = "Olá, mundo";
txt3 = txt3.replace("mundo", "bem-vindo");
document.write(`3: "${txt3}" <br />`);

//4. Converta o valor de txt para maiúsculas.

var txt4 = "Olá, mundo";
txt4 = txt4.toUpperCase();
document.write(`4: "${txt4}" <br />`);

//4. Converta o valor de txt para minúsculas.

var txt5 = "Olá, mundo";
txt5 = txt5.toLowerCase();
document.write(`5: "${txt5}" <br />`);

//6. Use a propriedade length para alertar sobre o comprimento txt.

var txt6 = "Olá, mundo!";
var x2 = txt6.length;
alert(`6: ${x2}`);

//7. Use caracteres de escape para alertar We are "Vikings".

var txt7 = "We are \"Vikings\".";
alert(`7: ${txt7}`);

//8. Concatene as duas string para alertar "Hello World!".

var str1 = "Olá";
var str2 = "Mundo!";
alert("8: " + str1.concat(" " + str2));