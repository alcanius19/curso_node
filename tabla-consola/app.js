const fs = require("fs");
const colors = require("colors");
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs')
const base = argv.b;
const rango = argv.h;

crearArchivo(base, argv.l,rango)
  .then((nombreArchivo) => console.log(nombreArchivo.underline.green))
  .catch((error) => console.log(error));

// console.log(process.argv);
// console.log(argv);

