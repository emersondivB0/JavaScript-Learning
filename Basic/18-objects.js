// Objects
//
// Syntax
//
let person = {
  name: "Emerson",
  age: 38,
  email: "emerson.dvlmt@gmail.com",
  active: true,
};

console.log(person.name);
console.log(person["age"]);
person.age = "38";
person.tlf = "123456789";
console.log(person);
delete person.tlf;
console.log(person);

person.walk = function () {
  console.log("Este camina");
};
console.log(person);
person.walk();

let person1 = {
  name: "Emerson",
  age: 38,
  email: "emerson.dvlmt@gmail.com",
  walk: function () {
    console.log("Este camina");
  },
  job: {
    active: true,
    exp: 3,
    lang: "Java",
    work: function () {
      console.log(`Este trabaja con ${this.lang}`);
    },
  },
};

console.log(person1);
console.log(person1.job.exp);
person1.job.work();
