const { createTableFile } = require("./helpers/multiplicar");
const colors = require("colors");
const argv = require("./config/yargs");

console.clear();

createTableFile(argv.b, argv.l, argv.h)
  .then(console.log)
  .catch(console.log);
