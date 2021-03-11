// 18.4. Inheritance

// 18.4.1. extends
/* 
When designating a class as the child class of another in JavaScript, we use the extends keyword. We also must use the super() constructor to get the properties and methods needed from the parent class:

class ChildClass extends ParentClass {
  constructor () {
    super();
    // properties
  }
}

The extends keyword is not supported in Internet Explorer.
*/

class Felidae {
	constructor() {
		this.claws = "retractable";
	}
}

class Panthera extends Felidae {
	constructor() {
    super();
		this.roar = "loud";
	}
}

class Tiger extends Panthera {
	constructor() {
    super();
		this.hasStripes = "true";
	}
}

let tigger = new Tiger();

console.log(tigger);

let thisLove = new Panthera();

console.log(thisLove);