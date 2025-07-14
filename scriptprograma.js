//Crie uma função que receba um valor N e descubra qual é o N-ésimo termo da série Fibonacci.

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  
  let a = 0, b = 1, c;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}
//Exemplo de retorno: descobrir o 9º termo da série Fibonacci
let resultado = fibonacci(9);
console.log("O 9º termo da série Fibonacci é: " , resultado);