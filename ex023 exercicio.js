// escreva uma funcao chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number). retorne true se a imagem estiver no modo paisagem;

function ePaisagem (largura, altura) {
  return largura > altura ? true : false;
}

console.log(ePaisagem(1920,1080));// modo paisagem

console.log('-------------------');

function ePaisagem1 (largura1, altura1) {
  return largura1 > altura1;
}

console.log(ePaisagem1(1080,1920)); // modo porta retrato

console.log('-------------------');

const ePaisagem2 = (largura2, altura2) => largura2 > altura2;
console.log(ePaisagem2(1920,1080));

console.log('-------------------');