const months = {
    1:'Janeiro',
    2:'Fevereiro',
    3:'Março',
    4:'Abril',
    5:'Maio',
    6:'Junho',
    7:'Julho',
    8:'Agosto',
    9:'Setembro',
    10:'Outubro',
    11:'Novembro',
    12:'Dezembro'
}

const getMonth = (monthNumber) => {
    for (let num in months) {
        if (monthNumber == num) {
            return months[num]
        }
    }
}
console.log(getMonth(1))
console.log(getMonth(4))