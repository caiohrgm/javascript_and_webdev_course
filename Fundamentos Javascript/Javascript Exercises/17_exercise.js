const sumNumbers = (arr) => {
    let soma = 0

    for(i in arr) {
        soma = soma + arr[i]
    }
    return soma
}

console.log(sumNumbers([1,2,3]))
console.log(sumNumbers([10,10,10]))