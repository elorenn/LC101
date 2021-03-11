// 18.3.2. Assigning Methods Inside Constructor

class Astronaut {
  constructor(name, age, mass){
    this.name = name;
    this.age = age;
    this.mass = mass;
    this.reportStats = function() {
      let stats = `${this.name} is ${this.age} years old and has a mass of ${this.mass} kg.`;
      return stats;
    }
  }
}

let fox = new Astronaut('Fox', 7, 12);

console.log(fox.reportStats());