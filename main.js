// Intro

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

console.log(newYearsResolutions);

// Create an Array

const hobbies = ['baseball', 'art', 'art'];

console.log(hobbies);

// Accessing Elements

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];

console.log(listItem);

console.log(famousSayings[2]);

console.log(famousSayings[3]);

// Update Elements

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';

console.log(groceryList);

// Arrays with let and const

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);

// Length Property

const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);

// Push Method

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('sweep floors', 'clean stove');

console.log(chores);

// Pop Method

const chore = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chore.pop();

console.log(chore);

// More Array Methods

// Shift Method
const list = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

list.shift();
console.log(list);

// Unshift Method
list.unshift('popcorn');
console.log(list);

// Slice Method
console.log(list.slice(1, 4));

// Index Of
const pastaIndex = list.indexOf('pasta');
console.log(pastaIndex);

// Arrays and Functions

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr) {
    arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

function removeElement(newArr) {
    newArr.pop();
}

console.log(removeElement(concept));

removeElement(concept);
console.log(concept);

// Nested Arrays

const numberClusters = [[1, 2], [3, 4], [5, 6]];

const target = numberClusters[2][1];
console.log(target);