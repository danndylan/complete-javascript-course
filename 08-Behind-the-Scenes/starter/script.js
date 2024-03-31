'use strict';
/**
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(2024 - this.year);

    console.log(this);
  },
};

jonas.calcAge();

const dylan = {
  year: 2017,
};

dylan.calcAge = jonas.calcAge;
dylan.calcAge();

var firstName = 'Global var';

const dylan = {
  firstName: 'Dylan',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    //Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};

dylan.greet();
dylan.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);

 */

let age = 30;
let oldAge = age;
age = 31;
console.log(age, oldAge);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const jessica2 = Object.assign({}, jessica);
console.log(jessica);
console.log(jessica2);
