// My Solution:
const axios = require('axios')      // Client HTTP. Faz requisições em servidores remotos.
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

axios.get(url).then(response => { // Acesa a url e entao faça algo: criou uma função de resposta

    const funcionarios = response.data

    // console.log(Object.keys(funcionarios).length)
    let chineseFemaleSalaries = []
    
    for (let i=0; i < Object.keys(funcionarios).length; i++) {
        data = funcionarios[i];
        if (data.genero == 'F' && data.pais == 'China') {
            chineseFemaleSalaries.push(data.salario)
        }
    }

    var smallestSalary = chineseFemaleSalaries.sort((a, b) => a - b)[0]; // Função que ordena numeros.normalemnte ele oderna strings, então o 1 vem antes do 2,3 na string.
    
    for (let i=0; i < Object.keys(funcionarios).length; i++) {
        data = funcionarios[i];
        if (data.genero == 'F' && data.pais == 'China' && data.salario == smallestSalary) {
            console.log(data)
        }
    }
});

// Video Course Solution:
const chineses = f => f.pais === 'China' // FUnção que recebe apenas os funcionarios que são da China;
const women = f => f.genero === 'F'
var smallestSalary = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func: funcAtual // Função que compara o salario de dois funcionarios, usando operador ternario.
}

axios.get(url).then(response => {
    const funcionarios = response.data
    
    const func = funcionarios.filter(chineses).filter(women).reduce(smallestSalary)

    console.log(func)
})
