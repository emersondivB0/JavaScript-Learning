/*
 * 1. Imprime por consola tu nombre si una variable toma su valor.
 * 2. Imprime un mensaje si el usuario y contraseña coincide con unos establecidos.
 * 3. Verifica si un número es positivo, negativo o cero.
 * 4. Verifica si una persona puede votar o no e indica cuántos años le faltan si no.
 * 5. Una ternario para asigna 'adulto' o 'menor' a una variable dependiendo de la edad.
 * 6. Muestra en qué estación nos encontramos dependiendo del 'mes'.
 * 7. Muestra el número de días que tiene un mes dependiendo de 'mes'.
 * 8. Usa un switch para imprimir un mensaje de saludo dependiendo del idioma.
 * 9. Usa switch para hacer el ejercicio 6.
 * 10. Us switch para hacer el ejercicio 7.
 */

// 1
let isMyName = "José";
if (isMyName == "Emerson") {
  console.log("Eres Emerson.");
} else {
  console.log("No eres Emerson.");
}

// 2
let user = "emerson";
let pass = "1234";
if (user == "emerson" && pass == "1234") {
  console.log("Tienes acceso.");
} else {
  console.log("No tienes acceso.");
}

// 3
let numero = 4;
if (numero < 0) {
  console.log("El número es negativo.");
} else if (numero == 0) {
  console.log("El número es cero.");
} else {
  console.log("El número es positivo.");
}

// 4
let edadVotante = 15;
if (edadVotante < 18) {
  console.log("No puedes votar, te faltan " + (18 - edadVotante) + " años.");
} else {
  console.log("Puedes votar.");
}

// 5
let age = edadVotante < 18 ? "menor" : "adulto";

// 6
let mes = "septiembre";
if (mes == "diciembre" || mes == "enero" || mes == "febrero") {
  console.log("Verano");
} else if (mes == "marzo" || mes == "abril" || mes == "mayo") {
  console.log("Otoño");
} else if (mes == "junio" || mes == "julio" || mes == "agosto") {
  console.log("Invierno");
} else if (mes == "septiembre" || mes == "octubre" || mes == "noviembre") {
  console.log("Primavera");
} else {
  console.log("Imgrese un mes válido.");
}

// 7
if (
  mes == "enero" ||
  mes == "marzo" ||
  mes == "mayo" ||
  mes == "julio" ||
  mes == "agosto" ||
  mes == "octubre" ||
  mes == "diciembre"
) {
  console.log("Tiene 31 días");
} else if (
  mes == "junio" ||
  mes == "abril" ||
  mes == "septiembre" ||
  mes == "noviembre"
) {
  console.log("Tiene 30 días");
} else if (mes == "febrero") {
  console.log("Tiene 28 días");
} else {
  console.log("Imgrese un mes válido.");
}

// 8
let idioma = "deutsch";

switch (idioma) {
  case "español":
    console.log("Hola");
    break;
  case "english":
    console.log("Hello");
    break;
  case "deutsch":
    console.log("Hallo");
    break;
  default:
    console.log("Hi!");
    break;
}

// 9
switch (mes) {
  case "diciembre":
  case "enero":
  case "febrero":
    console.log("Verano");
    break;
  case "marzo":
  case "abril":
  case "mayo":
    console.log("Otoño");
    break;
  case "junio":
  case "julio":
  case "agosto":
    console.log("Invierno");
    break;
  case "septiembre":
  case "octubre":
  case "noviembre":
    console.log("Primavera");
    break;
  default:
    console.log("Ingrese un mes válido");
    break;
}
