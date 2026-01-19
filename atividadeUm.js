// Atividade 1 - Boas vindas
// Crie uma variável chamada nome e atribua seu nome completo. Depois, 
// use console.log() para exibir a mensagem: "Olá, [nome]! Seja bem-vindo(a) ao curso de JavaScript!"
let nome = "nicole moura da conceição";
console.log('Meu nome é: ', nome);


// Atividade 2 - Cálculo de Idade
// Crie duas variáveis: anoAtual e anoNascimento. Calcule a idade da pessoa 
// subtraindo os valores e exiba no console: "Você tem [idade] anos."
letAnoAtual = 2026;
let anoNascimento = 2007;
let idade = letAnoAtual - anoNascimento;
console.log('Minha idade é: ', idade);


// Atividade 3 - Mensagem de localização
// Crie três variáveis: cidade, estado e país. Em seguida, exiba no console a mensagem:"Você está em [cidade], [estado], [país]."
let cidade = "Salvador";
let estado = "Bahia";
let pais = "Brasil";
console.log('Você está em ', cidade + ', ' + estado + ', ' + pais + '.');


// Atividade 4 - Tipo de variável
// Crie uma variável chamada temCarteira com valor true ou false. 
// Use console.log(typeof temCarteira) para mostrar o tipo dessa variável.
let temCarteira = false;
console.log('Possuo carteira de motorista? ', temCarteira);


// Atividade 5 - Simulação bancária
// Crie uma variável saldo iniciando com 0. Depois, simule um depósito de 200 e um saque de 50. 
// Mostre o saldo final no console com uma frase explicando.
let saldo = 0;
saldo += 200; // depósito
saldo -= 50;  // saque
console.log('Meu saldo atual é: R$ ', saldo);


// Atividade 6 - Média de notas
// Crie variáveis para três disciplinas: matematica, portugues e ciencias, contendo 
// suas respectivas notas. Calcule e mostre a média final com uma mensagem.
let matemática = 8;
let português = 7;
let ciência = 9;
let média = (matemática + português + ciência) / 3;
console.log('Minha média de notas é: ', média.toFixed(2));


// Atividade 7 - Reajuste de salário
// Crie uma variável chamada salario com valor 3000. Calcule um aumento de 10% e mostre o novo salário com uma frase explicando o motivo.
let salario = 3000;
let reajuste = 0.1; // 10%
salario += salario * reajuste;
console.log('Meu novo salário após o reajuste é: R$ ', salario.toFixed(2));


// Atividade 8 - Contador de cliques
// Simule um contador de cliques em um botão. Crie uma variável cliques = 0 e incremente 1 a cada 
// "simulação de clique". Mostre o total após 3 simulações.
let cliques = 0;
cliques += 1;
cliques += 1;
cliques += 1;
console.log('Total de cliques: ', cliques);


// Atividade 9 - Constantes não podem ser alteradas
// Crie uma constante chamada PI com valor 3.14. Tente alterar seu valor e observe o que acontece.
const PI = 3.14;
console.log('O valor de PI é: ', PI);
PI = 3.14159; // Isso causará um erro
console.log('O novo valor de PI é: ', PI);


// Atividade 10 - Concatando diferentes tipos
// Crie uma variável mensagem com uma string e outra variável numero com um número. 
// Concatene ambas em uma nova variável resultado e mostre o resultado e o tipo final no console usando typeof.
let mensagem = "Olá";
let numero = 10;
let resultado = mensagem + ', você tem ' + numero + ' novas mensagens.';
console.log(typeof resultado);
