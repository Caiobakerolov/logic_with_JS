const pessoa = {

  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  endereco: {
    rua: 'Av Brasil',
    numero: 320

  }

};

// const nome = pessoa.nome;
// const { nome, sobrenome, idade} = pessoa;
// const { endereco: {rua, numero}, endereco } = pessoa;
// const { endereco: {rua: r = 14321654, numero}, endereco } = pessoa;
const { nome, ...resto} = pessoa;
console.log(nome ,resto);