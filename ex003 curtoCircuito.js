/* 

&& -> false && true -> false "o valor mesmo"

|| -> true || false -> vai retorna "o valor verdadeiro"

*/

console.log('Luiz' && 'Maria');
console.log('Luiz' && undefined && 'Maria');

console.log('--------------');

console.log(0 || false || null || 'Caio' || true); // ele retorna caio porque o OR precisa apenas de uma expressao verdadeira para que ele retorne o verdadeiro

console.log('--------------');

const colorUser = null;
const colorStandard = colorUser || 'preto';

console.log(colorStandard);

console.log('--------------');

const colorUser1 = 'Red';
const colorStandard1 = colorUser1 || 'black';

console.log(colorStandard1);

console.log('--------------');

const a = 0;
const b = null;
const c = 'false'; // retornou a string porque e o unico e verdadeiro, o resto sao tudo expressoes
const d = false;
const e = NaN;

console.log(a || b || c || d || e);