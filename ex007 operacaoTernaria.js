// ? :

// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';

// essa funcao faz a mesma coisa que a funcao do IF abaixo que esta comentada

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP!' : 'Usuario Normal!'
console.log(nivelUsuario);

// if (pontuacaoUsuario >= 1000) {
//   console.log('Usuario VIP!');
// } else {
//   console.log('Usuario normal!');
// }

console.log('----------------');

const pontuacaoUsuario1 = 1000;
const nivelUsuario1 = pontuacaoUsuario1 >= 1000 ? 'Usuario VIP!' : 'Usuario Normal!'

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'preta';

console.log(nivelUsuario1, corPadrao);