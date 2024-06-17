const checkBisixYear = (year) => {

    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true
            } else {
                return false
            }
        } else {
            return true
        }
    } else {
        return false
    }
}

console.log(checkBisixYear(2020))
console.log(checkBisixYear(2100))