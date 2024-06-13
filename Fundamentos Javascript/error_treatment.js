// Tratamento de erroe lançando exceções:

function treatErrorThrow(error) {
    // throw new Error('...')
    throw {
        nome: error.name,
        msg: error.messaage,
        date: new Date()
    }
}

function imprimirNome(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!!')  
    } catch (e) {
        // console.log("Final")
        treatErrorThrow(e)
    }
       
}

const obj = {nome: "Roberto"}
imprimirNome(obj)