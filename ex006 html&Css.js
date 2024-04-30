// capturar evento de submit do formulario
const form = document.querySelector('#formulario');

// com o addEventListener estou criando um evento no submit, que quando clicar no botao ele ira exetucao uma funcao
form.addEventListener('submit', function(event) {
  // previnimos o default nao deixaremos ele ser enviado
  event.preventDefault();

  //ele ira informar qual elemento foi clicado na pagina. entao no caso ele esta pegando os dados do input
  const inputPeso = event.target.querySelector('#peso');
  const inputAltura = event.target.querySelector('#altura');

  // neste caso ele estara pegando o valor do input
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
  
  // no caso estou checando, se o peso for invalida executa uma funcao no caso retornara como invalido e exibira o fundo vermelho
  if(!peso){
    setResultado('Peso invalido!', false);
    return;
  }

  // no caso estou checando, se a altura for invalida executa uma funcao no caso retornara como invalido e exibira o fundo vermelho
  if (!altura) {
    setResultado('Altura invalido!', false);
    return;
  }

  // essa funcao nao existe e ela sera criada para calcular o IMC
  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC e ${imc} (${nivelImc}).`;

  setResultado(msg, true);

});

// essa funcao foi criada para analisar em qual categoria do imc voce esta apos o calculo
function getNivelImc (imc) {
  // no caso foi criado um array uma lista de coisas
  const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];  

  // if (imc >= 39.9) {
  //   return nivel[5];
  // } 
  
  // if (imc >= 34.9) {
  //   return nivel[4];
  // } 
  
  // if (imc >= 29.9) {
  //   return nivel[3];
  // } 
  
  // if (imc >= 24.9) {
  //   return nivel[2];
  // } 
  
  // if (imc >= 18.5) {
  //   return nivel[1];
  // } 
  
  // if (imc < 18.5) {
  //   return nivel[0];
  // }

  // no caso foi feito desta forma para incurtar o codigo, como dentro de cada if so tinha 1 condicao e 1 retorno eu posso encurtar
  if (imc >= 39.9) return nivel[5];   
  if (imc >= 34.9) return nivel[4];   
  if (imc >= 29.9) return nivel[3];  
  if (imc >= 24.9) return nivel[2];  
  if (imc >= 18.5) return nivel[1];  
  if (imc < 18.5) return nivel[0];

  //baseado no indice do array ele ira retorna o que foi solicitado

}

 // essa funcao foi criada para calcular o IMC
function getImc(peso, altura) {
  // calcuco do imc
  const imc = peso / altura ** 2; 
  // aqui foi passo o toFixed para nao ter mais de 2 casas decimais
  return imc.toFixed(2);
}

// a tarefa dessa funcao e apenas criar o P
function criaP () {
  const p = document.createElement('p');
  return p;
}

// funcao que ira exibir o resultado, e verificar se ele e valido ou nao
function setResultado(msg, isValid) {
  const resultado = document.querySelector('#resultado');
  // o ID ta vazio porque o filho foi adicionado dentro dele no caso o P 
  resultado.innerHTML ='';   
  
  //criou um P
  const p = criaP();

  
  if(isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  // aqui estou adicionando um filho dentro do ID resultado que no caso e o P
  resultado.appendChild(p);

}