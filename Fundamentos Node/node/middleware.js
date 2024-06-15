// middleware:
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => { //...middlewares = lista de middlewares
    
    const execPasso = indice => {
        middlewares && indice < middlewares.length && middlewares[indice](ctx, () => execPasso(indice + 1)) // Executa de forma recursiva cada passo, incrementando 1 no passo.
    }

    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)

const ctx2 = {}
exec(ctx2, passo3, passo1, passo2) // COmo passo 3 não chama um next step, ele so executa o primeiro passo informado.
console.log(ctx2)