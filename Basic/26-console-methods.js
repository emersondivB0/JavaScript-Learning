// Console Methods
//
// log
//
console.log("Este es el log normal.");

// error
//
console.error("Este es un error simple");
console.error("Este es un error. ", new Error("Fail!"));

// warn
//
console.warn("Esta es una advertencia");

// table
//
let data = [{ name: "Emerson" }, { age: 38 }];
console.table(data);

// Group
//
console.group("User");
console.log("Emerson");
console.log("dad 38");
console.groupEnd();

// time
//
console.time("Tiempo de ejecución");
let sum = 1;
for (let i = 0; i < 1000; i++) {
  sum = sum + (1 + i);
}
console.timeEnd("Tiempo de ejecución");
console.log(sum);

// assert
//
let age = 15;
console.assert(age >= 18, "Mayor de edad");

// count
//
console.count("Click");
console.countReset();

// trace
//
console.trace("Seguimiento de la ejecución.");

console.clear();
