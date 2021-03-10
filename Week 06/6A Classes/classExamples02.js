// 18.2.2.1. Setting Default Values

// Click 'Run' to see what happens when we call Astronaut but do not pass in 3 arguments.

//Next, set default values for 1 or more of the parameters in constructor.

class Astronaut {
  constructor(name, age, mass){
    this.name = name;
    this.age = age;
    this.mass = mass;
  }
}

let tortoise = new Astronaut('Speedy', 120);

console.log(tortoise);
console.log(tortoise.name, tortoise.age, tortoise.mass);

//What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT!

let rabbit = new Astronaut('Bugs', 2, 15, 'grey');

console.log(rabbit);

tortoise.mass = 50;

console.log(tortoise);

rabbit.color = 'grey';

console.log(rabbit);
console.log(' ');

// To avoid issues with missing arguments, we can set a default value for a parameter as follows:

class Astronaut2 {
   constructor(name, age, mass = 54){
      this.name = name;
      this.age = age;
      this.mass = mass;
   }
}

// Now if we call Astronaut but do not specify a mass value, the constructor automatically assigns a value of 54. If an argument is included for mass, then the default value is ignored:

let tortoise2 = new Astronaut2('Speedy', 120);
console.log(tortoise2);
console.log(tortoise2.name, tortoise2.age, tortoise2.mass);