//1. Verificação de idade para compra de bebida
const idade = 16;

if (idade >= 18) {
    console.log('Pode comprar bebida alcoólica');
}
else {
    console.log('Venda proibida para menores de 18 anos');
}

//2. Saudação de acordo com a hora
let hora = 14;

if (hora >= 6 && hora < 12) {
    console.log('Bom dia');
}
else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde');
}
else {
    console.log('Boa noite');
}

//3. Verificação de número positivo ou negativo
const numero = -5;

if (numero > 0) {
    console.log('Número positivo');
}
else if (numero < 0) {
    console.log('Número negativo');
}
else {
    console.log('Número é zero');
}

//4. Conversão de nota em conceito
const nota = 8;

if (nota >= 9) {
    console.log('Conceito A');
}
else if (nota >= 8) {
    console.log('Conceito B');
}
else if (nota >= 7) {
    console.log('Conceito C');
}
else if (nota >= 6) {
    console.log('Conceito D');
}
else {
    console.log('Conceito E');
}