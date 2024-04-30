// continue continua para aproxima interacao
// break sai do laco

const numeros = [1,2,3,4,5,6,7,8,9];

for(let numero of numeros) {

  if(numero === 2) {
    console.log('Pulei o numero 2');
    continue; // nesse caso ele pula o 2 e continua
  } 

  if(numero === 7) {
    break; // nesse caso quando ele acha o 7 ele para 1 indice antes, nao chega nem a mostrar o 7 . . . ele para o laco de repeticao
  }
  console.log(numero);
}

console.log('-------------------');

const numeros1 = [1,2,3,4,5,6,7,8,9];

for(let numero2 of numeros1) {

  if(numero2 === 2) {
    console.log('Pulei o numero 2');
    continue; // nesse caso ele pula o 2 e continua
  } 

  console.log(numero2); 

  if(numero2 === 7) {
    console.log('7 encontrado, saindo');
    break; 
  }
}

console.log('-------------------');

const numeros2 = [1,2,3,4,5,6,7,8,9];

for(let i in numeros2) {
  let numero3 = numeros2[i];

  if(numero3 === 2) {
    console.log('Pulei o numero 2');
    continue; // nesse caso ele pula o 2 e continua
  } 

  console.log(numero3); 

  if(numero3 === 7) {
    console.log('7 encontrado, saindo');
    break; 
  }
}

console.log('-------------------');

const numeros3 = [1,2,3,4,5,6,7,8,9];

for(let i = 0; i < numeros3.length; i++) {
  let numero4 = numeros3[i];

  if(numero4 === 2) {
    console.log('Pulei o numero 2');
    continue; // nesse caso ele pula o 2 e continua
  } 

  console.log(numero4); 

  if(numero4 === 7) {
    console.log('7 encontrado, saindo');
    break; 
  }
}

console.log('-------------------');

const numeros4 = [1,2,3,4,5,6,7,8,9];

let i = 0;
while (i < numeros4.length) {
  let numero5 = numeros4[i];

  if(numero5 === 2) {
    console.log('Pulei o numero 2');
    i++; // se nao colocar o i aqui ele forma um laco infinito ate trava o pc, porcausa do continue abaixo
    continue; // nesse caso ele pula o 2 e continua
  } 

  console.log(numero5); 

  if(numero5 === 7) {
    console.log('7 encontrado, saindo');
    i++;
    break; 
  }
  i++;
}

console.log('-------------------');

const numeros5 = [1,2,3,4,5,6,7,8,9];

let i1 = 0;
do {
  let numero6 = numeros5[i1];

  if(numero6 === 2) {
    console.log('Pulei o numero 2');
    i1++; // se nao colocar o i aqui ele forma um laco infinito ate trava o pc, porcausa do continue abaixo
    continue; // nesse caso ele pula o 2 e continua
  } 

  console.log(numero6); 

  if(numero6 === 7) {
    console.log('7 encontrado, saindo');
    i1++;
    break; 
  }

  i1++;

} while (i1 < numeros5.length);