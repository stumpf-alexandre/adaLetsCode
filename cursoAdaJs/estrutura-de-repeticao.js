//Laços condicionais

//npm install readline-sync, faz leitura de dados no comando

const input = require('readline-sync');
const numero_sorteado = 5;
let numero = Number(input.question('Qual numero voce escolhe?'));

while (numero !== numero_sorteado) {
    console.log('Voce errou o numero. Tente novamente...');
    numero = Number(input.question('Qual numero voce escolhe?'));
}
console.log('Voce acertou!!! Numero',numero);