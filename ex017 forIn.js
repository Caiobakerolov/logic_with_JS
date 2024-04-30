// for IN - -  ele le os indices ou as chaves de um objeto

// const frutas = ['pera', 'abacaxi', 'uva'];

// for(let i = 0 ; i < frutas.length; i++){
//   console.log(frutas[i]);
// }

// for (let indice in frutas) {
//   console.log(frutas[indice]);
// }


// -------------------------------------------------------------


const pessoa = {
  nome: 'Caio',
  sobrenome: 'bakerolov',
  idade: 31
}

// console.log(pessoa.nome);
// console.log(pessoa['nome']);

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);  
  // console.log(pessoa[chave]);
}
