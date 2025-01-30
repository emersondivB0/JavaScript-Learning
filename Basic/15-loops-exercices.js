/*
 * 1. Crea un bucle que imprima todos los números pares entre el 1 y el 50.
 * 2. Escribe un bucle que cuente el número de vocales en una cadena de texto.
 * 3. Usa un bucle para invertir una cadena de texto.
 * 4. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci.
 * 5. Dado un array de números, crea otro array con los números pares.
 */

// 1
//
let array1 = [];
for (let i = 0; i <= 50; i++) {
  if (i % 2 == 0) {
    array1.push(i);
  }
}
console.log(array1);

// 2
//
let string1 = "Murcielago africano";
let counter = 0;
for (let char of string1) {
  if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
    counter++;
  }
}
console.log(`La cantidad de vocales es: ${counter}`);
