let alturaDaNicole = 1.58

console.log('Minha altura é: ', altura)

let altura = 1.58
let largura = 10
let area = altura * largura

console.log('A área da figura é: ', area)


// letras maiúsculas e minúsculas fazem diferença
let nomePessoa = 'Ana'
let NomePessoa = 'Bruno'
console.log('Nome 1: ', nomePessoa)
console.log('Nome 2: ', NomePessoa)



// Boa prática de legibilidade de código

// Nome de variáveis devem ser descritivas
let alturaDaPessoa = 1.75
let larguraDaPessoa = 5
let areaDaPessoa = alturaDaPessoa * larguraDaPessoa

console.log('A área da pessoa é: ', areaDaPessoa)




// Evitar comentários desnecessários
// Comentários devem explicar o "porquê" do código, não o "o quê"   
let raioDoCírculo = 7
let areaDoCírculo = Math.PI * raioDoCírculo * raioDoCírculo // Usamos a fórmula da área do círculo para calcular a área com base no raio
console.log('A área do círculo é: ', areaDoCírculo)



// Evitar abreviações em nomes de variáveis
let velocidadeMediaDoCarro = 80 // em km/h
console.log('A velocidade média do carro é: ', velocidadeMediaDoCarro)



// Manter uma estrutura consistente
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura)
    return imc
}
let imcDaPessoa = calcularIMC(70, 1.75)
console.log('O IMC da pessoa é: ', imcDaPessoa)



// Evitar números mágicos
const TAXA_DE_CONVERSAO_DOLAR_REAL = 5.25
let valorEmDolar = 100
let valorEmReal = valorEmDolar * TAXA_DE_CONVERSAO_DOLAR_REAL
console.log('O valor em Real é: ', valorEmReal)


// Manter espaçamento adequado
let comprimentoDoRetangulo = 15
let larguraDoRetangulo = 8
let areaDoRetangulo = comprimentoDoRetangulo * larguraDoRetangulo
console.log('A área do retângulo é: ', areaDoRetangulo)



// Evitar linhas muito longas
let descricaoDoProduto = 'Este é um produto de alta qualidade que oferece excelente desempenho e durabilidade para todas as suas necessidades diárias.'
console.log('Descrição do produto: ', descricaoDoProduto)
// Quebra a linha para melhorar a legibilidade
let mensagemDeBoasVindas = 'Seja bem-vindo ao nosso sistema! ' +
    'Estamos felizes em tê-lo aqui e esperamos que você tenha uma ótima experiência.'
console.log(mensagemDeBoasVindas)



// Evitar o uso excessivo de comentários
// Comentários devem ser usados para explicar partes complexas do código
let fatorial = 1
for (let i = 1; i <= 5; i++) {
    fatorial *= i // Multiplicando o fatorial pelo número atual
}
console.log('O fatorial de 5 é: ', fatorial)


// Evitar o uso de variáveis desnecessárias
let numero = 10
let dobro = numero * 2
console.log('O dobro do número é: ', dobro)
console.log('O dobro do número é: ', numero * 2)


// Exemplo ruim de legibilidade de código

// Nomes de variáveis não descritivas, não sabemos do que se trata as variáveis
let a = 1.75
let b = 5
let c = a * b
console.log('A área da figura é: ', c)