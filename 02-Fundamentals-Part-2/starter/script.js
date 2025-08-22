'use strict'; ///////////// // Function expression /////////////// //////////
/* 
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

const interface = 'Audio';

*/

/*
function logger() {
  console.log('My name is nikola');
}

// calling /running / invoking function
logger();
logger();
logger();



function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const aplleOrangeJuice = fruitProcessor(3, 4);
console.log(aplleOrangeJuice);

const num = Number('23');
console.log('Number is ', num);
console.log(`Number is ${num}`);
*/

/*
// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1997);
console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1997);
console.log(age2);

*/

/*
//arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1997);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement}`;
};

console.log(yearsUntilRetirement(1997, 'Nikola'));
console.log(yearsUntilRetirement(1991, 'Bob'));
*/

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
*/

/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has alredy retired.`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1997, 'Nikola'));
console.log(yearsUntilRetirement(1970, 'MIke'));
*/
/*
const friend1 = 'Djuro';
const friend2 = 'Pero';
const friend3 = 'Marko';
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Nikola';
const nikola = [firstName, 'Švigir', 2037 - 1997, 'Student', friends];
console.log(nikola);
console.log(nikola.length);

//Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

/*
const friends = ['Michael', 'Steven', 'Peter'];
//add elements
const newLenght = friends.push('Jay');
console.log(friends);
console.log(newLenght);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); //last element
const popped = friends.pop(); //last element
console.log(friends);
console.log(popped);

friends.shift(); //first
console.log(friends);

console.log(friends.indexOf('Steven'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
*/
/*
const nikola = {
  firstName: 'Nikola',
  lastName: 'Švigir',
  age: 2037 - 1991,
  job: 'Student',
  friends: ['Mich', 'Bobo', 'Luka'],
};
console.log(nikola);

console.log(nikola.lastName);
console.log(nikola['lastName']);

const nameKey = 'Name';
console.log(nikola['first' + nameKey]);
console.log(nikola['last' + nameKey]);

//doesnt work
//console.log(nikola.'last' + nameKey);

const interestedIn = prompt(
  'What do you want to know about Nikola? Choose beterrn firstName, lastName, age, job, and friends'
);

if (nikola[interestedIn]) {
  console.log(nikola[interestedIn]);
} else {
  console.log('Wrong request');
}

nikola.location = 'Croatia';
nikola['twitter'] = '@nikolasvigir';
console.log(nikola);

//Chalange
//"Nikola has 3 friends, and his best friend is called Mich"
console.log(
  `${nikola.firstName} has ${nikola.friends.length} friends, and his best friend is called ${nikola.friends[0]}`
);
*/

/*  46
const nikola = {
  firstName: 'Nikola',
  lastName: 'Švigir',
  birthYear: 1997,
  job: 'Student',
  friends: ['Mich', 'Bobo', 'Luka'],
  hasDriversLicense: true,

  //calcAge: function (birthYear) {
  //   return 2038 - birthYear;
  // }

  //calcAge: function () {
  //  return 2038 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is ${this.calcAge()}-years old ${
    this.job}, and he ${this.hasDriversLicense ? 'has'
    : 'doesnt have'} drivers license`;
  },
};

console.log(nikola.calcAge());

console.log(nikola.age);
console.log(nikola.age);
console.log(nikola.age);

// Chalenge
// "Nikola is 23-years old studnet, and he has a drivers's licence"
console.log(nikola.getSummary());
*/


/* 46
console.log('Lifting weights repetition 1');

for(let rep = 1; rep <= 10; rep++){
  console.log(`Lifting weights repetition ${rep}`);
}
*/

/* 47
const nikolaArray = [
  'Nikola',
  'Svigir',
  2037 - 1997,
  'Student', 
  ['Miki', 'Bobo', 'Pero'],
  true
];
const types =[];

for(let i = 0; i < nikolaArray.length; i++){
  // Reading from jonas array
  console.log(nikolaArray[i], typeof nikolaArray[i]);

  // Filling types array
  //types[i]  = typeof nikolaArray[i];
  types.push(typeof nikolaArray[i]);
}

console.log(types);
const years = [1991,2007,1959,2020];
const ages = [];

for(let i = 0; i < years.length;i++){
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break 
console.log('--- ONLY STRINGS ---')
for(let i = 0; i < nikolaArray.length;i++){
  if (typeof nikolaArray[i] !== 'string') continue;

  console.log(nikolaArray[i], typeof nikolaArray[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for(let i = 0; i < nikolaArray.length; i++){
  if(typeof nikolaArray[i] === 'number') break;

  console.log(nikolaArray[i], typeof nikolaArray[i])
}
*/

/* 48
const nikolaArray = [
  'Nikola',
  'Svigir',
  2037 - 1997,
  'Student', 
  ['Miki', 'Bobo', 'Pero'],
  true
];

for (let i = nikolaArray.length - 1; i >= 0 ; i--){
  console.log(i, nikolaArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++){
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++){
    console.log(`Exercise ${exercise}: Lifting weights ${rep}`);
  }
}
*/

for (let rep = 1; rep <= 10; rep++){
  //console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 10){
  //console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
//console.log(dice)

while (dice !== 6){
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if(dice === 6){
    console.log("Bingoooooooooo");
  }
}