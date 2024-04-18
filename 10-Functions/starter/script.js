'use strict';
/**
const bookings = [];
const createBooking = function (
  flightNumber,
  numPassengers = 1,
  price = 2 * numPassengers
) {
  //ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || -1;
  const booking = {
    flightNumber,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 5);
createBooking('LH123', undefined, 200);

const flight = 'LH123';
const dylan = {
  name: 'Dylan',
  passport: 45489050257,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'Lh999';
  passenger.name = 'Mr. ' + passenger.name;
  console.log(flightNum, passenger);
  if (passenger.passport === 45489050257) {
    alert('check in');
  } else {
    alert('wrong passport');
  }
};

// checkIn(flight, dylan);
// console.log(flight);
// console.log(dylan);

// const flightNum = flight;
// const passenger = dylan;

const newPaspport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPaspport(dylan);
checkIn(flight, dylan);


const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//higher order func
const transformer = function (str, fn) {
  console.log(str);

  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
  console.log('hi');
};

document.body.addEventListener('click', high5);
['dylan', 'del', 'prado'].forEach(high5);
 

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

const greetDeclaration = greeting => nameVar =>
  console.log(`${greeting} ${nameVar}`);

greetDeclaration('Hello')('Dylan');


const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}, ${name}` });
  },
};

lufthansa.book(23, 'dylan');
lufthansa.book(224, 'john');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'sarah');

//CALL
book.call(eurowings, 23, 'dylan');
console.log(eurowings);

book.call(lufthansa, 423, 'sarah');

console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

//APPLY
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

*/

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
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const answer = Number(
      prompt(`What is your favourite programming language?
      0: JavaScript
      1: Python
      2: Rust
      3: C++
      (Write option number)`)
    );
    this.answers[answer]++;
    this.displayResults('string');
    return this.displayResults();
  },
  displayResults: function (type = []) {
    console.log(typeof type);

    console.log(
      typeof type === 'array'
        ? this.answers
        : `Poll results are ${String(...this.answers)}`
    );
  },
};

// const registerNewAnswer = function () {
//   const answer = Number(
//     prompt(`What is your favourite programming language?
//     0: JavaScript
//     1: Python
//     2: Rust
//     3: C++
//     (Write option number)`)
//   );
//   this.answers[answer]++;
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', registerNewAnswer.bind(poll));

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
