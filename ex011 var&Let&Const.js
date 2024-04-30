// diferencas entre var e let

// let tem o escopo de bloco { ... um bloco}
// var so tem escopo de funcao . . . no caso ele so ira respeitar o escopo dentro da funcao


const verdadeira = true;

// let nome = 'Luiz'; // aqui esta no escopo global
// var nome2 = 'Caio';


// if(verdadeira) {
//   let nome = 'Otavio'; // aqui esta no escopo interno da funcao { dentro do bloco}
//   // console.log(nome, nome2);
//   var nome2 = 'Rogerio'; // redeclarando

//   if(verdadeira) {
//     let nome = 'Outra coisa';
//     // console.log(nome, nome2);
//     var nome2 = 'Ronaldo'; // nesse caso ela foi redeclarada   

//   }

// }

// console.log(nome, nome2);





// function falaOi () {
    
//   if (verdadeira) {
//     let nome = 'Luiz';
//     var SobreNome = 'Caio';    
//   }  
//   console.log(SobreNome);
// }

// falaOi();

let sobrenome = 'Miranda';
console.log(sobrenome);