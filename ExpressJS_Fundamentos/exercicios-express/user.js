function salvar(req, res) {
    res.send('Usuario > save')
}

function obter(req, res) {
    res.send('User > get')
}

module.exports = { salvar, obter }
// export default  printHello