// Destructuring
//
let myArray = [1, 2, 3, 4];
let [value1, value2] = myArray;
console.log(value1 + " and " + value2);

// CAn be initialized with 0 if theres no value
let [value3 = 0, value4 = 0, value5 = 0, value6 = 0, value7 = 0] = myArray;

console.log(value3);
console.log(value4);
console.log(value5);
console.log(value6);
console.log(value7);

// Objects syntax
//
let myObject = {
  name: "Emerson",
  age: 38,
  email: "emerson.dvlmt",
};

let { name1, age, email, tlf = "111222333" } = myObject;
console.log(name1);
console.log(age);
console.log(email);
console.log(tlf);

let { name: name2, age: age2, email: email2, tlf2 = "111222333" } = myObject;
console.log(name2);
console.log(age2);
console.log(email2);
console.log(tlf2);
