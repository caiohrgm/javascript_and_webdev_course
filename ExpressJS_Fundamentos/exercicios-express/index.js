const express = require('express')
const bodyParser = require('body-parser')
const greetings = require('./saudacaoMid')
const usuarioApi = require('./user')
const app = express()

const productApi = require('./api/product')(app, ' > with param!')



// import express from 'express'
// import bodyParser from 'body-parser'
// import greetings from './saudacaoMid.js' // Chamada para função default
// import {saveUser, getUser} from './user.js'
// import greetings from './saudacaoMid.js' // Chamada para objeto de funções

app.use(bodyParser.json())  // Faz o parse se o body for json 
app.use(bodyParser.text())  // Faz o parse se o body for text
app.use(bodyParser.urlencoded({extended: true}))

app.post("/usuario", usuarioApi.salvar)
app.get("/usuario", usuarioApi.obter)

app.use(greetings("Caio")) // Invocando uma funçã middleware que retorna um middleware

// app.use((req, res) => { // Se eu passar uma url, fica fixo na url passa (ex. '/hello')
//     res.send('Estou <b>bem</b>!') // Ele reconhece a tag negrita no browser!!
// })

app.use((req, res, next) => { // Função middleware é a função que recebe req,res e um next.
    console.log('Antes...')
    next()
})

app.get('/clientes/relatorio', (req, res, next) => {
    res.send(`Cliente relatório: completo  = ${req.query.completo} ano = ${req.query.ano}`)
    // na rota adiciona estes queries: /relatorio?completo=true&ano=2018
})

app.get('/clientes/:id', (req, res, next) => {
    res.send(`Cliente ${req.params.id} selecionado.`)
})

app.post('/corpo', (req, res) => {   
    // res.send(req.body.name)  // Forma simples e moderna de se fazer
    res.send({1:JSON.stringify(req.body), 2:req.body.name})
})

app.get('/opa',(req, res, next) => { // Se eu passar uma url, fica fixo na url passada (ex. '/hello')
    console.log("Durante...")
    // res.send('Estou <b>bem</b>, amigo!') // Ele reconhece a tag negrita no browser!!
    res.json({      // A reposta pode ser em varias respos,as json, formato separado por virgula, etc.
        name: 'ipad 32Gb',
        price: 3925.99
    })
    next()
})

app.use('/opa', (req,res) => {
    console.log('Depois...')
})

app.listen(3000, () => {
    console.log('Back-end running...')
}) // Aplicação escuta na porta 3000 do exemplo;



