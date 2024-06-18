function greetings(name) {
    return function(req, res, next) { // O retorno da função é uma função middleware
        console.log(`Seja bem vindo, ${name}.`)
        next()
    }
    
    // return function(req, res, next)
}
// export default greetings // Forma apra exportar apenas uma função.
// export {greetings} // Forma para exportar mais de uma função.
module.exports = greetings