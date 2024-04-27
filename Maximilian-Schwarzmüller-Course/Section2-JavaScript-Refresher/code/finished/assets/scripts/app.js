// import { apiKey } from "./util.js";

// import apiKey from "./util.js";
// import { apiKey, abc as content } from "./util.js";
// import * as util from "./util.js";

// console.log(util.apiKey);
// console.log(content);

// const userMessage = "Hello World!!!";

// console.log(userMessage);
// console.log(userMessage);

// function createGreeting(userName, message = "Hello!") {
// console.log(userName);
// console.log(message);
//   return "Hi, I am " + userName + ". " + message;
// }

// const greeting1 = createGreeting("Max");
// console.log(greeting1);

// const greeting2 = createGreeting("Manuel", "Hello, what's up?");
// console.log(greeting2);

// export default (userName, message) => {
//  console.log("Hello");
//   return userName + message;
// };

// const user = {
//   name: "Max",
//   age: 34,
//   greet() {
//     console.log("Hello!");
//     console.log(this.age);
//   }
// };

// console.log(user.name);
// user.greet();

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Hi!");
//   }
// }

// const user1 = new User("Manuel", 35);
// console.log(user1);
// user1.greet();

// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0]);

// hobbies.push("Working");
// console.log(hobbies);

// const index = hobbies.findIndex((item) => item === "Sports");

// console.log(index);

// const editedHobbies = hobbies.map((item) => ({ text: item }));
// console.log(editedHobbies);

// const [firstName, lastName] = ["Max", "Schwarzmüller"];

// const firstName = userNameData[0];
// const lastName = userNameData[1];

// console.log(firstName);
// console.log(lastName);

// const { name: userName, age } = {
//   name: "Max",
//   age: 34
// };

// console.log(userName);
// console.log(age);

// const name = user.name;
// const age = user.age;

// const hobbies = ["Sports", "Cooking"];
// const user = {
//   name: "Max",
//   age: 34
// };

// const newHobbies = ["Reading"];

// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const extendedUser = {
//   isAdmin: true,
//   ...user
// };
// console.log(extendedUser);

// const password = prompt("Your password");

// if (password === "Hello") {
//   console.log("Hello works");
// } else if (password === "hello") {
//   console.log("hello works");
// } else {
//   console.log("Access not granted.");
// }

// const hobbies = ["Sports", "Cooking"];

// for (const hobby of hobbies) {
//   console.log(hobby);
// }

// const list = document.querySelector("ul");
// list.remove();

// function handleTimeout() {
//   console.log("Timed out!");
// }

// const handleTimeout2 = () => {
//   console.log("Timed out ... again!");
// };

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(() => {
//   console.log("More timing out...");
// }, 4000);

// function init() {
//   function greet() {
//     console.log(“Hi!“);
//   }

//   greet();
// }

// init();

// const message = “Hello”;

const hobbies = ['Sports', 'Cooking']
// hobbies = [];
hobbies.push('Working')
console.log(hobbies)

if (10 === 10) {
  console.log('10 is 10')
}

//Revisiting Functions and Parameters
function greet() {
  console.log('Hello!')
}
greet()

// function with parameters
function greetUser(userName) {
  console.log('Hello ' + userName)
}
// max is the argument
greetUser('Max')

// function that returns a value
function add(num1, num2) {
  return num1 + num2
}
console.log(add(1, 5))

// Arrow Functions
const addNumbers = (a, b) => a + b
const result = addNumbers(1, 2)
console.log(result)

//Annonymous Functions
const addNumbers2 = function (a, b) {
  return a + b
}
const result2 = addNumbers2(1, 2)
console.log(result2)

// Revisiting Objects and Classes
const user = {
  name: 'Max',
  age: 30,
  greet() {
    console.log('Hi, I am ' + this.name)
  },
}
user.greet()
console.log(user)

// object using class
class User {
  constructor() {
    this.name = 'Alice'
  }
  greet() {
    console.log('Hi, I am ' + this.name)
  }
}
const user2 = new User()
user2.greet()
console.log(user2)

// Arrays and Array Methods like map()
const hobbies2 = ['Sports', 'Cooking', 'Reading', 'Writing']
hobbies2.push('Coding')
for (let hobby of hobbies2) {
  console.log(hobby)
}
console.log(hobbies2.map((hobby) => 'Hobby: ' + hobby))

const index = hobbies.findIndex((hobby) => hobby === 'Cooking')
console.log(index)

console.log(hobbies2.map((hobby) => ({ 'Hobby ': hobby }))) // Notice the parenthesis around the object to return an object
console.log(
  hobbies2.map((hobby) => {
    return { 'Hobby ': hobby }
  })
) // This is the same as above

// Destructuring
const userNameData = ['Max', 'Schwarzmueller']

const firstName = userNameData[0]
const lastName = userNameData[1]

console.log(firstName, lastName)
const [firstName2, lastName2] = userNameData // destructuring array. The order matters. The name of the variable does not matter. It is based on the order.
console.log(firstName2, lastName2)

const user3 = { userName: 'Bob', age: 30 }
const { age, userName } = user3 //destructuring object. The order does not matter. name of the variable must match the key in the object. aliasing is possible with colon
console.log(userName, age)

// The Spread Operator
const copiedArray = [...hobbies2, 'Driving'] // ... is the spread operator. It copies the array into a new array.
console.log(copiedArray)
hobbies2.push('Programming')
console.log(hobbies2)
console.log(copiedArray)

const extendedUser = { isAdmin: true, ...user3 } // spread operator for objects
console.log(extendedUser)

// Revisiting Control Structures
if (user3.age === 30) {
  console.log('User is 30 years old')
}
if (user3.age === 30 && user3.userName === 'Bob') {
  console.log('User is Bob and 30 years old')
} else {
  console.log('User is not Bob and 30 years old')
}

const hobbies3 = ['Sports', 'Cooking', 'Reading']
for (const hobby of hobbies3) {
  console.log(hobby)
}

// Manipulating the DOM - Not With React!
// const ul = document.querySelector('ul')
// ul.remove()

//Using Functions as Values

setTimeout(() => {
  // anonymous function
  console.log('Timed out1!')
}, 1000)

function handleTimeout2() {
  // function declaration
  console.log('Timed out2!')
}

setTimeout(handleTimeout2, 1000)

const handleTimeout3 = () => {
  // arrow function
  console.log('Timed out3!')
}

setTimeout(handleTimeout3, 1000)

function greeter(f1) {
  f1()
}
const hello = () => {
  console.log('Hello! from function passed')
}

greeter(hello)

// Defining Functions Inside Of Functions
function init() {
  function greet() {
    console.log('Hi! from greet function inside init function')
  }
  greet()
}
init()

// Reference vs Primitive Values
// Primitive values are immutable. They are copied by value. e.,g. numbers, strings, booleans.
// Reference values are mutable. They are copied by reference. e.g. objects, arrays, functions.
//e.g. name = 'Max' is a primitive value. user = {name: 'Max'} is a reference value.
// name = 'Alice' will not change the value of name. user.name = 'Alice' will change the value of user.name
// name = 'Alice' will create a new memory location for the new value. user.name = 'Alice' will change the value in the same memory location.
// const name = 'Max'. name is a constant. The value of name cannot be changed. The value of the object can be changed. e.g. user.name = 'Alice'
// const user = {name: 'Max'}. The object is constant. The object cannot be changed. The value of the object can be changed. e.g user.name = 'Alice'
const hobbies4 = ['Sports', 'Cooking']
// hobbies4 = [] // This will throw an error. The array is a constant. The array cannot be changed.
hobbies4.push('Reading') // This will work. The value of the array can be changed.
console.log(hobbies4)
