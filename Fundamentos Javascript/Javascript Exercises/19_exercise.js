const getMean = (arr) => {
    let soma = 0
    for(i in arr) {
        soma = soma + arr[i]
    }
    return (soma / arr.length)
}

console.log(getMean([0,10]))
console.log(getMean([1,2,3,4,5]))

