const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Esta es la base de la tabla de multiplicar",
    // default: "1",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    describe: "Limite de la tabla de multiplicar ",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla de multiplicar en consola",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base debe ser un número";
    }
    return true;
  }).argv;

module.exports = argv;
