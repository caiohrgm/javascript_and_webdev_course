function checkBetweenValue(num, min, max, included=false) {

    if (included === true) {
        if (num >= min && num <= max) {
            return true
        } else {
            return false
        }
    } else {
        if (num > min && num < max) {
            return true
        } else {
            return false
        }
    }
}

console.log(checkBetweenValue(10, 50, 100))
console.log(checkBetweenValue(16, 100, 160))
console.log(checkBetweenValue(3, 3, 150))
console.log(checkBetweenValue(3, 3, 150, true))