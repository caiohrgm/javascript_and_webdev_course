const a = {name:'TEste'};
console.log(a.name);

const b = a; // b e a tem a mesma referencia do mesmo objeto. Se mudar algo em b vai mudar em a também.
console.log(b);

b.name = 'Opa';
console.log(a);

let c = 3 ;
let d = c; // Aqui foi feito uma copia do valor e nao por referencia, ou seja, faz uma cópia em lugares diferentes.
            // Uma alteração em um nao ira afetar o outro.

console.log(c);

d++;

console.log(c);
console.log(d);


// Undefined:
let valor; // Vairavel nao inicializada, logo é undefined;
console.log(valor);

valor = null; // Ausência de valor, valor nulo, não aponta para nenhum local de memória.

const produto = {};
console.log(produto.preco); // Aqui o produto esta definido, mas o preco nao ,e ntao da undefined;