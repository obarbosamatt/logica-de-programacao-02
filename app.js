let numeroSecreto = gerarNumeroAleatorio();  //variavel sempre atribuida no inicio

// Podemos alterar os textos do HTML atrav�s do JavaScript
// Para isso, criamos uma vari�vel = document.querySelector (dessa forma identificamos qual atributo do HTML queremos modifgicar)
// Com o .innerHTML atribuimos um valor � variavel, que modificar� o HTML

        //  let titulo = document.querySelector("h1");
        //  titulo.innerHTML = "Jogo do numero secreto";
        //  
        //  let paragrafo = document.querySelector("p");
        //  paragrafo.innerHTML = "Escolha um numero entre 1 e 10";

// Criando funcoes - fun��o � respons�vel por executar alguma a��o dentro do nosso programa
// Funcoes tambem podem ser utilizadas para isolar um padrao de c�digo, como as 4 linhas acima

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do numero secreto");
exibirTextoNaTela("p", "Escolha um numero entre 1 e 10");

function verificarChute() {
    let chute = document.querySelector("input").value;
    console.log(chute == numeroSecreto);  //booleano - verdadeiro ou falso
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1); //return ir� retornar o valor para ser salva na variavel descrita na linha 1
}


///////// PRATICA AULA 02 ////////

//      //01
//      function exibirOla() {
//          console.log("Ol�, mundo!");
//      }
//      
//      exibirOla();
//      
//      
//      //02
//      function exibirOlaNome(nome) {
//          console.log(`Ol�, ${nome}!`);
//      }
//      
//      exibirOlaNome("Alice");
//      
//      
//      //03
//      function calcularDobro(numero) {
//          return numero * 2;
//      }
//      
//      let resultadoDobro = calcularDobro(5);
//      console.log(resultadoDobro);
//      
//      //04
//      function calcularMedia(a, b, c) {
//          return (a + b + c) / 3;
//      }
//      
//      let media = calcularMedia(4, 7, 10);
//      console.log(media);
//      
//      
//      
//      //05
//      function encontrarMaior(a, b) {
//          return a > b ? a : b;
//      }
//      
//      let maiorNumero = encontrarMaior(15, 9);
//      console.log(maiorNumero);
//      
//      
//      
//      //06
//      function quadrado(numero) {
//          return numero * numero;
//      }
//      
//      let resultado = quadrado(2);
//      console.log(resultado); 