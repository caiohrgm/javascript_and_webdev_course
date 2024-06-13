// Função sem retorno:
function imprimirSoma(a,b) {
    sum =  a + b;
    console.log(sum)
}

imprimirSoma(2,3)

//Função com retorno:
function soma(a, b=0) { // b é zero by default;
    return a + b
}
    
console.log(soma()) // mesmo com b setado default, se nao apssar nada, também da NaN.

// Armazenando uma função a um variavel:
const printSum = function (a,b) {
    console.log(a + b)
}

printSum(7,8)

// Armazenando uma função arrow em uma variavel (uma versao mais reduzida de escrever a funçãO)
const newSum = (a,b) => { // Armazenando a funçaõ dentro d avairalve newSum. sito nao é o noem da função.
    return a + b
}

console.log(newSum(4,2))

// Retorno implícito:
const subtracao = (a,b) => a - b // Quando nao tem as chaves de bloco, 
                                // Significa que a função tem uam linha e ja ira retornar o reusltado da sentença.

console.log(subtracao(4,1))