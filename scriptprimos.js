//Pegue os mesmos 10 números do exercício anterior e mostre no console apenas os números primos.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function isPrimo(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
let primos = numeros.filter(isPrimo);
console.log("Números primos: " + primos.join(", "));