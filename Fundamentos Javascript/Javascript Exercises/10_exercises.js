const addPlusSign = (num) => {
    let arrString = ""
    for(let i=0; i<num;i++) {
        arrString = arrString + '+'
    }
    return arrString
}

console.log(addPlusSign(2))
console.log(addPlusSign(4))
console.log(addPlusSign(0))
console.log(addPlusSign(1))