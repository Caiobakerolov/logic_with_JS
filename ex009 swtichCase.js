function getDiaSemanaTexto (diaSemana) {
  let diaSemanaTexto;
  // o SWITCH faz a mesma funcao que o IF e ELSE
  switch (diaSemana) {
    case 0:
      diaSemanaTexto = 'Domingo';
      return diaSemanaTexto; // desta forma eu posso eliminar a palavra break, porque quando se encontra a palabra return ele elimina a funcao aqui, funciona como um eliminador tbm
    case 1:
      diaSemanaTexto = 'Segunda';
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = 'Terca';
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = 'Quarta';
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = 'Quinta';
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = 'Sexta';
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = 'Sabado';
      return diaSemanaTexto;
    default:
      diaSemanaTexto = '';
      return diaSemanaTexto;
  }  
}

const data = new Date('1992-06-2 18:30:00');
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);

// if (diaSemana === 0) {
//   diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1) {
//   diaSemanaTexto = 'Segunda';
// } else if (diaSemana === 2) {
//   diaSemanaTexto = 'terca';
// } else if (diaSemana === 3) {
//   diaSemanaTexto = 'Quarta';
// } else if (diaSemana === 4) {
//   diaSemanaTexto = 'Quinta';
// } else if (diaSemana === 5) {
//   diaSemanaTexto = 'Sexta';
// } else if (diaSemana === 6) {
//   diaSemanaTexto = 'Sabado';
// } else {
//   diaSemana = '';
// }




// o SWITCH faz a mesma funcao que o IF e ELSE
// switch () {
//     case 0:
//       diaSemanaTexto = 'Domingo';
//       break; // o break e obrigatorio, porque se nao fica num loop infinito, ele fica procutando procurando ate encontrar o resultado
//     case 1:
//       diaSemanaTexto = 'Segunda';
//       break;
//     case 2:
//       diaSemanaTexto = 'Terca';
//       break;
//     case 3:
//       diaSemanaTexto = 'Quarta';
//       break;
//     case 4:
//       diaSemanaTexto = 'Quinta';
//       break;
//     case 5:
//       diaSemanaTexto = 'Sexta';
//       break;
//     case 6:
//       diaSemanaTexto = 'Sabado';
//       break;
//     default:
//       diaSemanaTexto = '';
//   }

