'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `You are millenial, ${firstName}`;
      console.log(str);
    }
  }

  printAge();
  return age;
}

const firstName = 'Nikola';
calcAge(1992);
*/
/*96
//Variables
console.log(me);
//console.log(job);
//console.log(year);

var me = 'Nikola';
let job = 'Tester';
const year = 1997;

//Examples

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!!');
}

var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x);
*/

//console.log(this);

/*97
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  //console.log(this);
};

calcAge(1997);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1990);

const nikola = {
  year: 1997,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

nikola.calcAge();

const person1 = {
  year: 2010,
};

person1.calcAge = nikola.calcAge;
person1.calcAge();

const f = nikola.calcAge;
f();
*/

/*98
const nikola = {
  firstName: 'Nikola',
  year: 1997,
  calcAge: function () {
    //console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    /*const self = this; // self or that
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
nikola.greet();
nikola.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5);
*/

/* 99
let age = 23;
let oldAge = age;
age = 24;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Nikola',
  age: 23,
};
const friend = me;
friend.age = 30;
console.log('Me', me);
console.log('Friend', friend);
*/

// Primitive types
let lastName = 'Svigir';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

//Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['ALice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log(jessica2, jessicaCopy);
