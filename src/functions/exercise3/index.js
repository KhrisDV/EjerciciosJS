function power(valor, potencia) {
  if (potencia === undefined) {
    resultado = valor ** (1 / 2);
  } else {
    resultado = valor ** potencia;
  }
  return resultado;
}

console.log(power(25));
console.log(power(8, 1 / 3));
console.log(power(2, 3));
console.log(power(5, 2));
