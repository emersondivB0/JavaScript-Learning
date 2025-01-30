// Functions
//
function greetings(name) {
  let myMap = new Map([
    ["español", "Hola!"],
    ["english", "Hello!"],
    ["deutsch", "Hallo!"],
    ["chinese", "Ni Hao!"],
    ["italiano", "Chao!"],
  ]);
  if (myMap.has(name)) {
    console.log(myMap.get(name));
  } else {
    console.log("Intente de nuevo!");
  }
}

greetings("deutsch");
greetings("frances");

// Anonymous Functions
//
const myFunc2 = function (name) {
  console.log(`Hello, ${name}`);
};
myFunc2("Emerson");

// Arrow Functions
//
const myFunc3 = (name) => console.log(`Hello ${name}`);

myFunc3("Emerson");

function defaultSum(a = 0, b = 0) {
  console.log(a + b);
}
defaultSum();
defaultSum(3);

let mult = (a = 1, b = 1) => {
  return a * b;
};
console.log(mult(6, 7));

let myArray = [1, 2, 3, 4, 5, 6];

myArray.forEach((value) => console.log(value));

//Pass function as an argument to another function

//array of names to be used in the function
const names = ["John", "Tina", "Kale", "Max"];

//Function using function fn as a parameter
function useFunction(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

//Function that is being used as a parameter
function argFn(name) {
  console.log("Hello " + name);
}

//calling useFunction() with argFn() as a parameter
useFunction(names, argFn);
