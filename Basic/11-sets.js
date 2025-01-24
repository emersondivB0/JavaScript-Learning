// Sets
//
// Initialize
//
let mySet = new Set();
let mySet2 = {}; // This is not a Set.

console.log(mySet);
console.log(mySet2);

mySet = new Set(["Emerson", "tres", 34, true, 55.9, "element1", "item1"]);
console.log(mySet);

mySet.add("uno");
console.log(mySet);

mySet.delete("uno");
console.log(mySet);

// Has
//
console.log(mySet.has("Emerson"));

// Size
//
console.log(mySet.size);

// Convert Set to Array
//
let myArray = Array.from(mySet);
console.log(myArray);
