// Classes
//

class Person {
  constructor(name, age, alias) {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
}

let person = new Person("Emerson", 38, "emersondivB0");
console.log(person);

class DefaultPerson {
  #bank;
  constructor(name = "Nombre", age = 0, alias = "desconocido", bank = 0) {
    this.name = name;
    this.age = age;
    this.alias = alias;
    this.#bank = bank;
  }

  walk() {
    console.log("La persona camina");
  }

  set bank(newBank) {
    this.#bank = newBank;
  }
}
// Access to properties
//
console.log(person.name);

let person2 = new DefaultPerson("Elijah", 5, "chamito", 123123123);
person2.walk();

// Inheritance
//

class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log("Emite sonido!");
  }
}

class Dog extends Animal {
  run() {
    console.log("Corre!");
  }
}

class Fish extends Animal {
  constructor(name, size) {
    super(name);
    this.size = size;
  }

  swim() {
    console.log("Nada!");
  }
}

let newDog = new Dog("Artax");

newDog.sound();

let newFish = new Fish("Beta", 4);
newFish.swim();

// Static Methods
//
class MathOperations {
  static sum(a, b) {
    return a + b;
  }
}

console.log(MathOperations.sum(4, 5));
