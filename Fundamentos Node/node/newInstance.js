// Uma factory retorna uma nova insância, um noov objeto
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}