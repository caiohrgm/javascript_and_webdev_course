const nome = 'Caio';
const concatenacao = 'olá' + nome + ' !';
const template = `
Olá
${nome}!`;

console.log(concatenacao, template);

// expressoes...
console.log(`1 + 1 = ${1 + 1}`);

// usando em funções...
const up = texto => texto.toUpperCase(); // Funçãoq ue recebe um texto e torna tudo maiusculo;

console.log(`Ei...${up('cuidado')}!`)