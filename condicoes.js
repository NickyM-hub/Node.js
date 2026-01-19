let nome = '';

// a condição verifica se a variável 'nome' contém algum valor. Se estiver vazia ele será entendido como false
if (nome) {
    console.log('Olá, ', nome);
} else {
    console.log('Ainda não sei o seu nome');
}

//caso contrário:
nome = 'Ana';
if (nome) {
    console.log('Olá, ', nome);
} else {
    console.log('Ainda não sei o seu nome');
}

//outro exemplo, só que usando o null
let idade = null;
if (idade >= 18) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}   
// Como a variável idade está como null, ela será entendida como false pois ele o null não é maior ou igual a 18.

//se o null não batesse em nenhuma condição, a mensagem não seria exibida.