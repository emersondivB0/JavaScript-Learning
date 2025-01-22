// if else

let age = 37;
if (age < 18) {
  console.log("Es menor de edad");
} else if (age == 37) {
  console.log("Tiene 37");
} else {
  console.log("Es mayor de edad");
}

// Ternary operator
//
const message = age == 37 ? "La edad es 37" : "La edad no es 37";
console.log(message);

// Switch
//
let day = 0;
let myDay;

switch (day) {
  case 0:
    myDay = "Domingo";
    break;
  case 1:
    myDay = "Lunes";
    break;
  case 2:
    myDay = "Martes";
    break;
  case 3:
    myDay = "Miércoles";
    break;
  case 4:
    myDay = "Jueves";
    break;
  case 5:
    myDay = "Viernes";
    break;
  case 6:
    myDay = "Sábado";
  default:
    break;
}

console.log(myDay);
