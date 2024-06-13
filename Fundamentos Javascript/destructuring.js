// Forma de acessar algo de dentro de uma esturtura (Objeto) de forma mais direta:

const pessoa = { // Exemplo de Objeto
    nome:"ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

const {nome, idade} = pessoa; // Acessando os atributos nome e idade do objeto pessoa
console.log(nome, idade)
console.log(pessoa)

const {nome: n, idade: i} = pessoa; // Mesma cosia, ams agora atirbuindo variaveis a cada atributo.
console.log(n, i)
console.log(pessoa)

const {endereco: {logradouro, numero, cep}} = pessoa // Exemplo acessando atributos que nao foram definidos
console.log(logradouro, numero, cep)