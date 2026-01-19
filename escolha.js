const notaDoAluno = 8;

switch(notaDoAluno) {
    case 10:
    case 9:
        console.log("Excelente");
        break;
    case 8:
    case 7:
    case 6:
        console.log("Bom");
        break;
    case 5:
    case 4:
        console.log("Mediana");
        break;
    case 3:
    case 2:
    case 1:
    case 0:
        console.log("Reprovado");
        break;
    default:
        console.log("Nota inválida");
        break;
}