const checkBoolean = (input) => {

    if (input === true ) {
        return false
    }

    if (input === false) {
        return true
    }

    if (typeof input !== 'boolean' && typeof input !== 'number') {
        return 'booleano ou números esperado, mas o parâmetro é do tipo string'
    }

    if (typeof input == 'number') {
        const output = -input
        return output
    }
}

console.log(checkBoolean(1))
console.log(checkBoolean(true))
console.log(checkBoolean("6"))
console.log(checkBoolean(-2000))


