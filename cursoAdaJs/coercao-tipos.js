//coerção (converção) de tipos
//1. Coerção explicita (Manual)
const numero = 10;
console.log(numero, typeof numero);
const numeroEmFormatoDeString = String(numero);

console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString);

console.log(Number('12348'));
console.log(parseFloat('12348.456'));
console.log(Boolean(0));
console.log(Boolean(1));

//2. Coerção implicita (Automática)
console.log('10' + 1);
console.log('10' -1);
console.log(10 * '3');
console.log(10 - 'asaass');

//outros exemplos
let n = 1 + '1';
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + '5');

console.log('5' + 2 + 3 + 4);

console.log('10' - '4' - '3' - '2' + '5');