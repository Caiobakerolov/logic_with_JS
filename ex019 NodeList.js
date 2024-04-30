// tem que pegar a cor de funco do background e vai colocar a cor de fundo dentro dos paragrafos

const paragrafo = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p');
const h1 = document.querySelector('h1');

// esses 2 const foi usado para pegar a cor de fundo do background do body sem acessar o css
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

console.log(backgroundColorBody);




for (let p of ps) {
  p.style.backgroundColor = "rgb(0,255,255)";
  p.style.color = "#FFF";  
}
