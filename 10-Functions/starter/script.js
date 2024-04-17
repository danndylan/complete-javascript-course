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

const greeterHello = greetDeclaration('Hello');
greeterHello('Dylan');
greeterHello('DDDD');
greetDeclaration('Hi')('Dylan');
greetDeclaration('Yo')('DDD');

*/

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

lufthansa.book(23, 'Dylan');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'Sarah Williams');

//CALL
book.call(eurowings, 23, 'Dylan');
console.log(eurowings);

book.call(lufthansa, 423, 'Sarah');

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

book.call(swiss, ...flightData);
console.log(swiss);

//BIND
const bookEW = book.bind(lufthansa);

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const showTotal = addTaxRate(0.1);
console.log(showTotal(100));
