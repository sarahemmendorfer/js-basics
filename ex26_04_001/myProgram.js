//1. Alert "John" by extrating information from the person object.

var person = {
    firstName: "John",
    lastName: "Doe"
};
alert(`"${person.firstName}"`);

//2. Adicione a seguinte propriedade e valor ao objeto pessoa: país: Noruega.

var person = {
    primeiroNome: "John",
    país: "Noruega"
};
alert(`"${person.país}"`);

//3. Crie um objeto chamado pessoa com nome = João, idade = 50. Em seguida, acesse o objeto para alertar ("João tem 50 anos").

var pessoa = {
    nome: "John", idade: 50
};
alert(pessoa.nome + " tem " + pessoa.idade + " anos.")