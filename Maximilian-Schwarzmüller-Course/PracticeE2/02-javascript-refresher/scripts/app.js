import * as util from './util.js'
import one from './one.js'

console.log(util.apiKey)

// default export
console.log(one)
import * as util from './util.js'
import one from './one.js'

console.log(util.apiKey)

// default export
console.log(one)

// variables , values and variables
let a = 1
a = 2
console.log(a)

// constants
const b = 1
console.log(b)
// b = 3
// b = 3
//TypeError: Assignment to constant variable.
// at app.js:12:3
let userMessage = 'Hello'
console.log(userMessage)

// operators
// + - * / % **
let c = 1 + 2
console.log('1+1 is ' + c)
let d = 1 - 2
console.log('1-2 is ' + d)
let e = 1 * 2
console.log('1*2 is ' + e)
let f = 1 / 2
console.log('1/2 is ' + f)
let g = 1 % 2
console.log('1%2 is ' + g)
let h = 2 ** 3
console.log('2**3 is ' + h)

// comparison operators
// == === != !== > < >= <=
let i = 1 == 2 // false
console.log('1==2 is ' + i)
let j = 1 === 2 // false
console.log('1===2 is ' + j)
let k = 1 != 2 // true
console.log('1!=2 is ' + k)
let l = 1 !== 2 // true
console.log('1!==2 is ' + l)
let m = 1 > 2 // false
console.log('1>2 is ' + m)
let n = 1 < 2 // true
console.log('1<2 is ' + n)
let o = 1 >= 2 // false
console.log('1>=2 is ' + o)
let p = 1 <= 2 // true
console.log('1<=2 is ' + p)

// assignment operators
// = += -= *= /= %= **=
let q = 1
q += 2
console.log('1+=2 is ' + q)
let r = 1
r -= 2
console.log('1-=2 is ' + r)
let s = 1
s *= 2
console.log('1*=2 is ' + s)
let t = 1
t /= 2
console.log('1/=2 is ' + t)
let u = 1
u %= 2
console.log('1%=2 is ' + u)
let v = 2
v **= 3
console.log('2**=3 is ' + v)

// logical operators
// && || !

// functions
function greet() {
  console.log('Hello ')
}
greet()

function greetUser(userName) {
  console.log('Hello ' + userName)
}
greetUser('Max')

function greetDefault(name, message = 'Hello') {
  console.log(message + ' ' + name)
}
greetDefault('Joe', 'Hola')
greetDefault('Raj')

function returnGreet(name, message = 'hello') {
  return message + ' ' + name
}
console.log(returnGreet('Alice', 'Morning'))

// Arrow function

f = () => {
  console.log('Arrow function!')
}

// Object
const user = {
  name: 'Raj',
  age: 20,
  greet() {
    console.log('Namaste')
  },
  printInfo() {
    console.log(this.name + ' is ' + this.age + ' years old.')
  },
}
user.greet()
user.printInfo()

// class

class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log('Namaste')
  }
  printInfo() {
    console.log(this.name + ' is ' + this.age + ' years old.')
  }
}

const user1 = new User('Jao', 40)
user1.greet()
user1.printInfo()

// Arrays

const hobbies = ['reading', 'writing']
console.log(hobbies)

hobbies.push('swimming')
console.log(hobbies)

const ind = hobbies.findIndex((item) => item === 'writiqng')
console.log(ind)

console.log(hobbies.map((item) => item.toUpperCase()))
console.log(hobbies.map((item) => ({ [item]: item.toUpperCase() })))

// destructuring
const userName = ['Rishi', 'Sunak']
const [firstName, lastName] = ['Rishi', 'Sunak']
console.log(userName)
console.log(firstName + ' ' + lastName)

const { name1, age1 } = {
  name1: 'Rishi',
  age1: 48,
}

console.log(name1 + ' ' + age1)

// destructuring with alias
const { name1: newName, age1: newAge } = {
  name1: 'Rishi1',
  age1: 481,
}
console.log(newName + ' ' + newAge)

// Spread operator

const newhobbies = ['Coding']
const allHobbies = [...newhobbies, ...hobbies]
console.log(allHobbies)

const extUSer = {
  ...user1,
  country: 'UK',
}
console.log(extUSer)

// control structures
const myage = 10
if (myage === 6) {
  console.log('Primary')
} else if (myage === 8) {
  console.log('Secondary')
} else {
  console.log('High school')
}

const hobbies1 = ['Sports', 'Cooking']
for (const h1 of hobbies1) {
  console.log(h1)
}

function handleTimeout() {
  console.log('Time up')
}

const handleTimeout1 = () => {
  console.log('Done')
}

setTimeout(handleTimeout, 100)
setTimeout(handleTimeout1, 100)

// function as a parameter

function greeter(greet) {
  greet()
}

greeter(() => console.log('Hola'))

// function inside function
function init() {
  function run() {
    console.log('Initialized')
  }
  run()
}

init()

// references vs primitives
