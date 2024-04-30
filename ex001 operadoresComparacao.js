/*

operadores de comparacao

 > maior que
 >= maior que ou igual
 < menor que
 <= menor que ou igual
 == igualdade (valor) -- evitar usar
 === igualdade estrita (valor e tipo)
 != diferente (valor) - - evitar usar
 !== diferente estrito (valor e tipo)

*/

// a importancia dos boolean

console.log(10 > 5); // esta fazendo uma comparacao 10 e maior que 5 se sim retornara true se nao retornara false

console.log('---------------');

console.log(10 >= 5); // ele esta perguntando se 10 e maior ou igual a 5 se 1 dos 2 for true ele ira retornar true

console.log('---------------');

console.log(10 < 11); //esta fazendo uma comparacao 10 e menor que 11 ... no caso retornara true

console.log('---------------');

console.log(10 <= 11); // esta perguntando 10 e menor ou igual a 11

console.log('---------------');

console.log(10 == 10); // esta perguntando 10 e igual a 10 
console.log(10 == '10'); // a linguagem comparou um numero com uma string

// essa comparacao == e pouca usada porque, as vezes da erro, como mostrado acima ele disse que um number e igual a string e nao e !!!!

console.log('---------------');

console.log(10 === 10); // nesse caso ele comparou o valor e o tipo no caso ele e true
console.log(10 === '10'); // aqui ja retorna falso porque number nao e igual a string, para dar true preciso tornar a string um number

console.log('---------------');

console.log(10 != 10);
console.log(10 != '10'); 

console.log('---------------');

console.log(10 !== 10); // no caso da falso porque 10 nao e diferente de 10
console.log(10 !== '10'); // esse caso e o mais utilizado porque ele checa o tipo e o valor !!! entao no caso retorna true porque '10' string e diferente de 10 number