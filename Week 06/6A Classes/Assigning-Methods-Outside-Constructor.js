// 18.3. Assigning Class Methods

// 18.3.1. Assigning Methods Outside Constructor

class Astronaut {
  constructor(name, age, mass){
    this.name = name;
    this.age = age;
    this.mass = mass;
  }

  reportStats() {
    let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
    return stats;
  }
}

let fox = new Astronaut('Fox', 7, 12);
console.log(fox.reportStats());