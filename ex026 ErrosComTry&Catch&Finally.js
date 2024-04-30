try { 
  // e executada quando nao ha erros
  console.log('Abrir um arquivo');
  console.log('Manipulei o arquivo e gerou erro');
  console.log('Fechei o arquivo');
} catch (e) {
  // e executado quando ha erros
  console.log('Tratando o erro');    
} finally {
  // sempre e executado
  console.log('FINALLY: Eu sempre sou executado');
}

console.log('--------------------');

try {
  // console.log(a);
  // e executada quando nao ha erros
  console.log('Abrir um arquivo');
  console.log('Manipulei o arquivo e gerou erro');
  console.log('Fechei o arquivo');

  try {
    console.log(b);
  } catch(e) {
    console.log('Deu Erro');
  }

} catch (e) {
  // e executado quando ha erros
  console.log('Tratando o erro');    
} finally {
  // sempre e executado
  console.log('FINALLY: Eu sempre sou executado');
}

console.log('--------------------');

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instancia de Date.')
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

try {
  const data = new Date('01-01-1970 12:50:12');
  const hora = retornaHora();
  console.log(hora);
} catch (e) {
  // tratar erro
  // console.log(e);
} finally {
  console.log('Tenha um bom dia.');
}

