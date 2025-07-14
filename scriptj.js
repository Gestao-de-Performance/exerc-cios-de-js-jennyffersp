//Crie um jogo de par ou impar.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function jogarParOuImpar() {
  rl.question("Digite um número entre 1 e 10: ", (numeroUsuario) => {
    numeroUsuario = parseInt(numeroUsuario);

    rl.question("Escolha 'par' ou 'impar': ", (escolhaUsuario) => {
      escolhaUsuario = escolhaUsuario.toLowerCase();
      let numeroComputador = Math.floor(Math.random() * 10) + 1;
      let soma = numeroUsuario + numeroComputador;
      let resultado = soma % 2 === 0 ? "par" : "impar";

      console.log(`Você escolheu ${escolhaUsuario} e o número do computador foi ${numeroComputador}.`);
      console.log(`A soma é ${soma}, que é ${resultado}.`);

      if (escolhaUsuario === resultado) {
        console.log("Você ganhou!");
      } else {
        console.log("Você perdeu!");
      }

      rl.close();
    });
  });
}