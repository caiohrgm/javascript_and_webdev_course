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