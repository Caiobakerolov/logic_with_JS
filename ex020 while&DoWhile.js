const nome = 'caio';
let i = 0;

while(i < nome.length) {
  console.log(nome[i]);
  i++; // sempre serei obrigado a colocar a variavel de controle, porque se nao fica num laco infinito e trava o computador
}

console.log('Segue a vida...');

console.log('--------------------');

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r)
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

console.log('----------------------');

do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);