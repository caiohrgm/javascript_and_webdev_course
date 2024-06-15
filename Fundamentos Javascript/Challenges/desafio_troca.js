// Trocar as variaveis  de forma que a = 94 e b = 7: (Forma traidcional)

let a = 7;
let b = 94;
let temp = b;

console.log(a)
console.log(b)

b = a;
a = temp;

console.log(a)
console.log(b)

// Forma moderna e rápida:
var c = 8;
var d = 32;

[c, d] = [d, c];

console.log(c)
console.log(d)


