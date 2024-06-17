const totalExpenses = (arr) => {

    let total = 0
    for(i in arr) {
        total = total + arr[i].preco
    }
    return total
}

console.log(totalExpenses([{nome: 'Jornal Online', categoria:'Informação', preco:89.99},
    {nome: 'Cinema', categoria:'Entretenimento', preco:150}]))

    console.log(totalExpenses([{nome: 'Galaxy S20', categoria:'Eletrônicos', preco: 3599.90},
        {nome: 'Macnook Pro', categoria:'Eletrônicos', preco:30999.99}]))