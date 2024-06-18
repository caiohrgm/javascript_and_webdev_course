module.exports = (app, text) => {  // Passando a intancia do express como parametro para dentro do modulo
    function save(req,res) {
        res.send("Product > saved" + text)
    }

    function get(req, res) {
        res.send("Product > got" + text)
    }

    app.post('/product', save)
    app.get('/product', get)

    return {save, get}
}