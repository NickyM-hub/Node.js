let totalNumerosPares = 0;
let totalNumerosImpares = 0;

let numero = 0;

while (numero <= 100) {
    if (numero % 2 == 0) {
        totalNumerosPares++;
    } else {
        totalNumerosImpares++;
    }
    numero++;
}

console.log('Total de números ímpares até agora:', totalNumerosImpares);
console.log('Total de números pares até agora:', totalNumerosPares);