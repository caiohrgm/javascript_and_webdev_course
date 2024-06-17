const getFristAndLast = (arr) => {
    const newArr = []

    newArr.push(arr[0])
    newArr.push(arr.pop())

    return newArr
}

console.log(getFristAndLast([1,2,3,4,5,6]))
console.log(getFristAndLast([7, 14 ,"Olá"]))