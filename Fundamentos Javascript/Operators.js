// Operadores Aritméticos:
const [a,b,c,d] = [1,2,3,4]
const soma = a + b + c + d
const subtracao = a - b
const multi = a * b
const divisao = a / 2
const modulo = a % 2 // resto da divisão

// Operadores Relacionais:
console.log('01)', '1' == 1);   // == iguais comparando estritamente o valor
console.log('02)', '1' === 1);  // Compara o tipo de cada valor (um é string) o outro é (Number)
console.log('03)', '3' != 1);   // Compara o valor de cada um,  esta correto, 3 é diferente de 1.
console.log('04)', '3' !== 1);  // Compara o tipo de cada um. TAmbém é true, pois String é diferente de Number.

const d1 = new Date(0);
const d2 = new Date(0);

console.log('05)', d1 === d2) // Neste caso sempre comapra referencia de memoria, e é semrpe falso.
console.log('06)', d1 == d2) // Neste caso sempre comapra referencia de memoria, e é semrpe falso.
console.log('07)', d1.getTime() === d2.getTime()) // Neste caso sim, está comparando o tipo dos valores da variavel 
console.log('07)', d1.getTime() == d2.getTime()) 

// Operadores Lógicos:
let v1 = 3;
let v2 = 6;
if (v1 == 3 || v2 == 4) { // OU (OR)
    console.log(v1);
} else {
    console.log("errrou")
}

let v3 = 3;
let v4 = 6;
if (v3 == 3 && v4 == 4) { // E (AND)
    console.log(v1);
} else {
    console.log("errrou")
}

// Operadores Unários:
let num1 = 1;
let num2 = 2;

num1++
console.log(num1)

--num1
console.log(num1)

console.log(++num1 === num2--) // COmapram o tipo das duas coisas. Number == Number -> true
console.log(++num1 == num2--) // COmapra o valor de cada operação. Aqui da false proque os valroes ja soferarma alteraçao
                              // O ++ acontece antes da comparação e o -- acontece depois da comparação

// Operador Ternário: 
//simbolo: '?'
function foo(a, b) {
    x = this.binded
    console.log(x)
}

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' // Condicional. Se for 1, então , 2, se não 3.

// Operador rest:
function total (...numeros) {
    let total = 0
    numeros.forEach(n => total += n) // Itera por cada elemento da lista e aplica uma funcção (no caso, soma cada elemento)
    return total
}

console.log(total(1,2,1,1))