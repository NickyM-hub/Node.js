
function Pessoa(nome) { 

this.nome = nome; 

 

setTimeout(function() { 

console.log(this.nome); // Agora funciona! 

}.bind(this), 1000); 

} 

 

new Pessoa('Carlos'); // Resultado: Carlos 