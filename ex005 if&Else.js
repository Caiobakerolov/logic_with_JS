const number = 6;

if (number >= 0 && number <= 5) {
  console.log('O numero esta entre 0 e 5');
} else {
  console.log('O numero NAO esta entre 0 e 5!');
}

console.log('---------------');

const number1 = 10;

if (number1 >= 0 && number1 <= 5) {
  console.log('O numero esta entre 0 e 5');
} else if (number1 >= 6 && number1 <= 8) {
  console.log('O numero esta entre 6 e 8');
} else if (1 === 1) { // essa logica ira fazer com que tudo que esta abaixo seja destruido, porque a logica esta errada !!!
  console.log('LITERAL!');
} else if (number1 >= 9 && number1  <= 11) {
  console.log('O numero esta entre 9 e 11');
} else {
  console.log('O numero NAO esta entre 0 e 11');
}

console.log('... aqui esta o resto do codigo!');

console.log('----------------');

const number2 = 10;

if (number2 >= 0 && number2 <= 5) {
  console.log('O numero esta entre 0 e 5');
} else if (number2 >= 6 && number2 <= 8) {
  console.log('O numero esta entre 6 e 8');
} else if (number2 >= 9 && number2  <= 11) {
  console.log('O numero esta entre 9 e 11');
} else {
  console.log('O numero NAO esta entre 0 e 11');
}
