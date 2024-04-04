// Podemos alterar os textos do HTML atrav�s do JavaScript
// Para isso, criamos uma vari�vel = document.querySelector (dessa forma identificamos qual atributo do HTML queremos modifgicar)
// Com o .innerHTML atribuimos um valor � variavel, que modificar� o HTML

let titulo = document.querySelector("h1");
titulo.innerHTML = "Jogo do numero secreto";

let paragrafo = document.querySelector("p");
paragrafo.innerHTML = "Escolha um numero entre 1 e 10";


// Criando funcoes - fun��o � respons�vel por executar alguma a��o dentro do nosso programa
function verificarChute() {
    console.log("o botao foi clicado");
}