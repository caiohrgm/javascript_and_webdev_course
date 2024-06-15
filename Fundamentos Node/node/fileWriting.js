const fs = require('fs')

const product = {
    name:'Xbox Series S',
    price: 399.99,
    discount: 0.15
}

fs.writeFile(__dirname + '/productFile.json', JSON.stringify(product) , error => {
    console.log(error || 'File saved!')
})