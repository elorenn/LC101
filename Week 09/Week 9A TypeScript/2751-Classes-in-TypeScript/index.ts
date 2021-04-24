class Astronaut {
   name: string;
   constructor(firstName: string, lastName: string) {
      this.name = firstName + " " + lastName;
   }
   greet() {
      return "Hello, " + this.name;
   }
}

let Bob = new Astronaut("Bob","Smith");
console.log(Bob);

class Panthera {
   roar: string;
   constructor(currentRoar: string) {
      this.roar = currentRoar;
   }
}

class Tiger extends Panthera {
   stripes: boolean = true;

}

let tigger = new Tiger("loud");
console.log(tigger.roar);
console.log(tigger.stripes);