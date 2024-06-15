const anonimo =  process.argv.indexOf('-a') !== -1 //Para reconehcer entradas no terminal

if(anonimo) {
    process.stdout.write('Fala Anonimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data', data => {  // Evento on('data) = quando o user digita alguam cosia e da enter.
        const name = data.toString().replace('\n',' ')   // O .rpelace está removendo o enter que o usuario digitou e substituindo por um espaço vazio
        
        process.stdout.write(` Fala ${name}`)
        process.exit()
    })
}