const objToArray = (obj) => {
    const arr = []
    
    for(let key in obj) {
        arr.push([key, obj[key]])
    }
    return arr
}

console.log(objToArray({nome:'maria', profissao:'Desenvolvedora de Softwares'}))