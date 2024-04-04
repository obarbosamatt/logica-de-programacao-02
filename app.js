// Podemos alterar os textos do HTML através do JavaScript
// Para isso, criamos uma variável = document.querySelector (dessa forma identificamos qual atributo do HTML queremos modifgicar)
// Com o .innerHTML atribuimos um valor à variavel, que modificará o HTML

let titulo = document.querySelector("h1");
titulo.innerHTML = "Jogo do numero secreto";

let paragrafo = document.querySelector("p");
paragrafo.innerHTML = "Escolha um numero entre 1 e 10";


// Criando funcoes - função é responsável por executar alguma ação dentro do nosso programa
function verificarChute() {
    console.log("o botao foi clicado");
}