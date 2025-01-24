// Arrays
//
let myArray = [];
let myArray2 = new Array();
console.log(myArray);
console.log(myArray2);

myArray = [3];
myArray2 = new Array(3);
console.log(myArray);
console.log(myArray2);

myArray = [1, 2, 3, 4];
myArray2 = new Array(1, 2, 3, 4);
console.log(myArray);
console.log(myArray2);

myArray = ["Juán", 2, "arrange", true];
myArray2 = new Array("Juán", 2, "arrange", true);
console.log(myArray);
console.log(myArray2);

myArray[0] = "Emerson";
myArray2[0] = "Emerson";
console.log(myArray);
console.log(myArray2);

// Methods
//
myArray = [];

myArray.push("Emerson");
myArray.push("tres");
myArray.push(34);
myArray.push(true);
myArray.push(55.9);
myArray.push("element1");
myArray.push("item1");
console.log(myArray);

myArray.pop();
myArray.pop();
console.log(myArray);

myArray.unshift("creature", "dos");
console.log(myArray);
myArray.shift();
console.log(myArray);

// Length
//
console.log(myArray.length);

// Clear array
//
myArray1 = [];
myArray1.length = 0; //alternative

// Slice
//
let newArray = myArray.slice(1, 4);
console.log(newArray);

// Splice
//
myArray.splice(0, 1, "uno");
console.log(myArray);
