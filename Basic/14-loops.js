// Loops
//
// For Loop
//
let array = [1, 2, 3, 4];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(`${element} Hola`);
}

let i = 0;
while (i < array.length) {
  console.log(`${array[i]} Hola`);
  i++;
}

i = 0;

do {
  console.log(`${array[i]} Hola`);
  i++;
} while (i < array.length);

let mySet = new Set(["Emerson", "uno", 3, 4.5, true]);

for (let item of mySet) {
  console.log(item);
}

let myMap = new Map([
  ["key", "value"],
  ["Emerson", "González"],
  ["email", "emerson.dvlmt@gmail.com"],
  ["age", 38],
]);

for (let values of myMap) {
  console.log(values);
}
