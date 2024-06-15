let arr = [1,2,3];
console.log(arr);

arr[3] = 4; // Da para aidcionar elemento em qualçquer posição do array, mesmoq eu deixe espaçoes vazios.
console.log(arr);


arr.push(5, 6); // Função .push: permite adicioanr diversos elementos em ordem ao final do array;
console.log(arr);

arr.pop(); // Removeo ultimo elemento do array;
console.log(arr)

delete arr[0] // Remove um elemento na posição especifica do array
console.log(arr)
console.log(typeof arr) // O array é do tipo Object

console.log("\n")

// Funções Map, Reduce, FIlter:
// Map: Mapeia cada elemento do array, aplicando uma função sobre ele
// Exemplo - duplcia cada elemento do array:
var numbers = [1, 2, 3, 4];
var doubled = numbers.map(item => item * 2);
console.log("Duplica valores do array com MAP: " + doubled + "\n"); // o resultado é [2, 4, 6, 8]

// Filter: Filtra um array
// Exemplo - Remove números ímpares do array:
var numbers = [1,2,3,4];
var evens = numbers.filter(item => item % 2 === 0);
console.log("Remove ímpares do array com FILTER: " + evens + "\n");

// Reduce.
// Exemplo 01:
var numbers = [1,2,3,4];
var soma = numbers.reduce(function (result, item){
    return result + item;
}, 0);

console.log("Soma todos os valores do array com REDUCE: ", soma);

// Exemplo 02:

var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

var petCounts = pets.reduce(function(obj, pet){
    if (!obj[pet]) {
        obj[pet] = 1;
    } else {
        obj[pet]++;
    }
    return obj;
}, {});

console.log("Diz quantos eleemntos de cada existem no array com REDUCE: ", petCounts); 

