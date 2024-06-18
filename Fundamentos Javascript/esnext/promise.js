function talkAfter(seconds, phrase) { // A função recebe dois parâmetros e retorna uma promessa
    return new Promise((resolve, reject) => { // resolve is a function that will be called when the promise is resolved.
        setTimeout(() => {   // Invocando a função timeout que tem dois parâmetors: o primeiro a função resolve e o segundo é o tmepo para esperar
            resolve(phrase)  // Situação de sucesso, caso a promise seja atendida. O reject seria pra dizer que fazer quando for rejeitada.
        }, seconds * 1000)
    })
}

talkAfter(3, "Que legal")
    .then(phrase => phrase.concat("?!?"))
    .then(otherPhrase => console.log(otherPhrase))
    .catch(e => console.log(e)) // caso seja invocado o reject(), vai sair o resultado do catch(e)