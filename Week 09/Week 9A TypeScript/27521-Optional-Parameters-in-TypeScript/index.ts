// null and undefined are primitive data types in TypeScript, however, they are treated differently by TypeScript. If you are planning on using null to define a property of an interface that is not known yet, use the TypeScript optional parameter, ?.

//If we wanted to declare the same object as an interface in TypeScript, we would have to use the optional parameter for the weight property.

interface giraffeTwo = {
  species: string;
  name: string;
  weight?: number;
  age: number;
  diet: string;
};
