// https://jasmine.github.io/api/3.6/matchers.html

// 14.2.2.1. index.js:
// import the Jasmine module and create a new Jasmine object, jasmine. This object is responsible for finding and executing our tests:
let Jasmine = require('jasmine');
let jasmine = new Jasmine();

// configure Jasmine to look for tests in the spec/ directory of our project. Any file in this directory of the form fileName.spec.js will be assumed to contain tests, and will be executed by Jasmine:
jasmine.loadConfig({
  spec_dir: 'spec',
  spec_files: [
    "**/*[sS]pec.js"
  ],
});
 
// triggers Jasmine to find and execute the tests:
jasmine.execute();
