# JavaScript Course

Course to learn JavaScript from zero, I only taking notes about the
language and applications.

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
| `=\=\=`  | equal value and equal type        | x =\=\= 5   | true    |
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

##### Methods

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

##### Methods

| Method          | Description                                     |
| --------------- | ----------------------------------------------- |
| add(item)       | Add an item to the end of the Set               |
| delete(item)    | Delete the item, must be the same value         |
| has(item)       | Search an item in the Set and returns a boolean |
| size            | Get the size of the Set                         |
| Array.from(Set) | Convert a set in an array                       |

#### Maps

Each element is componed by a key and a value
