const fs = require('fs') // Modulo nativo do node para leitura de arquivo
const path = __dirname + '/file.json'

// Sincrona: ler primeiro o arquivo todo para depois passar o resultado para manipulação;
const content = fs.readFileSync(path, 'utf-8') 
console.log(content)

// Assincrona:
const content2 = fs.readFile(path, 'utf-8', (error, content) => {
    const config = JSON.parse(content) // Como o arquivo foi aberto como file (fs), é preciso fazer este parse
    console.log(`${config.db.host}:${config.db.port}`)

}) 
console.log(content)

const config = require('./file.json') // Quando o arquivo é aberto como um json diretamente
console.log(config.db)                  // da para acesasr seus atributos diretamente.
 
// Leitura de um diretório:
fs.readdir(__dirname, (error, files) => {
    console.log("Conteúdo da pasta...")
    console.log(files)
}) // __dirname: nome do diretório atual