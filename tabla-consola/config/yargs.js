const argv = require("yargs")
  .option("b", {
    alias: "base",
    demandOption: true,
    describe: "ingresar la base",
    type: "number",
  })
  .option("l", {
    alias: "listar",
    describe: "listar",
    type: "boolean",
    default: false,
  })
  .option("h", {
    alias: "hasta",
    describe: "rango de multiplicacion",
    type: "number",
    default: 10,
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      //Nan es igual a Not a number
      throw "la base tiene que ser un numero";
    }
    return true;
  }).argv;

module.exports = argv;
