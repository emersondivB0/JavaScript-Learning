# JavaScript Course

Course to learn JavaScript from zero, I only taking notes about the
language and applications.

## Table of Contents

- [JavaScript Course](#javascript-course)
  - [Table of Contents](#table-of-contents)
  - [References](#references)
  - [Resources](#resources)
  - [Basics](#basics)
    - [Variables](#variables)
    - [Data Types](#data-types)
      - [Primitives](#primitives)
      - [Strings](#strings)
        - [Strings methods](#strings-methods)
    - [Operators](#operators)
      - [Arithmetic Operators](#arithmetic-operators)
      - [Assignment Operators](#assignment-operators)
      - [Comparisons Operators](#comparisons-operators)
        - [Truth values](#truth-values)
        - [False values](#false-values)
      - [Logical Operators](#logical-operators)
    - [Conditionals](#conditionals)
      - [If Else](#if-else)
      - [Ternary](#ternary)
      - [Switch](#switch)
    - [Data Structures](#data-structures)
      - [Arrays](#arrays)
        - [Arrays Methods](#arrays-methods)
      - [Sets](#sets)
        - [Sets Methods](#sets-methods)
      - [Maps](#maps)
        - [Maps Methods](#maps-methods)
    - [Loops](#loops)
      - [For Loop](#for-loop)
      - [While Loop](#while-loop)
      - [Do While Loop](#do-while-loop)
      - [For Of Loop](#for-of-loop)
    - [Functions](#functions)
      - [Anonymous Fuctions](#anonymous-fuctions)
      - [Arrow Functions](#arrow-functions)
      - [Higher-Order Functions](#higher-order-functions)
    - [Objects](#objects)
      - [Propagation (...)](<#propagation-(...)>)
    - [Classes](#classes)
      - [Inheritance](#inheritance)
      - [Static Methods](#static-methods)
    - [Console](#console)

## References

[W3School](https://www.w3schools.com/js/default.asp)

[Mouredev Community](https://www.mouredev-link/javascript)

[Guía de Estilo (Spanish)](https://github.com/paolocarrasco/javascript-style-guide)

## Resources

- Web browser.
- Node.js installed.
- A code editor like Neovim, VSCode, Zed, etc.
- An online playground in case you haven't an editor.

## Basics

To start, the simplest form to show information in the console
is with the `console` command:

```javascript
console.log("Hello World!");
```

String (text) can (and should) be written between double quotes,
single quotes and backwards quotes, always the same to open and close:

```javascript
console.log("Mensaje 1");
console.log("Mensaje 2");
console.log(`Mensaje 3`);
```

You can compute basic arithmetic operations from `console.log`.

### Variables

The names of variables must be descriptive. The way to name it
should be 'lower camel case'.

There are 3 ways of declare variables, with `var`, `let` and `const`.

`var` is the first form to declare variables to be used with the language,
it means literally a variable. Right now this isn't the best way to declare
variables. Can be used globally.

`let` is a form to declare variables in a scope.

`const` variables are constant, cannot change its value. If the data is
a reference like an array, it can be changed.

### Data Types

You can check the type of any data with the function `typeof`.

#### Primitives

| Data Type | Description                             |
| --------- | --------------------------------------- |
| Strings   | A string of chars                       |
| Number    | Integer and float point                 |
| Boolean   | Can be `true` or `false`                |
| Undefined | To declare a variable without any value |
| Null      | Value null, absense of value            |
| Symbol    | To create an unique value in variable   |
| BigInt    | A large integer                         |

#### Strings

Strings can be concatenated with the `+` operator.

You can create a multi line text with backwards quotes.

To interpolate a variable, must be between backwards quotes and call it like this:

```javascript
let myVariable = "String";
console.log(`This is a new ${myVariable}!`);
```

##### Strings methods

| Method                 | Description                                       |
| ---------------------- | ------------------------------------------------- |
| length                 | Get the length of a string                        |
| indexOf("string/char") | Get the index where the string or the char starts |
| toUpperCase()          | Convert all the string to upper case              |
| toLowerCase()          | Convert all the string to lower case              |
| includes(string/char)  | Check if the string/char is in the main string    |
| slice(a, b)            | Truncate the string between index a and b         |
| replace(A, B)          | Replace the string A with the string B            |

### Operators

#### Arithmetic Operators

| Operator | Definition   |
| -------- | ------------ |
| `+`      | Addition     |
| `-`      | Substraction |
| `*`      | Multiply     |
| `/`      | Divide       |
| `%`      | Module       |
| `**`     | Power        |
| `++`     | Increment    |
| `--`     | Decrement    |

#### Assignment Operators

| Operator | Example   | Same As      |
| -------- | --------- | ------------ |
| =        | x = y     | x = y        |
| +=       | x += y    | x = x + y    |
| -=       | x -= y    | x = x - y    |
| \*=      | x \*= y   | x = x \* y   |
| /=       | x /= y    | x = x / y    |
| %=       | x %= y    | x = x % y    |
| \*\*=    | x \*\*= y | x = x \*\* y |

#### Comparisons Operators

Given that x = 5, the table below explains the comparison operators:

| Operator | Description                       | Comparing   | Returns |
| -------- | --------------------------------- | ----------- | ------- |
| =\=      | equal to                          | x =\= 8     | false   |
|          |                                   | x = 5       | true    |
|          |                                   | x = "5"     | true    |
| =\=\=    | equal value and equal type        | x =\=\= 5   | true    |
|          |                                   | x =\=\= "5" | false   |
| !=       | not equal                         | x != 8      | true    |
| !=\=     | not equal value or not equal type | x !=\= 5    | false   |
|          |                                   | x !=\= "5"  | true    |
|          |                                   | x !=\= 8    | true    |
| >        | greater than                      | x > 8       | false   |
| <        | less than                         | x < 8       | true    |
| >=       | greater than or equal to          | x >= 8      | false   |
| <=       | less than or equal to             | x <= 8      | true    |

##### Truth values

All the positive and negative number except the zero are `true`.
All the non empty strings are `true`.
Boolean `true`.

##### False values

Zero, zero BigInt, null, undefined, NaN, the boolean `false` and
every empty strings are `false`.

#### Logical Operators

| Operator | Description |
| -------- | ----------- |
| &&       | logical and |
| \|\|     | logical or  |
| !        | logical not |

### Conditionals

#### If Else

```javascript
if (condition1) {
  // Code
} else if (condition2) {
  // Code
} else {
  // Code
}
```

#### Ternary

```javascript
let variable = condition ? caseA : caseB;
```

#### Switch

```javascript
switch (variable) {
  case value1:
  // Code
  case value2:
  // Code
  case valuen:
  // Code
}
```

### Data Structures

#### Arrays

There's two ways to create arrays. Declaring the array empty or with elements between square brackets. Declaring an object Array with the size or the elements:

```javascript
let array1 = [];
let array2 = ["a", 1, true];
let array3 = new Array();
let array4 = new Array(3);
let array5 = new Array("a", 1, true);
```

##### Arrays Methods

| Method                | Description                                         |
| --------------------- | --------------------------------------------------- |
| push(element)         | Insert an element in the last position of the array |
| pop()                 | Delete the last element in the array                |
| unshift(elements)     | Add elements to the start of the array              |
| shift()               | Delete the first element of the array               |
| length                | Length of the array                                 |
| slice(a, b)           | Truncate the array to the index a and b (excluded)  |
| splice(a, b, element) | Reemplace items between a and b with the element    |

#### Sets

A set cannot have duplicated items.

Set doesn't index with numbers, it index with hash.

To initialize an empty set, first of all, always use `new` statement.

```javascript
let newSet = new Set();
```

To initialize with values, they must be between brackets:

```javascript
let newSet = new Set(["item1", "item2", "item3"]);
```

##### Sets Methods

| Method          | Description                                     |
| --------------- | ----------------------------------------------- |
| add(item)       | Add an item to the end of the Set               |
| delete(item)    | Delete the item, must be the same value         |
| has(item)       | Search an item in the Set and returns a boolean |
| size            | Get the size of the Set                         |
| Array.from(Set) | Convert a set in an array                       |

#### Maps

Each element is componed by a key and a value.

It Initialize by two ways, empty or valued.

```javascript
let myMap = new Map();
let myMap2 = new Map([
  [ke1 : value1],
  [key2 : value2],
  [key3 : value3],
])
```

##### Maps Methods

| Method            | Description                                        |
| ----------------- | -------------------------------------------------- |
| .set(key : value) | Add a new pair key/value or modify and exist       |
| .get(key)         | Get the value of the given key                     |
| .has(key)         | Check for the key and return a boolean if it exist |
| .delete(key)      | Delete the pair of the given key                   |
| .keys()           | Return the list of keys                            |
| .values()         | Retunr the list of values                          |
| .size             | Return the size of the map (int)                   |

### Loops

#### For Loop

```javascript
for (let index = 0; condition; index++) {
  //Code
}
```

#### While Loop

```javascript
while (condition) {
  // Code
}
```

#### Do While Loop

```javascript
do {
  // Code
} while (condition);
```

#### For Of Loop

This is to iterate on arrays, sets, maps, strings.

```javascript
let myArray = new Array(n);
for (let item of myArray) {
  // Code
}
```

### Functions

Is a code block that can be called to execute an specific task.

```javascript
function myFunction() {
  // Code
}

myFunction();
```

A function could have parameters.

```javascript
function myFunction(a,b,c,d,...) {
  console.log(a + b + c + d + ...)
}
```

#### Anonymous Fuctions

Anonymous functions are functions without name, can be invoked directly, but must be assigned to a variable.

```javascript
const myFunction2 = function (param) {
  console.log(`Hello ${param}`);
};
myFunction2("param");
```

#### Arrow Functions

Arrow functions are mostly like Anonymous functions, must be assigned to a constant in order to use it, can have parameters or not.

```javascript
const myFunc3 = (param) => {
  // Code
};
// If the code is just one line:
const myFunc4 = (
  param, // Code line ;
) => myFunc3(param);
myFunc4(param);
```

#### Higher-Order Functions

These are functions that receive another functions as arguments.

```javascript
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

/*Result printed:
   Hello John
   Hello Tina
   Hello Kale
   Hello Max
*/
```

### Objects

Everything out of the primitive data type is an object.

An object, like the map, could be initialize with pairs of values, can be accesed through the dot notation, also with brackets notation. The values can be changed (reassigned). To compare, should ve each value. Objects can be nested. Can be assigned with a function as a value. Can be iterated with for-in. To access iterated key should be with brackets. Inside a function (internal) you can referentiate any propertie with the word `this.`.

```javascript
let myObject = {
  item1: "item1",
  item2: "item2",
  item3: 1,
  item4: true,
  myFunc: function () {
    console.log(`Function of ${this.item1}`);
  },
  myObject2: {
    item5: "item5",
    number: 2,
  },
};
```

#### Propagation (...)

```javascript
// With arrays
let myArray2 = [...myArray];
let myArray3 = [...myArray, a, b];
let myArray4 = [...myArray2, ...myArray3];

// With Objects
let myObject2 = [...myObject1, key: value];
```

### Classes

A class is a blueprint of an object. Is the best way to create an object, by default.

To instantiate a class must declare a constructor to set and get the properties.
Properties can be declared with a default value, also properties can be private to get access only inside the class.

```javascript
class MyClass {
  // To declare a private property must use #
  #prop3;
  constructor(prop1 = "default", prop2, prop3) {
    this.prop1 = prop1;
    this.prop2 = prop2;
    this.#prop3 = prop3;
  }

  // To use the private prop in a method should use # too
  method() {
    this.#prop3;
  }
}

// Instantiate

let myObjet = new MyClass("prop1", "prop2", "prop3");
// access one public property
console.log(myObject.prop1);
// Access to a method
myObject.method();
```

#### Inheritance

The main purpose of inheritance is to inherit the behavior of a class.

```javascript
class MyClass1 {
  constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
  }

  method1() {
    console.log("method 1");
  }
}

class MyClass2 extends MyClass1 {
  constructor(prop1, prop3) {
    super(prop1);
    this.prop3 = prop3;
  }
}

let newObject = new MyClass2(prop1, prop3);
newObject.method1();
```

#### Static Methods

This kind of methods can be called without instantiate the class.

```javascript
class MyClassStatic {
  static staticMethod(prop1, prop2) {
    console.log("This method can be called directly through the class");
  }
}

MyClassStatic.staticMethod(prop1, prop2);
```

### Console

| Method                         | Description                                         |
| ------------------------------ | --------------------------------------------------- |
| .log()                         | Show messages in console.                           |
| .error()                       | Show errors in console.                             |
| .warn                          | Show a warning in console.                          |
| .info()                        | Show a simple message in console.                   |
| .table(data)                   | Show the data given in table format.                |
| .group(head)                   | Open a group of data showed.                        |
| .groupEnd()                    | Close the group.                                    |
| .time("Message")               | Open an execution time medition.                    |
| .timeEnd("Message")            | Closes the execution time medition block            |
| .assert(condition, "Message"); | Shows exception with message if condition is false. |
| .count("label")                | Number of times it has been called with that label  |
| .countReset()                  | Reset the counter.                                  |
| .trace()                       | Make a trae of the code executed.                   |
| .clear()                       | Clean the console.                                  |
