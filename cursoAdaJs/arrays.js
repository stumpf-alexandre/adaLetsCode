//ARRAYS
//Como criar um array
let arr = []//criando um array vazio
arr = ['Alexandre', 43, 1.85, true]
//Como acessar os elementos do array
console.log('Primeiro elemento:', arr[0]);
console.log('Segundo elemento:', arr[1]);
console.log('Terceiro elemento:', arr[2]);
console.log('Quarto elemento:', arr[3]);

//Como obter o tamanho do array
console.log('Tamanho do array:', arr.length);

//Percorrendo array
//primeiro metodo
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//segundo metodo
for (let elemento of arr) {
    console.log(elemento);
}

//terceiro elemento
for (let indice in arr) {
    console.log(indice)
    console.log(arr[indice]);
}

//Métodos de Arrays
const arr1 = [30, 12, 45, 34, 29];

//Fatiamento: slice
//imprimindo apenas os dois primeiros elementos do array
console.log(arr1.slice(0, 2));
//imprimindo o terceiro e o quarto elemento do array
console.log(arr1.slice(2, 4));

//Adicionando elementos: push(inclui o elemento no final do array) | unshift(inclui o elemento no inicio do array)
console.log('Antes de adicionar:', arr1);
arr1.push(23);
console.log('Depois de adicionar:', arr1);
arr1.push(56, 78);
console.log('Depois de adicionar:', arr1);
arr1.unshift(2);
console.log('Depois de adicionar:', arr1);

//Remover elementos: pop(remove o elemento no final do array) | shift(remove o elemento no inicio do array)
console.log('Antes de remover:', arr1);
arr1.pop();
console.log('Depois de remover:', arr1);
arr1.pop();
console.log('Depois de remover:', arr1);
arr1.pop();
console.log('Depois de remover:', arr1);
arr1.shift();
console.log('Depois de remover:', arr1);

//Concatenando arrays : concat
let arr2 = [45, 70, 456, 87];
console.log('Array 1', arr1);
console.log('Array 2', arr2);

console.log('Arrays concatenados:', arr1.concat(arr2));
console.log('Arrays concatenados:', arr2.concat(arr1));

//Buscando indice dos elementos: indexOf | lastIndexOf
console.log(arr1);
let indiceDoElemento34 = arr1.indexOf(34);
console.log(indiceDoElemento34);
let indiceDoElemento12 = arr1.indexOf(12);
console.log(indiceDoElemento12);
let indiceDoElementoInezistente = arr1.indexOf(31);
console.log(indiceDoElementoInezistente);

let arr3 = [1, 2, 3, 3, 5, 3];
console.log(arr3);
console.log(arr3.lastIndexOf(3));//ultimo indice do elemento
console.log(arr3.lastIndexOf(5));

//Descobrindo a existencia de um elemento: includes
console.log(arr1);
console.log('Possui o elemento 10',arr1.includes(10));
console.log('Possui o elemento 12', arr1.includes(12));

//Invertendo arrays: reverse
console.log(arr1);
const arr1Invertido = arr1.reverse();
console.log(arr1Invertido);
