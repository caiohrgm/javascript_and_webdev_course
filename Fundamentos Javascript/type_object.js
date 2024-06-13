// Modo 1:

const prod1 = {}

prod1.nome = "Celular Xiaomi"
prod1.preco = 999.99

console.log(prod1)

// Modo 2: Um objeto é semelhante a um dicionario do Python (Chave, Objeto). 
//Tem formato igual ao JSON, mas não é JSON. JSON é formato textual.
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        id: 95,
        cores: ['branco', 'preto']
    }
}
console.log(prod2)