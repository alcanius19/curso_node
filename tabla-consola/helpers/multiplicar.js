const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base, listar=false,hasta) => {
  try {
    let salida = "";
    for (let index = 1; index <= hasta; index++) {
      salida += ` ${base} x ${index} = ${base * index}\n`;
    }
    if(listar){
     
      console.log(`tabla del ${base} creada`, salida.rainbow);
      
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
  
    return `tabla-${base}.txt`;

  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
