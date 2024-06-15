const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 6',  function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
}) // Executar de 5 em 5 s, em qualqeur minuto, as 12h, qualqeur dia e m~es, e na teça feira (dia 3 da semana) 
                                                        // DOmigno = 3/ Segunda = 1 / Terça = 2

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1')
}, 40000) // 20000 milisegundos = segundos

const regra  = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)] // Seelecinonado dias da semana, de segunda a ssexta (1,2,3,4,5)
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando tarefa 2', new Date().getSeconds())
})