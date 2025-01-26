// Map
//
// Declare
//
let myMap = new Map();

// initialize
//
myMap = new Map([
  ["key", "value"],
  ["Emerson", "González"],
  ["email", "emerson.dvlmt@gmail.com"],
  ["age", 38],
]);
console.log(myMap);

// Methods and properties
//
myMap.set("alias", "Huzhao");

console.log(myMap);
console.log(myMap.get("email"));
console.log(myMap.has("age"));
myMap.delete("alias");
console.log(myMap);
console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.entries());
console.log(myMap.size);
