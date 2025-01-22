/*
 * 1. Concatena dos cadenas de texto.
 * 2. Muestra la longitud de una cadena de texto.
 * 3. Muestra el primer y último carácter de un string.
 * 4. Convierte a mayúsculas y minúsculas un string.
 * 5. Crea una cadena de texto en varias líneas.
 * 6. Interpola el valor de una variable en un string.
 * 7. Reemplaza todos los espacios en blanco de un string por guiones.
 * 8. Comprueba si una cadena de texto contiene una palabra concreta.
 * 9. Comprueba si dos strings son iguales.
 * 10. Comprueba si dos strings tienen la misma longitud.
 */

let cadena1 = "Estos son ";
let cadena2 = cadena1 + "los ejercicios.";
console.log(
  "La cadena unida es:" + cadena2 + " Y su longitud es: " + cadena2.length,
);
console.log(
  "El primer caracter es: " +
    cadena2[0] +
    ", y el último caracte es: " +
    cadena2[24],
);

console.log(cadena2.toUpperCase());
console.log(cadena2.toLowerCase());

let cadena3 = `Esta es 
una cadena 
de texto de 
varias líneas`;

console.log(`Esto demuestra que: ${cadena3}.`);

console.log(cadena2.replaceAll(" ", "-"));
console.log(cadena2.includes("perro"));
console.log("Las dos cadenas son iguales: " + cadena1 == cadena2);
console.log(
  "Las dos cadenas son del mismo tamaño: " + cadena1.length == cadena2.length,
);
