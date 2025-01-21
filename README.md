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
