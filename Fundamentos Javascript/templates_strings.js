const nome = 'Caio';
const concatenacao = 'olá' + nome + ' !';
const template = `
Olá
${nome}!`;

console.log(concatenacao, template);

// expressoes...
console.log(`1 + 1 = ${1 + 1}`);

// usando em funções...
const up = texto => texto.toUpperCase(); // Função que recebe um texto e torna tudo maiusculo;

console.log(`Ei...${up('cuidado')}!`)

// tagged template:
function tag(partes, ...valores) {
    console.log(partes)  // Vai printar tudo que nao faz aprte da template string
    console.log(valores)  // Printa as templates string
    return 'Outra String'
}

const aluno = 'Gui'
const situacao = 'Aprovado'

console.log(tag `${aluno} está ${situacao}`) // é possivel aplicar uma função em cima do template string, desta forma.
