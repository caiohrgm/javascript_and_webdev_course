/* Tipos dedados primitivos em javascript:
 * Boolean: true e false;
 * null;
 * undefined: valor indefinido;
 * Number: inteiros ou ponto flutuante (42 ou 3.14159);
 * String: "Amor";
 * Symbol: tipo novo no ECMASCript 6 - tipo cuas instâncias são únicas e imutáveis;
 * Object.
*/

// Linguagem de tipagem fraca, ou seja, uma mesma variável pode ter múltiplos valores e tipos, ao longo do código.

// Difere maiuscula de minsuculas no nome das variaveis;

// Decalração de variáveis:
var x = 10; // "var" está em desuso. O mais moderno é usar let.
var y = 9.5; // var tem escopo de funçã

console.log(typeof x);
console.log(typeof y);

let a = 9; // Mais moderno e tem diferenças do "var"
console.log(a);

var foo = 3; // "var" deixa você redeclarar a mesma variavel. "let" não. let permite apenas atribuir novo valor a variavel, mas redeclarar não.
var foo = 4;
console.log(foo);

