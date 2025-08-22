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

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld3 = (population) => (population / 7900) * 100;
const percentageCroatia = console.log(percentageOfWorld3(4));

function describePopulation(country, population) {
  const perc = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${
    Math.round(perc * 100) / 100
  }% of world`;
  return description;
}

console.log(describePopulation('China', 1441));
const populations = [4.7, 5.4, 25, 75];
if (populations.length === 4) {
  console.log('true');
} else console.log('false');

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

const myCountry = {
  country: 'Croatia',
  capital: 'Zagreb',
  language: 'Croatian',
  population: 4,
  neighbours: ['Italy', 'Bih', 'Serbia'],
};
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countriues and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry.population -= 2;
console.log(myCountry.population);
