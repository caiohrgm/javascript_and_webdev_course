// ÚTil para chamar diversas promises uma atrás da outra:
// É uma promessa, algo a ser resolvido no futuro

// Quando se cria uma promessa:
let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3)
}) // Pode ser uma promessa, que vai me retoranr algo no futuro. 
   // Uma promessa só gera um unico valor, entao nao adianta passar 2+ parametros. 
   // Para isso, cria-se um objeto ({ }) ou lista com n valores dentro.

console.log(p) // Pro enquanto, está prometido o valor 3.

p.then(function(valor) { // Executa a promessa, usando o .then
    console.log(valor)
})

let p2 = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['ana', 'Bia', 'Carlos', 'Daniel',])
})

p2
.then(valor => valor[0])
.then(primeiro => primeiro[0])
.then(firstLetter => console.log(firstLetter))