// this = aponta para um modulo.exports. Pode-s exportar também usando this.

console.log(this === global) // Falso. this aponta pra module.exportas e não para global
console.log(this === module) // Falso. this é um objeto, sendo a referencia do module.exportas.
console.log(this === module.exports) // True
console.log(this === exports)        // True

function logThis() {
    console.log("Dentro de uma função...") // Dentro de uma função, o this não aponta pro module.exports
    console.log(this === exports) // Dentro de uma função, o this não aponta pro exports
    console.log(this === exports)  // Dentro de uma função, o this não aponta pro module.exports
    console.log(this === global)  // Já neste caso, dentro de uma função, o this aponta para global

    //Então...:
    // Fazer isso dentro de uma função é perigoso, pois se está acessando o modulo global:
    this.danger = 0
}

// ATENÇÃO - this em Arrow Function MUDA TUDO:
// O this quando usado em arrow functions, aponta para o module.exports, assim como fora de functions.