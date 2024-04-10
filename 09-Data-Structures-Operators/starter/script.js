'use strict';

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console 
(We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw").
HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

console.log(`Event removed: ${gameEvents.get(64)}`);
gameEvents.delete(64);

// for (let ts = 0; ts < 90; ts += 9) {
//   for (const [time, event] of gameEvents.entries()) {
//     if (time < ts + 9) {
//       console.log(`[${ts < 45 ? 'FIRST' : 'SECOND'} HALF] ${time}: ${event}`);
//       gameEvents.delete(time);
//     }
//   }
// }

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()];
console.log(
  `An event happened, on average, every ${
    time.pop(time) / gameEvents.size
  } minutes`
);

for (const [time, event] of gameEvents) {
  console.log(`[${time <= 45 ? 'FIRST' : 'SECOND'} HALF] ${time}: ${event}`);
}
/**
for (const [numGoal, scorer] of game.scored.entries())
  console.log(`Goal ${numGoal + 1}: ${scorer}`);

let total = 0;
const values = Object.values(game.odds);
for (const odd of values) total += odd;
console.log(total / values.length);

const odds = Object.entries(game.odds);
for (let [team, odd] of odds) {
  const teamStr = game[team] ? `victory ${game[team]}` : 'draw';
  console.log(`Odd of ${teamStr}: ${odd}`);
}

const [players1, players2] = game.players;

const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// const { team1, x: draw, team2 } = game.odds;
const {
  odds: { team1, x: draw, team2 },
} = game;
// console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored.`);

  for (let i = 0; i < players.length; i++) console.log(players[i]);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

console.log((team1 < team2 && game.team1) || (team2 < team1 && game.team2));

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);


///// MAPS, SETS 
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'we are closed');

console.log(rest.get('categories'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 24;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1, 2, 3];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again'],
]);

//Converting object to map
console.log(question);
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Your answer: '));
console.log(answer);
console.log(question.get(answer === question.get('correct')));

console.log(new Set('Dylan'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Garlic Bread');

console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);


//Property NAMES
const properties = Object.keys(openingHours);
// console.log(properties);

let openMsg = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openMsg += `${day}, `;
}

console.log(openMsg);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Vic Park',
});

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// w/ optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.orderDelivery?.(0, 1) ?? 'Method does not exist.');

// Arrays
const users = [
  {
    firstName: 'jonas',
    email: 'hello@jonas.com',
  },
];
console.log(users[0]?.name ?? 'User array empty.');


const rest1 = {
  name: 'Capri',
  numGuests: 20,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovani Rossi',
  numGuests: 0,
};

// rest2.numGuests = rest2.numGuests || 10;

//rest2.numGuests ||= 10;

// rest2.numGuests ??= 10;

rest2.owner &&= '<ANONYMOUS>';

console.log(rest2);

restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests);

// nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

console.log('---- OR ----');

//can use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'dylan');
console.log('' || 'dylan');
console.log(true || 0);
console.log(undefined || null);

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const numGuests2 = restaurant.numGuests || 10;
console.log(numGuests2);

console.log('---- AND ----');
console.log(0 && 'dylan');
console.log(7 && 'dylan');

console.log('hello' && 23 && null && 'jonas');

//practice
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'tomato');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'tomato');

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Vic Park',
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 222;
const obj = { a: 23, b: 7, c: 15 };
({ b, a } = obj);
console.log(b, a);

//nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array
const mainMenucopy = [...restaurant.mainMenu];

//join 2 arrays
const allMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(allMenu);

const ingredients = [
  // prompt("Let's make pasta. Ingeedient 1"),
  // prompt("Let's make pasta. Ingeedient 2"),
  // prompt("Let's make pasta. Ingeedient 3"),
];
console.log(ingredients);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

//Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(2, 3, 4);
add(6, 7, 8, 9);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'tomato');
restaurant.orderPizza('pepperoni');

 */
