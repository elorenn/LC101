// 14.2.2.3. spec/hello.spec.js:
// It is conventional to put tests for fileName.js in spec/fileName.spec.js

const hello = require('../hello.js');

// 14.2.2.4. Specifications and Expectations:
/*
There are two cases we want to test:
  1. The function is called with a string argument. In this case, a customized greeting should be returned.
  2. The function is called with no argument. In this case, the general greeting should be returned.
*/

describe("hello", function(){

  it("should return custom message when name is specified", function(){
    expect(hello("Jasmine")).toEqual("Hello, Jasmine!");
  });

  it("should return a general greeting when name is not specified", function(){
      expect(hello()).toEqual("Hello, World!");
  });

});

// The it function is part of the Jasmine framework as well. Calling it creates a specification, or spec, which is a description of expected behavior. The first argument to it is a string describing the desired behavior.

// The second argument to it is yet another anonymous function. This function contains the test code itself, which takes the form of an expectation. An expectation is a declaration of desired behavior in code. 

// toEqual() is a specialized method called a matcher. 

// https://jasmine.github.io/api/3.6/matchers.html