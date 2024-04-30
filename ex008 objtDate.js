
const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia);
console.log(data.toString());

console.log('-------------');

// parametro passado em ondem . . . ano / mes / dia / hora / minutos / segundos / milesimos de segundos ... os milisegundos vai ate 999 se colocar 1000 ele passa 1 minuto
const data1 = new Date(2023, 5, 2, 18, 30, 27, 500);
console.log(data1.toString());

console.log('-------------');

const data2 = new Date('2023-06-02 18:30:30');
console.log(data2.toString());

console.log('-------------');

const data3 = new Date('2023-06-02 18:30:30.150');
console.log('Dia', data3.getDate());
// coloquei mes mais 1 porque ele pega o indice do mes, e como janeiro = 0 . . . junho = 5 . . . por isso foi acrescentado 1 
console.log('Mes', data3.getMonth() + 1); 
console.log('Ano', data3.getFullYear());
console.log('Hora', data3.getHours());
console.log('Min', data3.getMinutes());
console.log('Seg', data3.getSeconds());
console.log('ms', data3.getMilliseconds());
console.log('Dia semana', data3.getDay()); // 0 - domingo e 5 = sexta . . . 
console.log(data3.toString());

console.log('-------------');

console.log(Date.now()); // aqui ele esta retornando o milesimos de segundos do horario de agora

console.log('-------------');

function zeroEsquerda (num) {
  return num >= 10 ? num : `0${num}`
}

function formataData(date) {
  const day = zeroEsquerda(date.getDate());
  const mes = zeroEsquerda(date.getMonth() + 1);
  const ano = zeroEsquerda(date.getFullYear());
  const hora = zeroEsquerda(date.getHours());
  const min = zeroEsquerda(date.getMinutes());
  const seg = zeroEsquerda(date.getSeconds());

  return`${day}/${mes}/${ano}  ${hora}:${min}:${seg}`;
}

const date = new Date();
const dataBrasil = formataData(date);
console.log(dataBrasil);