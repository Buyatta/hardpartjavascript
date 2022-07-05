class userCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increment() {
    this.score++;
  }
}

const user1 = new userCreator("eeel", 21);
user1.increment();







/*class fluffy {
  constructor(sound) {
    this.sound = sound
  }
  talk() {
  return this.sound
}
}

class dog extends fluffy{
  constructor() {
    super('woofly')
  }
}
const flusss = new dog()
flusss.talk()


/*function userCreator(name, score) {
 this.name = name
  this.score = score
}

userCreator.prototype.increment =  function () {
    this.score++
  }


const user1 = new userCreator('will', 2)
user1.increment()
/*function multiplyBy2(num) {
  return num*2
}
multiplyBy2.stored = 5
multiplyBy2(3)

multiplyBy2.stored
multiplyBy2.prototype

/*function userCreator(name, score) {
  const newUser = Object.create(userfunctionStore)
  newUser.name = name
  newUser.score = score
  return newUser
}
const userfunctionStore = {
  increment: function () {
    const add1 = () => { this.score++ }
    add1()
  }
}
const user1 = new userCreator('will', 10)
//user1.increment()

/*function person(saying) {
  const say = Object.create(talk);
  say.saying = saying;
  return say;
}

/*const talk = {
  up: function () {
    console.log("I say", this.saying);
  },
};

const cruck = new person("semicolon");

/*function userCreator(name, score) {
  const newUser = Object.create(userfunctionStore)
  newUser.name = name
  newUser.score = score
  return newUser
}
const userfunctionStore = {
  increment: function () {
    function add1() {
      this.score++
    }
    add1.call(this)
  }
}
const user1 = userCreator('will', 22)
const user2 = userCreator('Tom', 23)
user1.increment()
user2.increment()


/*function userCreator(name, score) {
  const newUser = Object.create(functionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}
const functionStore = {
  increment: function () {
    this.score++;
  },
};

const user1 = userCreator("will", 2);
const user2 = userCreator("Tim", 3);
user1.hasOwnProperty("score");

/*var o = { a: 1, b: 2 }
function apply(c,d) {
  return this.a + this.b+c+d
}
apply.call(o,5,7)



/*const ball = {
  prop: 'type',
  just: function () {
    return this.prop
  }
}
console.log(ball.just())

/*const myDate = new Date()
let object = myDate

do {
  object = object.hasOwnProperty(object)
  console.log(object)
}while(object)

/*const myObject = {
  city: 'Madrid',
  greeting() {
    console.log(` Greetings from ${this.city}`)
  }
}
myObject.greeting()

/*

/*function userCreator(name, score) {
  const user = {};
  user.name = name;
  user.score = score;
  user.increment = function () {
    user.score++;
  };
  return user;
}

const user1 = userCreator("will", 2);
const user2 = userCreator("Tim", 3);
user1.increment();
user2.increment();

/*function user(name, score) {
 name = ''
 score = []
  const increment = function(){user.score++}
}

 const user3 = (user('Tom', 2))

/*const user1 = {
  name: 'will',
  score: 20,
  increment: function () { user1.score++ }
}
user1.increment()

const user2 = {};
user2.name = 'Tom'
user2.score = 23
user2.increment = function () {
  user2.score++
}
user2.increment()

const user3 = Object.create(null)
user3.name = 'Peter'
user3.score = 23
user3.increment = function () {
  user3.score++
}
user3.increment()

/*function display(data) {
  console.log(data);
}
function printHello() {
  console.log("printHello");
}

function block1sec() {}

setTimeout(printHello, 1000);

const futureData = fetch("https://www.twitter.com/jack/tweet", {
  mode: "no-cors",
  type: "display"
});
futureData.then(display);

block1sec();
console.log("Me First");

/*function display(data) {
  console.log(data)
}
const futureData = fetch("https://twitter.com/will/tweet/100", {
  mode: "no-cors",
});
futureData.then(display)
console.log('Me first')
/*
https://twitter.com/will/tweet/1
https://api.twitter.com/2/tweets
function printHello() {
  console.log('Hello')
}
function blockSecond(){
  //to block function from running for 1 second.
}
setTimeout(printHello,0)
blockSecond()
console.log('Me First')

/*function printHello() {
  console.log("HELLO");
}
setTimeout(printHello, 0);
console.log("me first");

/*const num = 3
function multiply(inputNumber) {
  const result = inputNumber * 2
  return result
}

const output = multiply(num)
const newOutput = multiply(2)

/*console.log("Hi");
let Text = document.querySelector("#text");
function vutto() {
  Text.addEventListener("click", function onClick() {
  console.log("click");
});
}

setTimeout(function onTimeout() {
  console.log("timeout"), 5000;
});
console.log("fuck");

/*function foo() {
  throw new Error('oops')
}
function baz() {
  foo()
}
function boo() {
  baz()
}
baz()


/*let n 

function multiply(a, b) {
  return a*b
}
function square(n) {
  return multiply(n,n)
}
function printSquare() {

  var squared = square(n)
  console.log(squared)
}
console.log(printSquare)
printSquare(4)
/*function print() {
  console.log('Hello')
}
function blockSeconds(){}
setTimeout(print, 0)
blockSeconds()
console.log('hey')

/*const createCounter = function () {
  let counter = 0;
  let increment = function () {
    counter = counter + 1;
  };
  
  return increment;
};
createCounter()



/*let c = 4;
function addX(x) {
  return function (n) {
    return x+n
  }
}
let addTwo = addX(3)
let d = addTwo(c)
console.log(d)
/*const createCounter = function () {
  let counter = 0;
  const myFunction = function () {
    counter = counter + 1;
    return counter;
  };
  return myFunction;
};
let increment = createCounter();
let c1 = increment()
console.log(c1) 

/*let a = 3;
function addTwo(x) {
  let ret = x + 2;
  return ret;
}
let b = addTwo(a);
console.log(b);*/

/*let vall = 2
function multiplyThis(n) {
  let ret = n * vall
  return ret 
}
let multiply = multiplyThis(6)
console.log(multiply)*/
/*let val = 7;
function createAdder() {
  function addTwo(a, b) {
    let ret = a + b
    return ret
 }
return addTwo
}
let adder = createAdder()
let sum =adder(val,8)
console.log(sum)*/
