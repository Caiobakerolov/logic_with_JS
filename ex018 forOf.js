// for classico - geralmente com iteraveis(array ou strings)
// for in - retorna o indice ou chave (strings, array ou objetos)
// for OF - retorna o valor em si (iteraveis. arrays ou strings)


// const nome = 'Caio Bakerolov';

// const nome = ['caio', 'bakerolov', 'aline'];

// for (let i = 0; i < nome.length; i++) {
//   console.log(nome[i]);
// }

// console.log('-----------------');

// for (let i in nome) {
//   console.log(nome[i]);
// }

// console.log('-------------------');

// for(let valor of nome) {
//   console.log(valor);
// }

// console.log('-------------------');

// nome.forEach(function(valor, indice, array) {
//   console.log(valor, indice, array);
// });


// quando e um objeto nao posso usar o OF porque ele da erro
const pessoa = {
  nome: 'Caio',
  sobrenome: 'Bakerolov',
  idade: 31
}

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}