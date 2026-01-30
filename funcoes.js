// function saudacao(nome) { // nome é um parametro da função saudacao
//     console.log('Olá,', nome)
// }

const saudacao = nome => console.log('Olá', nome)

saudacao('Nicole')  // 'Nicole' é um argumento passado para a função
saudacao('Claudia')

// function calcularDobro(numero) {
//     return numero * 2
// }

//const calcularDobro = (numero) => {
//    return numero * 2
//}

const calcularDobro = numero => numero * 2

const numeroDobrado = calcularDobro(4)

console.log('o dobro de 4 é: ', numeroDobrado)