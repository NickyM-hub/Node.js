const idade = 47;

if (idade > 100) {
    console.log("Olá, Roberto carlos");
}

else if (idade == 100) {
    console.log("Pé na cova");
}

else if (idade >= 60) {
    console.log("Passou da validade");
}

else if (idade >= 30) {
    console.log("Véio(a) caduca");
}

else if (idade >= 18) {
    console.log("Maior de idade");
}

else if (idade >= 13) {
    console.log("Aborrecente");
}

else {
    console.log("Cotoco de gente");
}


// Operador ternário
// condição ? true : false

// Exemplo 1
idade >= 18 ? console.log('maior de idade') : console.log('menor de idade')


// Exemplo 2
notaDoAluno = 7

notaDoAluno >= 9 ? console.log('excelente') :
notaDoAluno >= 7 ? console.log('bom') :
notaDoAluno >= 5 ? console.log('regular') :
console.log('reprovado');

