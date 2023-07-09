'use strict';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,
  

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDeliver: function ({
    time = '20:00',
    address = 'Nadvina 12',
    mainIndex = 0,
    starterIndex = 0,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} for address ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Your pasta ingridients are ${ing1}, ${ing2} and
    ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...other) {
    console.log(mainIngredient);
    console.log(other);
  },
};

if(restaurant,openingHours.mon) console.log(restaurant.openingHours.mon.open)
if(restaurant,openingHours.fri) console.log(restaurant.openingHours.fri.open)

//Optional chaining
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of days){
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day} we open at ${open}`);
}

//Method
console.log(restaurant.ordeasdr?.(0, 1) ?? 'Method does not exist')

//Array
const user = [{name: "nikola", occup: 'MD'}]
console.log(user[0]?.name ?? 'User does not exist')

/////112
/*
const rest1 = {
  name: "Marcos",
  numGuests: 0,
}

const rest2 = {
  name: "Luigis",
  owner: "Luigi",
}

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//rest1.owner = rest1.owner && '<ANONYMOUS>';
//rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
*/
//// 111
/*console.log(rest1);
console.log(rest2);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for(const item of menu) console.log(item)

for(const[i, el] of menu.entries()){
  console.log(`${i + 1}: ${el}`)
}
*/

/* 108
restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);


// Use any data type, return any data type, sort-circuiting

console.log(3 || 'Nikola');
console.log('' || 'Nikola');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log(0 && 'Nikola');
console.log(7 && 'Nikola');

//Practicle example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'tomato');

*/
/* 107
// 1 Destructuring

// SPREAD, because on rioght side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2 Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(1, 2, 3);
add(2, 3, 4, 56, 6, 4);
add(1, 2, 3, 4, 5, 6, 7);
const x = [12, 21, 10];
add(...x);

restaurant.orderPizza('mushrooms', 'spinach', 'olives', 'ham');
*/
/*105
const arr = [7, 8, 9];
const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);
console.log(...goodNewArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMneuCopy = [...restaurant.mainMenu];

// Join 2 menus
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Nikola';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(str);
console.log(...letters);

const ingridients = [
  /*prompt('Select ingridient 1'),
  prompt('Select ingridient 2'),
  prompt('Select ingridient 3'),
];
console.log(ingridients);
restaurant.orderPasta(...ingridients);

// objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Marco' };
console.log(newRestaurant);

const copyRestauraunt = { ...restaurant };
copyRestauraunt.name = 'Marcini';
console.log(copyRestauraunt);
*/
/* 104
restaurant.orderDeliver({
  time: '22;30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDeliver({});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default velues
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating values
let a = 111;
let b = 785;
const obj = { a: 2, b: 34, c: 14 };
({ a, b } = obj);
console.log(a, b);

const {
  fri: { open: o, close: c },
} = openingHours;
const { fri } = openingHours;
console.log(o, c);
console.log(fri);
*/ /////////

/* 103
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested desctructuring
const nested = [2, 3, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [r = 1, p = 1, q = 1] = [8, 9];
console.log(r, p, q);
*/
/*
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
*/
