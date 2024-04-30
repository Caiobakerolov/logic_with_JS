const hour = 12;

// if = Si . . . no caso se acontecer isso
// else = Si nao ... se nao acontecer o que for falando ira acontecer outra coisa ou retornar outra coisa


if(hour < 12) {
  console.log('Bom dia');
} else {
  console.log('Boa Tarde')
}


console.log('--------------');

const weatherForecast = 25;

if(weatherForecast >= 24) {
  console.log('Hoje o dia esta ensolarado, levar oculos de sol na bolsa!')
} else {
  console.log('Nao precisa do oculos hoje, o tempo esta nublado!')
}

console.log('--------------');

// entre 0 - 11 - bom dia
// entre 12 - 17  - boa tarde
// entre 18 - 23 - boa noite


// IF - pode ser usado sozinho
// ELSE ou ELSE IF - so pode ser usado se tiver 1 if antes deles, eles nao poder ser usados sozinhos
// eu posso tem quantos else if eu quiser na checagem
// eu so posso ter 1 ELSE por checagem !!!
// podemos usar condicoes sem ELSE IF, utilizando apenas IF e ELSE

const hour1 = 1;
if (hour1 >= 1 && hour1 <= 4) {
  console.log('Boa Madrugrada!')
} else if (hour1 >= 5 && hour1 <= 11) {
  console.log('Bom dia!');
} else if (hour1 >= 12 && hour1 <= 17) {
  console.log('Boa Tarde!');
} else if (hour1 >= 18 && hour1 <= 24) {
  console.log('Boa noite!');
} else {
  console.log('hora invalida')
}

console.log('--------------');

const haveMoney = false;

if(haveMoney) {
  console.log('Vou sair de casa!')
} else {
  console.log('Estou duro nao vou sair!')
}

console.log('--------------');