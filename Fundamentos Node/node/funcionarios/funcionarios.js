const axios = require('axios')      // Client HTTP. Faz requisições em servidores remotos.
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

axios.get(url)

axios.get(url).then(response => { // Acesa a url e entao faça algo: criaou uma função de repsosta
    const funcionarios = response.data
    console.log(funcionarios)
})
