// Error Handing
//
// Exception
//
let myObject;
// console.log(myObject.email);   This produce an exception.
//
// Try Catch
//
try {
  console.log(myObject.email);
  console.log("Sin errores");
} catch {
  console.log("Se ha producido un error");
}

try {
  console.log(myObject.email);
  console.log("Sin errores");
} catch (error) {
  console.log("Se ha producido un error", error.message);
}

try {
  console.log(myObject.email);
  console.log("Sin errores");
} catch {
  console.log("Se ha producido un error");
} finally {
  console.log("Este código se ejecuta siempre");
}

// Throw an Error
//
function sum(a = 0, b = 0) {
  console.log(typeof a);
  if (typeof a == "number" && typeof b == "number") {
    return a + b;
  }
  throw new Error("Sólo se aceptan números");
}

// throw new Error("Se ha producido un error!");
try {
  console.log("1", 3);
  //  console.log(sum(2, 3));
} catch (error) {
  console.log("Se ha producido un error", error.message);
}

// Catch Several Errors
//
try {
  console.log(sum(1, b));
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Error tipo: ", error.message);
  } else if (error instanceof Error) {
    console.log("Error tipo: ", error.message);
  }
}

// Personalized Exceptions
//
class MyCustomError extends Error {
  constructor(a, b) {
    super(message);
    this.a = a;
    this.b = b;
  }

  printNumbers() {
    console.log(this.a + " + " + this.b);
  }
}

try {
  console.log(sum(s, 10));
} catch (error) {
  console.log("Error: ", error.message);
  error.printNumbers();
}
