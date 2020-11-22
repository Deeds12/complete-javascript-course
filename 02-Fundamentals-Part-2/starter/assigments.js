const country = 'Croatia';
const continent = 'Europe';
const capitolCity = 'Zagreb';
let population = 4000000;
console.log(
  'My country is ' +
    country +
    ' On continent ' +
    continent +
    ' ,population of: ' +
    population
);

const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = 'croatian';
let halfPopulation = population / 2;
console.log(halfPopulation);

console.log(population++);

let finladPopulation = 6000000;
console.log(population > finladPopulation);

let avaregePopulation = 33000000;
console.log(population < avaregePopulation);

let description =
  country +
  ' is in ' +
  continent +
  ', and its ' +
  population +
  ' people speak ' +
  language;

const newDescription = `${country} is in ${continent}, and it's ${population} people speak ${language}`;
console.log(newDescription);
console.log(description);

console.log(
  `${country}'s population is ${
    population >= 33000000 ? 'above average' : 'below average'
  }`
);

function describeCountry(country, population, capitalCity) {
  const description = `${country} has ${population} milion people and its capitol city is ${capitalCity} `;
  return description;
}

const croDesc = describeCountry('Hrvatska', 4.5, 'Zagreb');
const bihDesc = describeCountry('Bosna', 3.5, 'Sarajevo');
const sloDesc = describeCountry('Slovenija', 2.5, 'Ljubljana');

console.log(croDesc, '\n', sloDesc, '\n', bihDesc);
