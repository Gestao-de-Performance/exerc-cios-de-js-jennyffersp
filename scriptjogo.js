//Crie um jogo de par ou impar.

function jogarParOuImpar() {    

let numeroUsuario = parseInt(prompt("Digite um número:"));
let numeroComputador = Math.floor(Math.random() * 10) + 1;  
let escolhaUsuario = prompt("Escolha 'par' ou 'impar':").toLowerCase();
let soma = numeroUsuario + numeroComputador;
let resultado = soma % 2 === 0 ? "par" : "impar";
if (escolhaUsuario === resultado) {
  console.log(`Você escolheu ${escolhaUsuario} e o número do computador foi ${numeroComputador}. A soma é ${soma}, que é ${resultado}. Você ganhou!`);
} else {
  console.log(`Você escolheu ${escolhaUsuario} e o número do computador foi ${numeroComputador}. A soma é ${soma}, que é ${resultado}. Você perdeu!`);
 }
}