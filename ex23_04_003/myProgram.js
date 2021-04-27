//1. Crie um objeto Date e alerte a data e a hora atuais.

var d = new Date();
alert("1: " + d);

// 2. Use o método de data correto para extrair o ano (quatro dígitos) de um objeto data.

var myYear = new Date();
var year = myYear.getFullYear();
alert("2: " + year);

//3. Use o método Date correto para obter o mês (0-11) fora de um objeto de data.

var myDate = new Date();
var month = myDate.getMonth();
alert("3: " + month);

//4. Use o método correto de Date para definir o ano de um objeto de data como 2020;

var myYear2020  = new Date();
myYear2020.setFullYear(2020);
alert("4: " + myYear2020);