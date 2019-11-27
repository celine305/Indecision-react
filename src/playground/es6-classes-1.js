class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age =  age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
};

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if(this.hasMajor()){
      description += ` Their major is ${this.major}.`
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, homeLocation) {
    super(name);
    this.homeLocation = homeLocation;
  }
  hasLocation () {
    return !!this.homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if(this.hasLocation()) {
      greeting += ` I am visiting from ${this.homeLocation}.`
    }
    return greeting
  }
}

const me = new Student('Céline Abessolo', '28', 'Computer Science');
console.log(me); //Person {name: "Céline Abessolo"}
console.log(me.getGreeting()); //Hi. I am Céline Abessolo!
console.log(me.getDescription()); //Céline Abessolo is 28 year(s) old. Their major is Computer Science.
console.log(me.hasMajor()); //true

const other = new Student()
console.log(other) //Person {name: "Anonymous"}
console.log(other.getGreeting()); //Hi. I am Anonymous!
console.log(other.getDescription()) //Anonymous is 0 year(s) old.
console.log(other.hasMajor()); //false


const traveler1 =  new Traveler('Céline', 'Munich');
const traveler2 =  new Traveler('Andrew');
console.log(traveler1.getGreeting()); //Hi. I am Céline! I am visiting from Munich.
console.log(traveler2.getGreeting()); //Hi. I am Andrew!
