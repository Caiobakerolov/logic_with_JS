// try {
//   console.log(naoExisto);
// } catch(erro) {
//   console.log('deu Erro');
// }

function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('x e y precisam ser numeros.');
  }
  return x + y;
}

try {
  console.log(soma(5,8));
  console.log(soma(5,'DSD'));
} catch (error) {
  // console.log(error); ... nunca mostrar o erro para o usuario
  console.log('Alguma coisa mais amigavel com usuario.');
}
