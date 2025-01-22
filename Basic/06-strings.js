// Strings
//
let myName = "Emerson";
let greetings = "Hello, " + myName + "!";
console.log(greetings);
console.log(typeof greetings);

// Length
//
console.log(greetings.length);

// Access to a character
//
console.log(greetings[2]);

console.log(greetings.toUpperCase());
console.log(greetings.toLowerCase());
console.log(greetings.indexOf("Emerson"));
console.log(greetings.indexOf("of"));
console.log(greetings.includes("Emerson"));
console.log(greetings.includes("of"));
console.log(greetings.slice(3, 7));
console.log(greetings.replace("Hello", "Hallo"));

// Template Literals
//
let myMessage = `This is my
first serious 
approach to 
learn JavaScript.`;
console.log(myMessage);

// Variable interpolation
//
console.log(`Hola, ${myName}!`);
