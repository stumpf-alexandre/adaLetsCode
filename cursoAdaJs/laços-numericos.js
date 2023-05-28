//Laço numerico FOR
const input = require('readline-sync');

//o problema
//const nota1 = Number(input.question('Informe a nota 1: '));
//const nota2 = Number(input.question('Informe a nota 2: '));
//const nota3 = Number(input.question('Informe a nota 3: '));

//let media = (nota1 + nota2 + nota3) / 3;

//estrutura FOR
let nota;
let media = 0;
for (let i = 1; i <= 3; i++) {
    nota = Number(input.question(`Informe a nota ${i} do aluno: `));
    media = media + nota;
}
console.log(`A media do aluno e ${media / 3}`);