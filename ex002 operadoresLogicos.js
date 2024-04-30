/*

Operadores logicos

&& -> AND -> E - - - todas as expressoes precisam ser verdadeiras para retornar TRUE
|| -> OR -> OU - - - 
! -> NOT -> NAO

*/

console.log(true && true); // ele no caso ta comparando, eu tenho dinheiro no bolso &&  esta sol la fora ? se sim ira retornar algo na funcao no caso as 2 precisam ser verdade para retornar algo . . . mais se apenas 1 comparacao dentro for falso ira retornar tudo como falso

console.log('-------------');

console.log( true || false ); // ele no caso ta comparando, eu tenho dinheiro no bolso (OU)  esta sol la fora ? se apenas 1 retornar verdadeiro ele ira dar como TRUE, agora se as 2 for false ira retornar false, e tambem se as 2 for verdadeiro ira retornar verdadeiro

// exemplo: se eu tiver dinheiro no bolso ou se la fora estiver sol eu irei sair para a sua! entao caso qualquer uma de como true ele ira sair de qualquer forma

console.log('-------------');

console.log(!true); // se eu colocar true e colocar o ! no caso o NAO, ele inverte a resposta entao o true vira false e vice e versa

console.log('-------------');

console.log(!!true);// se eu negar 2x ele faz o seguinte, ele vira de true para false, e depois de false para true