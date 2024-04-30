// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const letras = [b, c, a];
// [a, b, c] = letras; 

// console.log(a, b, c);

// ... quando usamos no sentido de pegar o que sobre o nome dele e REST!!! agora quando usamos no sentido de distribuir alguma coisas chamamos de spread!!!
//               0  1  2  3  4  5  6  7  8 - -  indices
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [um, dois, tres, ... resto] = numeros;
const [um, , tres, , cinco, , sete, , nove] = numeros;
// console.log(um, dois, tres);
// console.log(resto);
console.log(um, tres, cinco);

console.log('----------------------');

//                    0        1        2 - - -  indice principal
//                  0 1 2    0 1 2    0 1 2 - - - indice interno
const numeros1 = [ [1,2,3], [4,5,6], [7,8,9] ];
// const [, [,,seis]] = numeros1; // desta forma e mais complexo(DIFICIL) do que o que esta comentado abaixo
// console.log(numeros1[1][2]);
// console.log(seis);
const [lista1, lista2, lista3] = numeros1;
console.log(lista3[2]);