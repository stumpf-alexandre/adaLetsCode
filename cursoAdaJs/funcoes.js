//Funções

//Definição da função
function saudacao() {
    console.log('Ola, seja bem vindo(a) ao nosso curso de JavaScript');
}
saudacao();//reaproveitando código
saudacao();//reaproveitando código
saudacao();//reaproveitando código

//Como enviar parametros para as funções
function novaSaudacao(nome, curso) {
    console.log(`Ola ${nome}, seja bem vindo(a) ao nosso curso de ${curso}`);
}
novaSaudacao('Alexandre', 'JavaScript');

//Retorno da função
function soma(num1, num2){
    return num1 + num2;
}
let resultado = soma(10, 20);
console.log(resultado);

function maiorDoQue50(num) {
    if (num > 50) {
        return true;
    }
    return false;
}

let valor = maiorDoQue50(51);
console.log(valor);