const transformAge = (age) => {
    const daysLived = age*365
    return daysLived
}

console.log(transformAge(37))
console.log(transformAge(25))
console.log(transformAge(70))