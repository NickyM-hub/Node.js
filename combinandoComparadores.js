const idade = 17;

const possuiCNH = true;

const maiorDeIdade = idade >= 18;

const podeDirigir = maiorDeIdade && possuiCNH; //AND
console.log("Pode dirigir:", podeDirigir);

const podeViajarSozinho = maiorDeIdade || possuiCNH; //OR
console.log("Pode viajar sozinho:", podeViajarSozinho);

const precisaDeAcompanhante = !maiorDeIdade; //NOT
console.log("Precisa de acompanhante:", precisaDeAcompanhante);