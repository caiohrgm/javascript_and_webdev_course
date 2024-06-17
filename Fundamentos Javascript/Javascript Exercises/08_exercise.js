const multiply = (n1, n2) => {
    if (n1 >= 0 && n2 >= 0) {
        let soma = 0;
        for (let i = 0; i < n1; i++) {
            soma = soma + n2
        }
        return soma;
    }
}

console.log(multiply(5,5))
console.log(multiply(0,7))
console.log(multiply(7,7))
console.log(multiply(1,0))