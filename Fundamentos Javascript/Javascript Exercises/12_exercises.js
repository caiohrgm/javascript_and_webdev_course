const removeProperty = (obj, prop) => {
    const objCopy = {...obj} // Clonando objeto usando o spread operator
    delete objCopy[prop]
    return objCopy
}


console.log(removeProperty({a:1, b:2}, "a"))
console.log(Object.is(removeProperty({a:1, b:2}, "a"), {a:1, b:2})) // Se retornar false, não é o mesmo objeto
console.log(removeProperty({id:20, nome:'caneta', descricao:'nao preenchido'}, "descricao"))
