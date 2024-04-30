// escreva uma funcao que recebe um numero e retorne o seguinte 
// numero e divisivel por 3 = fizz
// numero e divisivel por 5 = buzz
// numero e divisivel por 3 e 5 = fizzbuzz
// numero nao e divisivel por 3 e 5 = retorna o proprio numero
// checar se o numero e realmente um numero = retornar o proprio numero
// use a funcao com numeros de 0 a 100


function FizzBuzz (numeroPassado) { 
  if (typeof numeroPassado !== 'number') return numeroPassado;
  if (numeroPassado % 3 === 0 && numeroPassado % 5 === 0) return 'FizzBuzz';
  if(numeroPassado % 3 === 0) return 'Fizz';
  if (numeroPassado % 5 === 0) return 'Buzz';
  return numeroPassado;
}

console.log('a', FizzBuzz('a'));

for (let i = 0; i <= 100; i++) {
  console.log(i, FizzBuzz(i));
}