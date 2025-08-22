/*11
var js  = 'amazing';
console.log(40+8+7-4);

console.log("Nikolaaaaa");

var firstName = "Nikola";
console.log(firstName);
console.log(firstName);
console.log(firstName);

var myFirstJob = "Student";
var myCurrentJob = "Programmer";

console.log(myFirstJob);
*/

/*12
var javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Nikola');

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

var year;
console.log(year);
console.log(typeof year);

year = 1997;
console.log(year);

console.log(typeof null);
*/

/*13
let age = 22;
age = 25;

const birthYear = 1997;

var job = 'teacher';
job = 'student';

let lastName = 'Svigir'
console.log(lastName);
*/

/* 14
const now = 2040;
const ageNikola = now - 1997;
const ageSarah = now - 2022;
console.log(ageNikola, ageSarah);

console.log(ageNikola * 2, ageNikola / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3

const firstName = 'Nikola';
const lastName = 'Svigir';
console.log(firstName + ' ' + lastName);

//Assignment operators
let x = 10 + 5; //150
x += 10; // x = x + 10

console.log(x);

// Comparison operators
console.log(ageNikola > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/* 15
const now = 2040;
const ageNikola = now - 1997;
const ageSarah = now - 2022;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageNikola + ageSarah) / 2;
console.log(ageNikola, ageSarah, averageAge);
*/

/* 17
const firstName = 'Nikola';
const job = 'Programmer';
const birthYear = 1997;
const year = 2020;

const nikola =
  "I'm " + firstName + ', a ' + (year - birthYear) + ' years old' + job + '!';
console.log(nikola);

const nikolaNew = `I am ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(nikolaNew);

console.log(`Just a regualar string ....`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
*/

/* 18
const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is to young, wait another ${yearsLeft} years`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/* 20
// Type conversions
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Nikola'));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' > '18');
*/

/* 21
// 5 falsy values: 0, '',undefined, null, NaN,
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Nikola'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all.");
} else {
  console.log('You could get a job.');
}

let height = 0;
if (height >= 0) {
  console.log('Height is defined');
} else {
  console.log('Height is undefined');
}
*/

/* 22
const age = '18';
if (age === 18) {
  console.log('Your are adult (strict)');
}

if (age == 18) {
  console.log('Your are adult(loose)');
}

const favorite = Number(prompt("What's your favourite number"));
console.log(favorite);

if (favorite === 20) {
  console.log('nice');
} else if (favorite === 10) {
  console.log('Ten si nice');
} else {
  console.log('Its not 20 or 10');
}

if (favorite !== 23) {
  console.log('zasto ne 23');
}
*/

/* 23
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense || hasGoodVision);
console.log(hasDriversLicense && hasGoodVision);
console.log(!hasDriversLicense);


const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive');
} else {
  console.log('She should not drive');
}
*/

/* 23
const day = 'thursday';

switch (day) {
  case 'monday':
    console.log('Plan rest of week');
    console.log('Go to the work');
    break;
  case 'tuesday':
    console.log('Studying for school');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Washing the car');
  case 'friday':
    console.log('RUNNNNNNNN');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Relaxing');
    break;
  default:
    console.log('Not a valid day');
}
*/

/* 27
3 + 4;

if (23 > 10) {
  const str = '23 is bigger';
}

console.log(`I'm ${2037 - 2020} years old`);
*/

const age = 22;
//age >= 18 ? console.log('I like to dring wine') : console.log('I like to dring water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
