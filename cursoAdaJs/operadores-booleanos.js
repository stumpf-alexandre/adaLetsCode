const numero = 10;
console.log(numero > 20);
console.log(numero == 10);
console.log(numero != 10);
console.log(numero < 20);
console.log(numero == '10');
console.log(numero === '10');
console.log(numero != '10');
console.log(numero !== '10');
console.log(numero >= 10);
console.log(numero <= 10);
console.log(numero >= 11);
console.log(numero <= 9);

let idade = 43;
let tenhoCNH = true;
const possoDirigir = idade >= 18 && tenhoCNH === true;

console.log("Posso dirigir? ", possoDirigir);

let idad = 40;
const votoFacultativo = idad < 18 || idad >= 70;

console.log(votoFacultativo);