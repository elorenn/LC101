const input = require("readline-sync"); 
const name = input.question("What is your name?");
console.log(`hello ${name}`);

/*
We will use the repl.it interface to add new modules to a project:

  1. Click on the Packages icon in the left menu (it looks like a box).

  2. Enter "readline-sync" in the search box.

  3. Click on the top matching result.

  4. Verify this is the module you want, then click on the plus icon.

  5. Clicking the plus icon adds a package.json file that includes a dependency listing for readline-sync.
 */