// Port: é única por processo dentro de um computador. Uma unica nao pode ser usado por dois processos
const express = require('express')
const database = require('./database')
const bodyParser = require('body-parser')

const port = 3003
const app = express()

app.use(bodyParser.urlencoded({extended:true}))

// Exemplo usando o middleware,  utilziando a função next()para chamar a proxima requisição)
app.get('/products', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})
    
                     // Passa-se uma função middleware, junto com a rota da requisição;
app.get('/products', (req, res, next) => {
    res.send(database.getProducts()) // Vai converter esta respsota automaticamente para JSON.
})

app.get('/products/:id', (req, res, next) => {
    res.send(database.getProduct(req.params.id))
})

app.post('/products', (req, res, next) => {
    const product = database.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product) //JSON  
})

app.put('/products/:id', (req, res, next) => {
    const product = database.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })
    res.send(product) //JSON  
})

app.delete('/products/:id', (req, res, next) => {
    const product = database.deleteProduct(req.params.id)
    res.send(product) //JSON  
})


app.listen(port, () => {console.log(`Servidor Executando na porta ${port}`)})


