# Curso de Javascript

Curso para aprender Javascript desde cero, sólo haré anotaciones del lenguaje y su aplicación.

## Referencia

[W3School](https://www.w3schools.com/js/default.asp)

[Mouredev Community](https://www.mouredev-link/javascript)

[Guía de Estilo](https://github.com/paolocarrasco/javascript-style-guide)

## Recursos

Se necesita un navegador web, un entorno de ejecución de JS, puede ser un playground online, se necesita tener Node.js instalado y se necesita un editor de código.

## Basics

Para empezar, la forma más simple de mostrar información en la consola es con el comando `console`:

```javascript
console.log("Hello World!");
```

Los strings (texto) pueden (y deben) escribirse entre dobles comillas, comillas simples o comillas hacia atrás, siempre y cuando sean dobles:

```javascript
console.log("Mensaje 1");
console.log("Mensaje 2");
console.log(`Mensaje 3`);
```

Se pueden realizar operaciones aritméticas simples desde `console.log`.

### Variables

El nombre de la variable debe ser descriptivo, se debe usar el 'lower camel case'.

Hay tres formas de declarar variables, con `var`, `let` y `const`.

`var` es la primera forma de crear variables que se usaron en el lenguaje, indica que la variable es literalmente variable,
