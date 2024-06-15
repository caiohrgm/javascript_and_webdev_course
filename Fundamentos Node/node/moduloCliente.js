// Fazendo import dos modulos criados anteriormente:
const moduloA = require('./moduloA');
const moduloB = require('./moduloB');

console.log(moduloA.ola)
console.log(moduloA.bemBindo)
console.log(moduloA.ateLogo)

console.log(moduloB.nome)
console.log(moduloB.boaNoite())
console.log(moduloB)

// Usar o comando npm no terminal para instalar bibliteocas externas.:
// $ npm i lodash
const lod = require('lodash')
setInterval(() => console.log(lod.random(1,1000)), 200) // setInterval.: Função pra ficar executando de tempso em tempos. 2000 = 2 em 2 segundos

// Modulo nodemon: 
// $ npm i nodemon
// comando: nodemon moduloCliente.js (exemplo). Vai ficar rodando oc digo e atualizando com mudanças em tempo real no codigo.