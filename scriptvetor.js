// Crie um vetor contendo 10 números e faça a média de todos os valores.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function calcularMedia(array) {
  let soma = array.reduce((acc, num) => acc + num, 0);
  return soma / array.length;
}
let media = calcularMedia(numeros);
console.log("A média é: " + media);