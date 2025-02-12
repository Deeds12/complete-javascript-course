'use strict';

///// 128
/* const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  console.log(booking.flightNum);
  console.log(booking.numPassengers);
  console.log(booking.price);
  bookings.push(booking);
};

createBooking('LH251');
createBooking('LH25', 23);
createBooking('LH351', 5, 2000);
createBooking('LH351', undefined, 2000); */


//// 131

/* const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}

// Higher order function
const transformer = function(str, fn){
  console.log(`Original string ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`transformed by: ${fn.name}`);
}

transformer('Javascript is the best!!!', upperFirstWord)
transformer('Javascript is the best!!!', oneWord)

const logFunc = function(){
  console.log('HEEEJ!');
}

document.body.addEventListener('click', logFunc); */

/// 132
/* const greet = function(greeting){
  return function(name){
    console.log(`${greeting}, ${name}`);
  };
};


const greeterHey = greet('Hey');
greeterHey('Nikola');
greeterHey('Josip');
greet('Hiiii')('Nikolaa');

const greetArr = greeting => name => console.log(`${greeting}, ${name}`);
greetArr('Hi')('Nikolaa'); */

//// 133

/* const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name){
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
  }
}

lufthansa.book(234, 'Nikola Svigir');
lufthansa.book(546, 'Nino Ninic');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
}


const book = lufthansa.book
//Call method
book.call(eurowings, 2256, 'John Doe');
book.call(eurowings, 123, 'Ivan Horvat');

book.call(lufthansa, 234, 'Pero Peric');
console.log(eurowings);

//Apply method
const flightData = [556, 'George Conol'];
book.apply(lufthansa, flightData);

book.call(lufthansa, ...flightData)

console.log(lufthansa);

//Bind method
const bookEW = book.bind(eurowings)
const bookLH = book.bind(lufthansa)
bookEW(546, 'Nino Ninic');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Nikola Svigir')
bookEW23('Dodo Dodic')

// WIth event listeners

lufthansa.planes = 300;
lufthansa.buyPlanes = function() {
  console.log(this);
  this.planes++;
  console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.10, 200));

const addTaxCro = addTax.bind(null, 0.25);

console.log(addTaxCro(200));

const addTax2 = function(rate ) {
  return function(value) {
    console.log(value + value * rate)
  }
}

const addTaxCro2 = addTax2(0.25);
addTaxCro2(400); */


///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. 
If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

/* const poll = {
  question: 'What is your favourite programming language?',
  prompt: [
    '0: JavaScript',
    '1: Python',
    '2: Rust',
    '3: C++'
  ],
  answers: new Array(4).fill(0),
  registerNewAnswer(){
    const answer = Number(
      prompt(
        `${this.question}\n${this.prompt.join('\n')}\n(Write option number)`
      )
    );

    typeof answer === 'number' &&
    answer < this.answers.length &&
    this.answers[answer]++;

    this.displayResults();
    //this.displayResults('string');
    console.log(answer);
  },

  displayResults(type = 'string'){
    if(type === 'string'){
      console.log(`Poll results are ${this.answers}`);
    }else if (type === 'array'){
      console.log(this.answers)
    }
  }

}
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string')
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'array') */

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  }
}

g();
f();

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, 
attach an event listener that changes the color of the selected h1 element ('header') to blue,
each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! 
Take all the time you need. Think about WHEN exactly the callback function is executed, 
and what that means for the variables involved in this example.

GOOD LUCK 😀
*/


/* (function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})(); */

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    console.log('blue')
    header.style.color = 'blue';
  })
})();
