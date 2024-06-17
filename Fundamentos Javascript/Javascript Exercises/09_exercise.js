const repeatWords = (word, repetitionTime) => {

    let arr = []
    for (let i=0; i < repetitionTime; i++) {
        arr.push(word)
    }
    return arr
}

console.log(repeatWords('código', 2))
console.log(repeatWords(7, 3))
console.log(repeatWords('código', 2))
console.log(repeatWords(0, 0))