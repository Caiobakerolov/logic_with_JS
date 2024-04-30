// primeira forma de fazer

// const elementos = [
//   {tag: 'p', texto: 'Frase 1'},
//   {tag: 'div', texto: 'Frase 2'},
//   {tag: 'footer', texto: 'Frase 3'},
//   {tag: 'section', texto: 'frase 4'}
// ];

// const container = document.querySelector('.container');
// const div = document.createElement('div');

// for (let i = 0; i < elementos.length; i++) {
//   let { tag, texto } = elementos[i];
//   let tagCriada = document.createElement(tag);
//   tagCriada.innerHTML = texto;
//   div.appendChild(tagCriada);    
// }

// container.appendChild(div);





// segunda forma de fazer
const elementos = [
  {tag: 'p', texto: 'Frase 1'},
  {tag: 'div', texto: 'Frase 2'},
  {tag: 'footer', texto: 'Frase 3'},
  {tag: 'section', texto: 'frase 4'}
];

const container = document.querySelector('.container');
// aqui ele esta criando um elemento, no caso elemento DIV
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  // criamos outro elemento aqui, que no caso e a tag
  let tagCriada = document.createElement(tag);
  // aqui criei um filho e adicionei um texto
  let textoCriado = document.createTextNode(texto);

  // aqui estou adicionando um filho dentro da tagCriada no caso o filho e o (textoCriado)
  tagCriada.appendChild(textoCriado);
  // depois que criei a tag, e tudo foi adicionado dentro da (tagCriada), aqui estou adicionando tudo dentro da DIV
  div.appendChild(tagCriada);    
}

// depois de tudo esta no seu devido lugar, eu adicionei tudo dentro do container, que no caso e a class que esta no HTML, e dentro da class foi criada um filho a DIV
container.appendChild(div);