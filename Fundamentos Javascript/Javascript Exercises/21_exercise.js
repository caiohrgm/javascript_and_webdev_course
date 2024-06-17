const smallestNumber = (arr) => {
    return arr.sort(function(a,b) {
        return a - b
    })[0]
}

console.log(smallestNumber([3,2,4,9,1]))
console.log(smallestNumber([10,5,35,65]))