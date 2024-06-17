const filterNumbers = (arr) => {
    const newArr = []
    for (let i=0; i< arr.length; i++) {
        if (typeof arr[i] == 'number') {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(filterNumbers(["Javascript", 1, '3', 'Web', 20]))
console.log(filterNumbers(['a','c']))