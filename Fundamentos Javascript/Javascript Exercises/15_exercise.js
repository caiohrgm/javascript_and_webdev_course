const getOnlyPairsWithEvenNumbersa = (arr) => {
    const newArr = []

    for(let i = 0; i < arr.length; i++) {

        if (i % 2 == 0) {

            if (arr[i] % 2 == 0) {
                newArr.push(arr[i])
            }
        }
    }
    return newArr
}

console.log(getOnlyPairsWithEvenNumbersa([1,2,3,4]))
console.log(getOnlyPairsWithEvenNumbersa([10,70,22,43]))