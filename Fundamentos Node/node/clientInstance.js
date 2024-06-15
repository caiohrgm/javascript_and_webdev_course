const accountantA = require('./uniqueInstance')
const accountantB = require('./uniqueInstance')

const accountantC = require('./newInstance')() // Adiciona os aprentese porque esta invocando afunção factory que esta no modulo newInstance.
const accountantD = require('./newInstance')()

accountantA.inc()
accountantA.inc()
console.log(accountantB.valor) // Isso msotra que node salva em cache as coisas de um mesmo módulo. Como A e B foram criados 
                               // com o mesmo módulo, o valor ficou salvo em cache para ambas as instancias dos contadores A e B.

accountantC.inc()
accountantC.inc()
console.log(accountantD.valor) /* Neste caso o mesmo não se repete, pois o modulo newInstance retorna uma função arrow e não apenas
                                objeto, como o modulo uniqueInstance. Portanto, as alterações nas instancias C e D, criadas a 
                                partir da funcção factory, não são comaprtilhadas.*/