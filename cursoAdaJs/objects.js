//Objetos

//Como criar um objeto no JavaScript
//criando o objeto
let pessoa = {
    nome: 'Alexandre',
    idade: 43,
    altura: 1.85,
    programador:true,
}
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa['nome']);

//Como adicionar umpar chave-valor
console.log(pessoa);
pessoa.casado = true;
console.log(pessoa);

//Como remover um par chave-valor
console.log(pessoa);
delete pessoa.programador;
console.log(pessoa);

//Como percorrer
for (let chave in pessoa) {
    console.log(chave);
    console.log(pessoa[chave]);
}