const country = 'Croatia';
const continent = 'Europe';
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
console.log(description);
