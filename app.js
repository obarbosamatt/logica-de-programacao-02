let numeroSecreto = gerarNumeroAleatorio();  //variavel sempre atribuida no inicio
let tentativas = 1;

// Podemos alterar os textos do HTML através do JavaScript
// Para isso, criamos uma variável = document.querySelector (dessa forma identificamos qual atributo do HTML queremos modifgicar)
// Com o .innerHTML atribuimos um valor à variavel, que modificará o HTML

        //  let titulo = document.querySelector("h1");
        //  titulo.innerHTML = "Jogo do numero secreto";
        //  
        //  let paragrafo = document.querySelector("p");
        //  paragrafo.innerHTML = "Escolha um numero entre 1 e 10";

// Criando funcoes - função é responsável por executar alguma ação dentro do nosso programa
// Funcoes tambem podem ser utilizadas para isolar um padrao de código, como as 4 linhas acima

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do numero secreto");
    exibirTextoNaTela("p", "Escolha um numero entre 1 e 10");
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;
    // console.log(chute == numeroSecreto);  //booleano - verdadeiro ou falso

    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O numero correto eh menor");
        } else {
            exibirTextoNaTela("p", "O numero secreto eh maior");
        }
        tentativas++;
        limparCampo();
    }

}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1); //return irá retornar o valor para ser salva na variavel descrita na linha 1
}

function limparCampo() {
    chute = document.querySelector("input");
        chute.value = " ";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}



///////// PRATICA AULA 02 ////////

//      //01
//      function exibirOla() {
//          console.log("Olá, mundo!");
//      }
//      
//      exibirOla();
//      
//      
//      //02
//      function exibirOlaNome(nome) {
//          console.log(`Olá, ${nome}!`);
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