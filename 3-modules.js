// Modules

// CommonJS, every files is module (by default)
// Modules - Encapsulated Code (only share minimum what we want)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");

require("./7-mind-grenade.js");

console.log(names);
console.log(data);

sayHi("Salvador");
sayHi(names.john);
sayHi(names.peter);
